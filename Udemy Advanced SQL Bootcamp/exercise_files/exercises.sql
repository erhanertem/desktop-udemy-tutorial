-- LESSON 2 SUBQUERIES AND CTEs
-- --> FROM(...) / FROM(...)...JOIN(...) SUBQUERIES
SELECT
  *
FROM
  patients
WHERE
  date_of_birth>='2000-01-01'
ORDER BY
  master_patient_id;

SELECT
  *
FROM
  (
    SELECT
      *
    FROM
      patients
    WHERE
      date_of_birth>='2000-01-01'
    ORDER BY
      master_patient_id
  ) p
WHERE
  p.name ILIKE 'm%';

-- NOTE: ILIKE USED FOR CASE INSENSITIVE MATCHING
SELECT
  *
FROM
  (
    SELECT
      *
    FROM
      surgical_encounters
    WHERE
      surgical_admission_date BETWEEN '2016-11-01' AND '2016-11-30'
  ) se
  INNER JOIN (
    SELECT
      master_patient_id
    FROM
      patients
    WHERE
      date_of_birth>='1990-01-01'
  ) p ON se.master_patient_id=p.master_patient_id;

-- -->COMMON TABLE EXPRESSIONS CTEs
-- ->BASIC CTE
-- CODE WITH NO CTEs
SELECT
  *
FROM
  (
    SELECT
      *
    FROM
      patients
    WHERE
      date_of_birth>='2000-01-01'
    ORDER BY
      master_patient_id
  ) p
WHERE
  p.name ILIKE 'm%';

-- REWORKED CTE VERSION OF THE ABOVE CODE
WITH
  young_patients AS (
    SELECT
      *
    FROM
      patients
    WHERE
      date_of_birth>='2000-01-01'
  )
SELECT
  *
FROM
  young_patients
WHERE
  name ILIKE 'm%';

-- ->COMPLEX CTE
-- ->MULTIPLE CTEs
WITH
  top_counties AS (
    -- SELECT COUNTIES WITH WITH PATIENT COUNTS OVER 1500 AND SELECT THE PATIENTS IN THOSE COUNTIES 
    SELECT
      county,
      COUNT(*) AS num_patients
    FROM
      patients
    GROUP BY
      county
    HAVING
      COUNT(*)>1500
  ),
  county_patients AS (
    -- AND FIND OUT THE NUMBER OF SURGERIES BASED ON THEIR COUNTY.  
    SELECT
      p.master_patient_id,
      p.county
    FROM
      patients p
      INNER JOIN top_counties t ON p.county=t.county
  )
SELECT
  p.county,
  COUNT(s.surgery_id) AS num_surgeries
FROM
  surgical_encounters s
  INNER JOIN county_patients p ON s.master_patient_id=p.master_patient_id
GROUP BY
  p.county;

-- --> CTEs COMPARISON SUBQUERIES
WITH
  total_cost AS (
    SELECT
      surgery_id,
      SUM(resource_cost) AS total_surgery_cost
    FROM
      surgical_costs
    GROUP BY
      surgery_id
  )
SELECT
  *
FROM
  total_cost
WHERE
  total_surgery_cost>(
    SELECT
      AVG(total_surgery_cost)
    FROM
      total_cost
  );

SELECT
  *
FROM
  "vitals"
WHERE
  bp_diastolic>(
    SELECT
      MIN(bp_diastolic)
    FROM
      "vitals"
  )
  AND bp_systolic<(
    SELECT
      MAX(bp_systolic)
    FROM
      "vitals"
  );

-- --> IN , NOT IN LISGT COMPARISON SUBQUERIES
SELECT
  *
FROM
  "patients"
WHERE
  master_patient_id IN (
    SELECT DISTINCT
      master_patient_id
    FROM
      "surgical_encounters"
  )
ORDER BY
  master_patient_id;

--SIMILARLY, JOIN VERSION OF THE ABOVE CODE
SELECT DISTINCT
  p.master_patient_id
FROM
  "patients" p
  INNER JOIN "surgical_encounters" s ON p.master_patient_id=s.master_patient_id
ORDER BY
  p.master_patient_id;

SELECT
  p.master_patient_id
FROM
  patients p
  INNER JOIN surgical_encounters s ON p.master_patient_id=s.master_patient_id
GROUP BY
  p.master_patient_id
ORDER BY
  p.master_patient_id;

--INVERSE OF THE STATEMENT
SELECT
  *
FROM
  "patients"
WHERE
  master_patient_id NOT IN (
    SELECT DISTINCT
      master_patient_id
    FROM
      "surgical_encounters"
  )
ORDER BY
  master_patient_id;

-- -->ANY /ALL STATEMENT
SELECT
  *
FROM
  "surgical_encounters"
WHERE
  total_profit>ALL (
    SELECT
      AVG(total_cost)
    FROM
      "surgical_encounters"
    GROUP BY
      diagnosis_description
  );

-- diagnosis in surgical encounters whose avg length of stay is less than or equal to the avg lenght of stay for all encounters by department
SELECT
  diagnosis_description,
  AVG(surgical_discharge_date-surgical_admission_date) AS length_of_stay
FROM
  surgical_encounters
GROUP BY
  diagnosis_description
HAVING
  AVG(surgical_discharge_date-surgical_admission_date)<=ALL (
    SELECT
      AVG(
        EXTRACT(
          DAY
          FROM
            patient_discharge_datetime-patient_admission_datetime
        )
      )
    FROM
      encounters
    GROUP BY
      department_id
  );

-- FIND THE UNITS WHO SEE ALL TYPES OF SURGICAL CASES(TYPES)
SELECT
  unit_name,
  string_agg(DISTINCT surgical_type, ', ') AS case_types
FROM
  "surgical_encounters"
GROUP BY
  unit_name
HAVING
  string_agg(DISTINCT surgical_type, ',') LIKE ALL (
    SELECT
      string_agg(DISTINCT surgical_type, ',')
    FROM
      "surgical_encounters"
  );

-- --> EXISTS CLAUSE SUBQUERY
SELECT
  e.*
FROM
  "encounters" e
WHERE
  EXISTS (
    SELECT
      1
    FROM
      "orders_procedures" o
    WHERE
      e.patient_encounter_id=o.patient_encounter_id
  );

-- get all patients who have not had any surgery
SELECT
  p.*
FROM
  patients p
WHERE
  NOT EXISTS (
    SELECT
      1
    FROM
      "surgical_encounters" s
    WHERE
      s.master_patient_id=p.master_patient_id
  );

-- -->RECURSIVE CTEs
WITH RECURSIVE
  fibonacci AS (
    SELECT
      -- base value
      1 as a,
      1 as b
    UNION ALL
    SELECT
      -- recursive operation
      b,
      a+b
    FROM
      fibonacci
  )
SELECT
  a,
  b
FROM
  fibonacci
LIMIT
  10;

WITH RECURSIVE
  orders AS (
    SELECT
      order_procedure_id,
      order_parent_order_id,
      0 AS level
    FROM
      orders_procedures
    WHERE
      order_parent_order_id IS NULL
    UNION ALL
    SELECT
      op.order_procedure_id,
      op.order_parent_order_id,
      o.level+1 AS level
    FROM
      orders_procedures op
      INNER JOIN orders o ON op.order_parent_order_id=o.order_procedure_id
  )
SELECT
  *
FROM
  orders
WHERE
  level!=0;

-- CODING CHALLENGE
-- find the average number of orders per encounter by provider/physician
SELECT
  ordering_provider_id,
  patient_encounter_id,
  COUNT(order_procedure_id) AS num_procedures
FROM
  orders_procedures
GROUP BY
  ordering_provider_id,
  patient_encounter_id;

WITH
  provider_encounters AS (
    SELECT
      ordering_provider_id,
      patient_encounter_id,
      COUNT(order_procedure_id) AS num_procedures
    FROM
      orders_procedures
    GROUP BY
      ordering_provider_id,
      patient_encounter_id
  ),
  provider_orders AS (
    SELECT
      ordering_provider_id,
      AVG(num_procedures) AS avg_num_procedures
    FROM
      provider_encounters
    GROUP BY
      ordering_provider_id
  )
SELECT
  p.full_name,
  o.avg_num_procedures
FROM
  physicians p
  LEFT OUTER JOIN provider_orders o ON p.id=o.ordering_provider_id
WHERE
  o.avg_num_procedures IS NOT NULL
ORDER BY
  o.avg_num_procedures DESC;

-- find encounters with any of the top 10 most common order codes
SELECT DISTINCT
  patient_encounter_id
FROM
  orders_procedures
WHERE
  order_cd IN (
    SELECT
      order_cd
    FROM
      "orders_procedures"
    GROUP BY
      order_cd
    ORDER BY
      COUNT(*) DESC
    LIMIT
      10
  );

-- find accounts with a total accounyt balance over $10000 and at least one ICU encounter
SELECT
  a.account_id,
  a.total_account_balance
FROM
  accounts a
WHERE
  total_account_balance>10000
  AND EXISTS (
    SELECT
      1
    FROM
      encounters e
    WHERE
      e.hospital_account_id=a.account_id
      AND patient_in_icu_flag='Yes'
  );

-- find encounters for patients born on or after 1995-01-01 whose length of stay is greater than or equal to the average surgical length of stay for patients 65 or older
WITH
  old_los AS (
    SELECT
      EXTRACT(
        YEAR
        FROM
          AGE (NOW(), p.date_of_birth)
      ) AS age,
      AVG(
        s.surgical_discharge_date-s.surgical_admission_date
      ) AS avg_los
    FROM
      patients p
      INNER JOIN surgical_encounters s ON p.master_patient_id=s.master_patient_id
    WHERE
      p.date_of_birth IS NOT NULL
      AND EXTRACT(
        YEAR
        FROM
          AGE (NOW(), p.date_of_birth)
      )>=65
    GROUP BY
      EXTRACT(
        YEAR
        FROM
          AGE (NOW(), p.date_of_birth)
      )
  )
SELECT
  e.*
FROM
  encounters e
  INNER JOIN patients p ON e.master_patient_id=p.master_patient_id
WHERE
  p.date_of_birth>='1995-01-01'
  AND EXTRACT(
    DAYS
    FROM
      (
        e.patient_discharge_datetime-e.patient_admission_datetime
      )
  )>=ALL (
    SELECT
      avg_los
    FROM
      old_los
  );

-- LESSON 3 WINDOW FUNCTIONS
-- ---> PERFORMING DYNAMIC CALCS ON DATA WITHIN GROUPS 
-- --> WINDOW FUNCTIONS with CTEs
WITH
  surgical_los AS (
    SELECT
      surgery_id,
      (surgical_discharge_date-surgical_admission_date) AS los,
      AVG(surgical_discharge_date-surgical_admission_date) OVER () AS avg_los
    FROM
      "surgical_encounters"
  )
SELECT
  *,
  ROUND(los-avg_los, 2)
FROM
  surgical_los;

-- --> RANK() OVER([PARTITION BY]... [ORDER BY]...)
SELECT
  account_id,
  primary_icd,
  total_account_balance,
  RANK() OVER (
    PARTITION BY
      primary_icd
    ORDER BY
      total_account_balance DESC
  )
FROM
  "accounts";

-- --> ROW_NUMBER() OVER(...)
SELECT
  s.surgery_id,
  p.full_name,
  s.total_cost,
  diagnosis_description,
  total_profit,
  RANK() OVER (
    PARTITION BY
      surgeon_id
    ORDER BY
      total_cost ASC
  ) AS cost_rank,
  ROW_NUMBER() OVER (
    PARTITION BY
      surgeon_id,
      diagnosis_description
    ORDER BY
      total_profit DESC
  ) AS profit_row_number
FROM
  "surgical_encounters" s
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id=p.id
ORDER BY
  s.surgeon_id,
  s.diagnosis_description;

-- --> LAG(...) OVER(...) / LEAD(...) OVER(...)
SELECT
  patient_encounter_id,
  master_patient_id,
  patient_admission_datetime,
  patient_discharge_datetime,
  LAG(patient_discharge_datetime) OVER w AS previous_discharge_datetime,
  LEAD(patient_admission_datetime) OVER w AS next_admission_date
FROM
  "encounters"
WINDOW
  w AS (
    PARTITION BY
      master_patient_id
    ORDER BY
      patient_admission_datetime
  );

-- --->REUSUABLE WINDOW FUNCTIONS
-- WINDOW FUNCTIONS ON ITS OWN
SELECT
  s.surgery_id,
  p.full_name,
  s.total_profit,
  s.total_cost,
  AVG(total_profit) OVER (
    PARTITION BY
      s.surgeon_id
  ) AS avg_total_profit,
  SUM(total_cost) OVER (
    PARTITION BY
      s.surgeon_id
  ) AS total_surgeon_cost
FROM
  "surgical_encounters" s
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id=p.id;

-- same code with reusable window function after from...
SELECT
  s.surgery_id,
  p.full_name,
  s.total_profit,
  s.total_cost,
  AVG(total_profit) OVER w AS avg_total_profit,
  SUM(total_cost) OVER w AS total_surgeon_cost
FROM
  "surgical_encounters" s
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id=p.id
WINDOW
  w AS (
    PARTITION BY
      s.surgeon_id
  );

-- CODING CHALLENGE
-- FIND SURGERIES THAT OCCURED WITHIN 30 DAYS OF A PREVIOUS SURGERY
WITH
  prior_surgery AS (
    SELECT
      surgery_id,
      master_patient_id,
      surgical_admission_date,
      surgical_discharge_date,
      LAG(surgical_discharge_date) OVER (
        PARTITION BY
          master_patient_id
        ORDER BY
          surgical_admission_date
      ) AS previous_discharge_date
    FROM
      surgical_encounters
  )
SELECT
  *,
  (surgical_admission_date-previous_discharge_date) AS days_between_surgeries
FROM
  prior_surgery
WHERE
  (surgical_admission_date-previous_discharge_date)<=30;

--FOR EACH DEPARTMENT, FIND THE 3 PHYSICIANS WITH THE MOST ADMISSIONS
WITH
  provider_department AS (
    SELECT
      admitting_provider_id,
      department_id,
      COUNT(*) AS num_encounters
    FROM
      encounters
    GROUP BY
      admitting_provider_id,
      department_id
  ),
  pd_ranked AS (
    SELECT
      *,
      ROW_NUMBER() OVER (
        PARTITION BY
          department_id
        ORDER BY
          num_encounters DESC
      ) AS encounter_rank
    FROM
      provider_department
  )
SELECT
  d.department_name,
  p.full_name AS physician_name,
  encounter_rank
FROM
  pd_ranked pd
  LEFT OUTER JOIN physicians p ON p.id=pd.admitting_provider_id
  LEFT OUTER JOIN departments d ON d.department_id=pd.department_id
WHERE
  encounter_rank<=3
ORDER BY
  d.department_name,
  encounter_rank DESC;

-- FOR EACH SURGERY, FIND ANY RESOURCES THAT ACCOUNTED FOR MORE THAN 50% OF TOTAL SURGERY COST
WITH
  total_cost AS (
    SELECT
      surgery_id,
      resource_name,
      resource_cost,
      SUM(resource_cost) OVER (
        PARTITION BY
          surgery_id
      ) AS total_surgery_cost
    FROM
      surgical_costs
  )
SELECT
  *,
  (resource_cost/total_surgery_cost)*100 AS pct_total_cost
FROM
  total_cost
WHERE
  (resource_cost/total_surgery_cost)*100>50;

-- LESSON 4 ADVANCED JOIN OPERATIONS
-- --->SELF JOIN
SELECT
  se1.surgery_id AS surgery_id1,
  (
    se1.surgical_discharge_date-se1.surgical_admission_date
  ) AS los1,
  se2.surgery_id AS surgery_id2,
  (
    se2.surgical_discharge_date-se2.surgical_admission_date
  ) AS los2
FROM
  "surgical_encounters" se1
  INNER JOIN "surgical_encounters" se2 ON (
    se1.surgical_discharge_date-se1.surgical_admission_date
  )=(
    se2.surgical_discharge_date-se2.surgical_admission_date
  )
LIMIT
  1000;

SELECT
  o1.order_procedure_id,
  o1.order_procedure_description,
  o1.order_parent_order_id,
  o2.order_procedure_description
FROM
  "orders_procedures" o1
  INNER JOIN "orders_procedures" o2 ON o1.order_parent_order_id=o2.order_procedure_id;

-- --->FULL JOIN
-- SORT OUT NULL CASES
SELECT
  a.account_id,
  e.patient_encounter_id
FROM
  "accounts" a
  FULL JOIN "encounters" e ON a.account_id=e.hospital_account_id
WHERE
  a.account_id IS NULL
  OR e.patient_encounter_id IS NULL;

SELECT
  d.department_id,
  d.department_name
FROM
  "departments" d
  FULL JOIN "hospitals" h ON d.hospital_id=h.hospital_id
WHERE
  h.hospital_id IS NULL;

-- --->CROSS JOIN
SELECT
  h.hospital_name,
  d.department_name
FROM
  hospitals h
  CROSS JOIN departments d;

SELECT
  h.hospital_name,
  d.department_name
FROM
  hospitals h,
  departments d;

-- ->CROSS JOIN AS INNER JOIN
SELECT
  h.hospital_name,
  d.department_name
FROM
  hospitals h
  CROSS JOIN departments d
WHERE
  d.hospital_id=h.hospital_id;

SELECT
  h.hospital_name,
  d.department_name
FROM
  hospitals h,
  departments d
WHERE
  d.hospital_id=h.hospital_id;

-- --->NATURAL JOIN / INNER JOIN...USING()
SELECT
  h.hospital_name,
  d.department_name
FROM
  departments d
  INNER JOIN hospitals h USING (hospital_id);

SELECT
  h.hospital_name,
  d.department_name
FROM
  departments d
  NATURAL JOIN hospitals h;

-- CODING CHALLENGE
-- find all combinations of physicians and practices in the DATABASE
SELECT
  pr.name,
  py.full_name
FROM
  "practices" pr
  CROSS JOIN "physicians" py
LIMIT
  50000;

SELECT
  pr.name,
  py.full_name
FROM
  "practices" pr,
  "physicians" py
LIMIT
  100000;

-- find the avg blood pressure(systolic and diastolic) by admitting provider/physician
SELECT
  p.full_name,
  AVG(v.bp_diastolic) AS avg_diastolic_bp,
  AVG(v.bp_systolic) AS avg_systolic_bp,
  (AVG(v.bp_diastolic)+AVG(v.bp_systolic))*0.5 AS median_bp
FROM
  vitals v
  INNER JOIN encounters e USING (patient_encounter_id)
  LEFT OUTER JOIN physicians p ON e.admitting_provider_id=p.id
GROUP BY
  p.full_name;

-- find the number of surgeries in the surgical costs table without data in the surgical encounters table
SELECT
  COUNT(DISTINCT sc.surgery_id)
FROM
  surgical_costs sc
  FULL JOIN surgical_encounters se USING (surgery_id)
WHERE
  se.surgery_id IS NULL;

-- LESSON 5 SET OPERATIONS
-- -->QUERY JOINING UNION /UNION ALL OPERATOR
-- -> UNION REMOVES DUPLICATES
SELECT
  surgery_id
FROM
  surgical_encounters
UNION
SELECT
  surgery_id
FROM
  surgical_costs
ORDER BY
  surgery_id;

-- -> UNION ALL ALLOWS DUPLICATES
SELECT
  surgery_id
FROM
  surgical_encounters
UNION ALL
SELECT
  surgery_id
FROM
  surgical_costs
ORDER BY
  surgery_id;

-- -->QUERY JOINING UNION /UNION ALL OPERATOR
SELECT
  surgery_id
FROM
  surgical_encounters
INTERSECT
SELECT
  surgery_id
FROM
  surgical_costs
ORDER BY
  surgery_id;

-- Display names of patients that had both encounters and surgical encounters
WITH
  all_patients AS (
    SELECT
      master_patient_id
    FROM
      encounters
    INTERSECT
    SELECT
      master_patient_id
    FROM
      surgical_encounters
  )
SELECT
  ap.master_patient_id,
  p.name
FROM
  all_patients ap
  INNER JOIN patients p ON ap.master_patient_id=p.master_patient_id;

-- -->QUERY JOINING EXCEPT /EXCEPT ALL OPERATOR
SELECT
  surgery_id
FROM
  surgical_costs
EXCEPT
SELECT
  surgery_id
FROM
  surgical_encounters
ORDER BY
  surgery_id;

WITH
  missing_departments AS (
    SELECT
      department_id
    FROM
      departments
    EXCEPT
    SELECT
      department_id
    FROM
      encounters
  )
SELECT
  m.department_id,
  d.department_name
FROM
  missing_departments m
  INNER JOIN departments d ON m.department_id=d.department_id;

-- CODING CHALLENGE
-- GENERATE A LIST OF ALL PHYSICIANS AND PHYSICIAN TYPES IN THE ENCOUNTERS TABLE INCLUDING THEIR NAMES
WITH
  combined_physicians AS (
    SELECT
      admitting_provider_id AS provider_id,
      'Admitting' AS provider_type
    FROM
      encounters
    UNION
    SELECT
      discharging_provider_id,
      -- NO NEED TO ALIAS THIS AS FIRST UNION IS ALIASED
      'Discharging' -- NO NEED TO ALIAS THIS
    FROM
      encounters
    UNION
    SELECT
      attending_provider_id,
      -- NO NEED TO ALIAS THIS
      'Attending' -- NO NEED TO ALIAS THIS
    FROM
      encounters
  )
SELECT
  cp.provider_id,
  p.full_name,
  cp.provider_type
FROM
  combined_physicians cp
  INNER JOIN physicians p ON p.id=cp.provider_id
ORDER BY
  p.full_name,
  cp.provider_type;

-- FIND ALL PRIMARY CARE PHYSICIANS WHO ALSO ADMITTING PROVIDERS
WITH
  admitting_pcps AS (
    SELECT
      pcp_id
    FROM
      patients
    INTERSECT
    SELECT
      admitting_provider_id
    FROM
      encounters
  )
SELECT
  a.pcp_id,
  p.full_name
FROM
  admitting_pcps a
  INNER JOIN physicians p ON p.id=a.pcp_id;

-- DETERMINE WHETHER THERE ARE ANY SURGEONS IN THE SURGICAL_ENCOUNTERS TABLE WHO ARE NOT IN THE PHYSICIANS TABLE
SELECT
  surgeon_id
FROM
  surgical_encounters
EXCEPT
SELECT
  id
FROM
  physicians;

-- LESSON 6 GROUPING SETS
-- -->GROUP BY GROUPING SETS 
SELECT
  state,
  county,
  COUNT(*) AS num_patients
FROM
  "patients"
GROUP BY
  GROUPING SETS ((state), (state, county), ())
ORDER BY
  state DESC,
  county;

SELECT
  p.full_name,
  se.admission_type,
  se.diagnosis_description,
  COUNT(*) AS num_surgeries,
  AVG(total_profit) AS avg_total_profit
FROM
  "surgical_encounters" se
  LEFT JOIN "physicians" p ON se.surgeon_id=p.id
GROUP BY
  GROUPING SETS (
    (p.full_name),
    (se.admission_type),
    (se.diagnosis_description),
    (p.full_name, se.admission_type),
    (p.full_name, se.diagnosis_description)
  );

-- CREATE TABLE inventory (
--   warehouse VARCHAR(255),
--   product VARCHAR(255) NOT NULL,
--   model VARCHAR(50) NOT NULL,
--   quantity INT,
--   PRIMARY KEY (warehouse, product, model)
-- );
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Jose', 'iPhone', '6s', 100);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Fransisco', 'iPhone', '6s', 50);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Jose', 'iPhone', '7', 50);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Fransisco', 'iPhone', '7', 10);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Jose', 'iPhone', 'X', 150);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Fransisco', 'iPhone', 'X', 200);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Jose', 'Samsung', 'Galaxy S', 200);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Fransisco', 'Samsung', 'Galaxy S', 200);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Fransisco', 'Samsung', 'Note 8', 100);
-- INSERT INTO
--   inventory(warehouse, product, model, quantity)
-- VALUES
--   ('San Jose', 'Samsung', 'Note 8', 150);
-- SELECT
--   *
-- FROM
--   inventory;
-- SELECT
--   warehouse,
--   product,
--   SUM (quantity) qty
-- FROM
--   inventory
-- GROUP BY
--   warehouse,
--   product;
-- SELECT
--   warehouse,
--   SUM (quantity) qty
-- FROM
--   inventory
-- GROUP BY
--   warehouse;
-- SELECT
--   product,
--   SUM (quantity) qty
-- FROM
--   inventory
-- GROUP BY
--   product;
-- SELECT
--   SUM(quantity) qty
-- FROM
--   inventory;
-- manual version of grouping sets
SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  warehouse,
  product
UNION ALL
SELECT
  warehouse,
  null,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  warehouse
UNION ALL
SELECT
  null,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  product
UNION ALL
SELECT
  null,
  null,
  SUM(quantity) qty
FROM
  inventory;

SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  GROUPING SETS ((warehouse, product), (warehouse), (product), ());

-- postgre sql version
SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  ROLLUP (warehouse, product);

-- mysql version
SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  warehouse,
  product
WITH
  ROLLUP;

-- -->GROUP BY CUBE
-- VIA GROUPING SETS
SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  GROUPING SETS ((warehouse, product), (warehouse), (product), ());

-- VIA CUBE
SELECT
  warehouse,
  product,
  SUM(quantity) qty
FROM
  inventory
GROUP BY
  CUBE (warehouse, product);

SELECT
  state,
  county,
  COUNT(*) AS num_patients
FROM
  "patients"
GROUP BY
  CUBE (state, county)
ORDER BY
  state DESC,
  county;

SELECT
  p.full_name,
  se.admission_type,
  se.diagnosis_description,
  COUNT(*) AS num_surgeries,
  AVG(total_profit)
FROM
  "surgical_encounters" se
  LEFT JOIN physicians p ON se.surgeon_id=p.id
GROUP BY
  cube (
    p.full_name,
    se.admission_type,
    se.diagnosis_description
  );

-- -->GROUP BY ROLLUP
SELECT
  h.state,
  h.hospital_name,
  d.department_name,
  COUNT(e.patient_encounter_id) AS num_encounters
FROM
  encounters e
  LEFT JOIN departments d ON e.department_id=d.department_id
  LEFT JOIN hospitals h ON d.hospital_id=h.hospital_id
GROUP BY
  ROLLUP (h.state, h.hospital_name, d.department_name)
ORDER BY
  h.state,
  h.hospital_name,
  d.department_name;

SELECT
  state,
  county,
  city,
  COUNT(master_patient_id) AS num_patients,
  AVG(
    EXTRACT(
      YEAR
      FROM
        AGE (NOW(), date_of_birth)
    )
  ) AS avg_age
FROM
  patients
GROUP BY
  ROLLUP (state, county, city)
HAVING
  AVG(
    EXTRACT(
      YEAR
      FROM
        AGE (NOW(), date_of_birth)
    )
  ) IS NOT NULL
ORDER BY
  state,
  county,
  city;

-- CODING CHALLENGE
--FIND THE AVERAGE PULSE AND AVERAGE BODY SURFACE AREA BY WEIGHT, HEIGHT, WEIGHT/HEIGHT (@VITALS TABLE)
SELECT
  weight,
  height,
  ROUND(AVG(pulse), 2) AS avg_pulse,
  ROUND(AVG(body_surface_area), 2) AS avg_bsa
FROM
  vitals
GROUP BY
  CUBE (weight, height)
ORDER BY
  height,
  weight;

--GENERATE A REPORT ON SURGICAL ADMISSIONS BY YEAR,MONTH, AND DAY USING ROLLUP
SELECT
  date_part('year', surgical_admission_date) AS year,
  -- YEAR(surgical_admission_date) AS year, -- IN MYSQL
  date_part('month', surgical_admission_date) AS month,
  -- MONTH(surgical_admission_date) AS month, -- IN MYSQL
  date_part('day', surgical_admission_date) AS day,
  -- DATE(surgical_admission_date) AS day, -- IN MYSQL
  COUNT(surgery_id) AS num_surgeries
FROM
  "surgical_encounters"
GROUP BY
  ROLLUP (1, 2, 3)
ORDER BY
  1,
  2,
  3;

--GENERATE A REPORT ON THE NUMBER OF PATIENTS BY PRIMARY LANGUAGE,CITIZENSHIP,PRIMARY LANG AND CITIZENSHIP, AND PRIMARY LANG AND ETHNICITY
-- NOTE: WE ARE ASKING SPECIFIC RELATIONS, NOT PURSUING A HIEARCHICAL FLOW SO GROUPING SETS IS BEST FOR THESE KIND OF CUSTOM GROUP SETS
SELECT
  primary_language,
  is_citizen,
  ethnicity,
  COUNT(master_patient_id) AS num_patients
FROM
  "patients"
GROUP BY
  GROUPING SETS (
    (primary_language),
    (is_citizen),
    (primary_language, is_citizen),
    (primary_language, ethnicity)
  );

-- LESSON 7 SCHEMA STRUCTURES AND TABLE RELATIONSHIPS
-- -->INFORMATION SCHEMA
SELECT
  *
FROM
  information_schema.tables
WHERE
  table_schema='general_hospital'
ORDER BY
  table_name;

SELECT
  *
FROM
  information_schema.columns
WHERE
  table_schema='general_hospital'
ORDER BY
  table_name,
  ordinal_position;

SELECT
  *
FROM
  information_schema.columns
WHERE
  table_schema='general_hospital'
  AND column_name ILIKE '%id'
ORDER BY
  table_name;

-- -->COMMENTS ON DB OBJECTS
-- ->SCHEMA
-- COMMENTING
COMMENT ON SCHEMA general_hospital IS 'Hospital schema for Udemy Course';

-- READING
SELECT
  obj_description('general_hospital'::regnamespace);

-- ->TABLE
-- COMMENTING 
COMMENT ON TABLE general_hospital.vitals IS 'Patient vital sign data taken at the beginning of the encounter';

-- READING
SELECT
  obj_description('general_hospital.vitals'::regclass);

-- ->COLUMN
-- COMMENTING
COMMENT ON COLUMN general_hospital.accounts.primary_icd IS 'Primary International Classification of Diseases (ICD)';

-- READING
SELECT
  *
FROM
  information_schema.columns
WHERE
  table_schema='general_hospital'
  AND table_name='accounts';

-- READING COLUMN primary_ic @ table accounts
SELECT
  col_description('general_hospital.accounts'::regclass, 1);

-- -->ADDING DROPPING CONSTRAINTS
ALTER TABLE general_hospital.surgical_encounters
ADD CONSTRAINT check_positive_cost CHECK (total_cost>0);

SELECT
  *
FROM
  information_schema.table_constraints
WHERE
  table_schema='general_hospital'
  AND table_name='surgical_encounters';

ALTER TABLE general_hospital.surgical_encounters
DROP CONSTRAINT check_positive_cost;

-- -->ADDING DROPPING FOREIGN KEYS
-- ADD FOREIGN KEY
ALTER TABLE general_hospital.encounters
ADD CONSTRAINT encounters_attending_provider_id_fk FOREIGN KEY (attending_provider_id) REFERENCES general_hospital.physicians (id);

SELECT
  *
FROM
  information_schema.table_constraints
WHERE
  table_schema='general_hospital'
  AND table_name='encounters'
  AND constraint_type='FOREIGN KEY';

-- DROP FOREIGN KEY
ALTER TABLE general_hospital.encounters
DROP CONSTRAINT encounters_attending_provider_id_fk;

-- CODING CHALLENGE
--ADD A COMMENT FOR ADMITTING ICD AND VERIFY THAT IT WAS ADDED
COMMENT ON COLUMN general_hospital.accounts.admit_icd IS 'Admitting diagnosis code from the Internation Classification of Dsieases (ICD)';

SELECT
  col_description('general_hospital.accounts'::regclass, 2);

--ADD NOT NULL CONSTRAINT ON SURGICAL_ADMISSION_DATE FIELD
ALTER TABLE general_hospital.surgical_encounters
ALTER COLUMN surgical_admission_date
SET NOT NULL;

ALTER TABLE general_hospital.surgical_encounters
ALTER COLUMN surgical_admission_date
DROP NOT NULL;

--ADD CONSTRAINT TO ENSURE THAT PATIENT_DISCHARGE_DATETIME IS AFTER PATIENT_ADMISSION_DATETIME OR EMPTY
ALTER TABLE general_hospital.encounters
ADD CONSTRAINT check_discharge_after_admission CHECK (
  (
    patient_admission_datetime<patient_discharge_datetime
  )
  OR (patient_discharge_datetime IS NULL)
);

ALTER TABLE general_hospital.encounters
DROP CONSTRAINT IF EXISTS check_discharge_after_admission;

-- LESSON 8 TRANSACTIONS
-- UPDATE DATA
SELECT
  *
FROM
  vitals
WHERE
  patient_encounter_id=1854663;

UPDATE vitals
SET
  bp_diastolic=100
WHERE
  patient_encounter_id=1854663;

SELECT
  *
FROM
  accounts
WHERE
  account_id=11417340;

UPDATE accounts
SET
  total_account_balance=0
WHERE
  account_id=11417340;

-- -->TRANSACTIONS BEGIN/END
-- -> COMMIT --------------TRANSACTION
BEGIN TRANSACTION;

UPDATE physicians
SET
  first_name='Bill',
  full_name=CONCAT(last_name, ', Bill')
WHERE
  id=1;

END TRANSACTION;

-- OR ALTERNATIVELY USE COMMIT TRANSACTION;
SELECT
  *
FROM
  physicians
WHERE
  id=1;

-- -> ROLLBACK --------------TRANSACTION
BEGIN TRANSACTION;

UPDATE physicians
SET
  first_name='Gage',
  full_name=CONCAT(last_name, ', Gage')
WHERE
  id=1;

ROLLBACK TRANSACTION;

SELECT
  *
FROM
  physicians
WHERE
  id=1;

-- -->SAVEPOINT TRANSACTION
SELECT
  *
FROM
  vitals;

BEGIN;

UPDATE vitals
SET
  bp_diastolic=120
WHERE
  patient_encounter_id=2570046;

SAVEPOINT vitals_updated;

UPDATE accounts
SET
  total_account_balance=1000
WHERE
  account_id=11417340;

ROLLBACK TO vitals_updated;

COMMIT;

SELECT
  *
FROM
  vitals
WHERE
  patient_encounter_id=2570046;

SELECT
  *
FROM
  accounts
WHERE
  account_id=11417340;

-- CODING CHALLENGE
-- --------------
BEGIN TRANSACTION;

LOCK TABLE physicians;

UPDATE physicians
SET
  first_name='Gage',
  full_name=CONCAT(last_name, ', Gage')
WHERE
  id=1;

COMMIT;

SELECT
  *
FROM
  physicians
WHERE
  id=1;

-- --------------
BEGIN TRANSACTION;

DROP TABLE practices;

ROLLBACK TRANSACTION;

SELECT
  *
FROM
  practices;

-- --------------
BEGIN TRANSACTION;

UPDATE accounts
SET
  total_account_balance=15077.90
WHERE
  account_id=11417340;

SAVEPOINT account_updated;

DROP TABLE vitals;

ROLLBACK TO account_updated;

COMMIT TRANSACTION;

SELECT
  *
FROM
  accounts
WHERE
  account_id=11417340;

-- LESSON 9 TABLE INHERITANCE AND PARTITIONING
-- -->RANGE/HORIZONTAL PARTITIONING
-- ->CREATE PARTITION TABLE
CREATE TABLE
  surgical_encounters_partitioned (
    surgery_id INT NOT NULL,
    master_patient_id INT NOT NULL,
    surgical_admission_date DATE NOT NULL,
    surgical_discharge_date DATE
  )
PARTITION BY
  RANGE (surgical_admission_date);

-- ->CREATE PARTITIONS FOR THE TABLE
CREATE TABLE
  surgical_encounters_y2016 PARTITION OF surgical_encounters_partitioned FOR
VALUES
FROM
  ('2016-01-01') TO ('2017-01-01');

CREATE TABLE
  surgical_encounters_y2017 PARTITION OF surgical_encounters_partitioned FOR
VALUES
FROM
  ('2017-01-01') TO ('2018-01-01');

CREATE TABLE
  surgical_encounters_default PARTITION OF surgical_encounters_partitioned DEFAULT;

-- ->COPY DATA OVER TO PARTIONED TABLE
INSERT INTO
  surgical_encounters_partitioned
SELECT
  surgery_id,
  master_patient_id,
  surgical_admission_date,
  surgical_discharge_date
FROM
  surgical_encounters;

-- ->CREATE INDEX FOR PARITION COLUMN
CREATE INDEX ON surgical_encounters_partitioned (surgical_admission_date);

-- ->TESTING
SELECT
  EXTRACT(
    YEAR
    FROM
      surgical_admission_date
  ),
  COUNT(*)
FROM
  "surgical_encounters"
GROUP BY
  1;

SELECT
  COUNT(*),
  MIN(surgical_admission_date),
  MAX(surgical_admission_date)
FROM
  "surgical_encounters_y2016";

SELECT
  *
FROM
  "surgical_encounters"
LIMIT
  10;

-- ANOTHER EXAMPLE
CREATE TABLE
  Sales (
    cust_id INT NOT NULL,
    name VARCHAR(40),
    store_id VARCHAR(20) NOT NULL,
    bill_no INT NOT NULL,
    bill_date DATE PRIMARY KEY NOT NULL,
    amount DECIMAL(8, 2) NOT NULL
  );

INSERT INTO
  Sales
VALUES
  (1, 'Mike', 'S001', 101, '2015-01-02', 125.56),
  (2, 'Robert', 'S003', 103, '2015-01-25', 476.50),
  (3, 'Peter', 'S012', 122, '2016-02-15', 335.00),
  (4, 'Joseph', 'S345', 121, '2016-03-26', 787.00),
  (5, 'Harry', 'S234', 132, '2017-04-19', 678.00),
  (6, 'Stephen', 'S743', 111, '2017-05-31', 864.00),
  (7, 'Jacson', 'S234', 115, '2018-06-11', 762.00),
  (8, 'Smith', 'S012', 125, '2019-07-24', 300.00),
  (9, 'Adam', 'S456', 119, '2019-08-02', 492.20);

SELECT
  *
FROM
  Sales;

-- ->CREATE PARTITION TABLE
CREATE TABLE
  Sales_partitioned (
    cust_id INT NOT NULL,
    name VARCHAR(40),
    store_id VARCHAR(20) NOT NULL,
    bill_no INT NOT NULL,
    bill_date DATE NOT NULL,
    amount DECIMAL(8, 2) NOT NULL
  )
PARTITION BY
  RANGE (bill_date);

-- ->CREATE PARTITIONS FOR THE TABLE
CREATE TABLE
  Sales_default PARTITION OF Sales_partitioned DEFAULT;

CREATE TABLE
  Sales_y2017 PARTITION OF Sales_partitioned FOR
VALUES
FROM
  ('2017-01-01') TO ('2018-01-01');

CREATE TABLE
  Sales_y2018 PARTITION OF Sales_partitioned FOR
VALUES
FROM
  ('2018-01-01') TO ('2019-01-01');

-- ->COPY DATA OVER TO PARTIONED TABLE
INSERT INTO
  Sales_partitioned
SELECT
  cust_id,
  name,
  store_id,
  bill_no,
  bill_date,
  amount
FROM
  Sales;

-- ->CREATE INDEX FOR PARITION COLUMN
CREATE INDEX ON Sales_partitioned (bill_date);

INSERT INTO
  Sales_partitioned
VALUES
  (11, 'MErhan', 'S992', 991, '2022-01-12', 123);

INSERT INTO
  Sales
VALUES
  (12, 'ZErhan', 'S892', 891, '2021-01-22', 193);

-- -->LIST/HORIZONTAL PARTITIONING
-- ->CREATE PARTITION TABLE
CREATE TABLE
  departments_partitioned (
    hospital_id INT NOT NULL,
    department_id INT NOT NULL,
    department_name TEXT,
    specialty_description TEXT
  )
PARTITION BY
  LIST (hospital_id);

SELECT DISTINCT
  hospital_id
FROM
  departments;

-- ->CREATE PARTITIONS FOR THE TABLE
CREATE TABLE
  departments_h111000 PARTITION OF departments_partitioned FOR
VALUES
  IN (111000);

CREATE TABLE
  departments_h112000 PARTITION OF departments_partitioned FOR
VALUES
  IN (112000);

CREATE TABLE
  departments_default PARTITION OF departments_partitioned DEFAULT;

-- ->COPY DATA OVER TO PARTIONED TABLE
INSERT INTO
  departments_partitioned
SELECT
  hospital_id,
  department_id,
  department_name,
  specialty_description
FROM
  departments;

-- ->CREATE INDEX FOR PARITION COLUMN
CREATE INDEX ON departments_partitioned (hospital_id);

-- ->TESTING
SELECT
  hospital_id,
  COUNT(*)
FROM
  departments_h112000
GROUP BY
  1;

SELECT
  hospital_id,
  COUNT(*)
FROM
  departments_default
GROUP BY
  1;

-- -->HASH/HORIZONTAL PARTITIONING
-- ->CREATE PARTITION TABLE
CREATE TABLE
  orders_procedures_partitioned (
    order_procedure_id INT NOT NULL,
    patient_encounter_id INT NOT NULL,
    ordering_provider_id INT REFERENCES physicians (id),
    order_cd text,
    order_procedure_description text
  )
PARTITION BY
  HASH (order_procedure_id, patient_encounter_id);

-- ->CREATE PARTITIONS FOR THE TABLE
CREATE TABLE
  orders_procedures_hash0 PARTITION OF orders_procedures_partitioned FOR
VALUES
WITH
  (MODULUS 3, REMAINDER 0);

CREATE TABLE
  orders_procedures_hash1 PARTITION OF orders_procedures_partitioned FOR
VALUES
WITH
  (MODULUS 3, REMAINDER 1);

CREATE TABLE
  orders_procedures_hash2 PARTITION OF orders_procedures_partitioned FOR
VALUES
WITH
  (MODULUS 3, REMAINDER 2);

-- ->COPY DATA OVER TO PARTIONED TABLE
INSERT INTO
  "orders_procedures_partitioned"
SELECT
  order_procedure_id,
  patient_encounter_id,
  ordering_provider_id,
  order_cd,
  order_procedure_description
FROM
  "orders_procedures";

-- ->TESTING
SELECT
  'hash0',
  COUNT(*)
FROM
  orders_procedures_hash0
UNION
SELECT
  'hash1',
  COUNT(*)
FROM
  orders_procedures_hash1
UNION
SELECT
  'hash2',
  COUNT(*)
FROM
  orders_procedures_hash2;

-- -->TABLE INHERITANCE
-- ->CREATE A PARENT BASE TABLE 
CREATE TABLE
  visit (
    id SERIAL NOT NULL PRIMARY KEY,
    start_datetime TIMESTAMP,
    end_datetime TIMESTAMP
  );

-- ->CREATE A CHILD TABLE WITH PARENT RELATIONSHIP
CREATE TABLE
  emergency_visit (
    emergency_department_id INT NOT NULL,
    triage_level INT,
    triage_datetime TIMESTAMP
  ) INHERITS (visit);

-- ->TESTING
-- REGISTER DATA TO CHILD TABLE
INSERT INTO
  emergency_visit
VALUES
  (default, '2022-01-01 12:00:00', null, 12, 3, null);

-- IMPORTANT! Dublicate primary key and breaking data consistency across parent and child tables.
INSERT INTO
  "emergency_visit"
VALUES
  (
    2,
    '2022-03-01 10:45:00',
    '2022-03-03 12:00:00',
    1,
    1,
    null
  );

-- REGISTER DATA TO PARENT TABLE
INSERT INTO
  visit
VALUES
  (
    default,
    '2022-03-01 10:45:00',
    '2022-03-03 12:00:00'
  );

-- CODING CHALLENGE
-- CREATE AND POPULATE encounters table partitioned by hospital_id
CREATE TABLE
  encounters_partitioned (
    hospital_id INT NOT NULL,
    patient_encounter_id INT NOT NULL,
    master_patient_id INT NOT NULL,
    admitting_provider_id INT REFERENCES physicians (id),
    department_id INT REFERENCES departments (department_id),
    patient_admission_datetime TIMESTAMP,
    patient_discharge_datetime TIMESTAMP,
    CONSTRAINT encounters_partitioned_pk PRIMARY KEY (hospital_id, patient_encounter_id)
  )
PARTITION BY
  LIST (hospital_id);

SELECT DISTINCT
  d.hospital_id
FROM
  encounters e
  LEFT OUTER JOIN departments d ON e.department_id=d.department_id
ORDER BY
  1;

CREATE TABLE
  encounters_h111000 PARTITION OF encounters_partitioned FOR
VALUES
  IN (111000);

CREATE TABLE
  encounters_h112000 PARTITION OF encounters_partitioned FOR
VALUES
  IN (112000);

CREATE TABLE
  encounters_h114000 PARTITION OF encounters_partitioned FOR
VALUES
  IN (114000);

CREATE TABLE
  encounters_h115000 PARTITION OF encounters_partitioned FOR
VALUES
  IN (115000);

CREATE TABLE
  encounters_h9900006 PARTITION OF encounters_partitioned FOR
VALUES
  IN (9900006);

CREATE TABLE
  encounters_default PARTITION OF encounters_partitioned DEFAULT;

INSERT INTO
  encounters_partitioned
SELECT
  d.hospital_id,
  e.patient_encounter_id,
  e.master_patient_id,
  e.admitting_provider_id,
  e.department_id,
  e.patient_admission_datetime,
  e.patient_discharge_datetime
FROM
  encounters e
  LEFT OUTER JOIN departments d ON e.department_id=d.department_id;

CREATE INDEX ON encounters_partitioned (patient_encounter_id);

-- CREATE A NEW vitals tablepartitioned by a datetime field
CREATE TABLE
  vitals_partitioned (
    patient_encounter_id INT NOT NULL REFERENCES encounters (patient_encounter_id),
    patient_admission_datetime TIMESTAMP NOT NULL,
    bp_diastolic INT,
    bp_systolic INT,
    bmi NUMERIC,
    temperature NUMERIC,
    weight INT
  )
PARTITION BY
  RANGE (patient_admission_datetime);

SELECT DISTINCT
  EXTRACT(
    YEAR
    FROM
      patient_admission_datetime
  )
FROM
  encounters;

CREATE TABLE
  vitals_y2015 PARTITION OF vitals_partitioned FOR
VALUES
FROM
  ('2015-01-01') TO ('2016-01-01');

CREATE TABLE
  vitals_y2016 PARTITION OF vitals_partitioned FOR
VALUES
FROM
  ('2016-01-01') TO ('2017-01-01');

CREATE TABLE
  vitals_y2017 PARTITION OF vitals_partitioned FOR
VALUES
FROM
  ('2017-01-01') TO ('2018-01-01');

CREATE TABLE
  vitals_default PARTITION OF vitals_partitioned DEFAULT;

INSERT INTO
  vitals_partitioned
SELECT
  e.patient_encounter_id,
  e.patient_admission_datetime,
  v.bp_diastolic,
  v.bp_systolic,
  v.bmi,
  v.temperature,
  v.weight
FROM
  vitals v
  LEFT OUTER JOIN encounters e ON v.patient_encounter_id=e.patient_encounter_id;

SELECT
  *
FROM
  vitals_y2016;

SELECT DISTINCT
  EXTRACT(
    YEAR
    FROM
      patient_admission_datetime
  )
FROM
  vitals_y2016;

-- LESSON 10 VIEWS
-- -->SIMPLE VIEWS
-- ->CREATING SIMPLE VIEWS
CREATE VIEW
  view_monthly_surgery_stats_by_department AS
SELECT
  to_char(surgical_admission_date, 'YYYY-MM'),
  unit_name,
  COUNT(surgery_id) AS num_surgeries,
  SUM(total_cost) AS total_cost,
  SUM(total_profit) AS total_profit
FROM
  surgical_encounters
GROUP BY
  to_char(surgical_admission_date, 'YYYY-MM'),
  unit_name
ORDER BY
  unit_name,
  to_char(surgical_admission_date, 'YYYY-MM');

SELECT
  *
FROM
  information_schema.views
WHERE
  table_schema='general_hospital';

-- ->REPLACING SIMPLE REVIEWS
CREATE OR REPLACE VIEW
  v_monthly_surgery_stats AS
SELECT
  to_char(surgical_admission_date, 'YYYY-MM') AS year_month,
  COUNT(surgery_id) AS num_surgeries,
  SUM(total_cost) AS total_cost,
  SUM(total_profit) AS total_profit
FROM
  surgical_encounters
GROUP BY
  1
ORDER BY
  1;

-- ->RENAMING SIMPLE REVIEWS
ALTER VIEW v_monthly_surgery_stats
RENAME TO view_monthly_surgery_stats;

-- ->DELETING SIMPLE REVIEWS
DROP VIEW IF EXISTS view_monthly_surgery_stats_by_department;

-- -->MATERIALIZED VIEWS
-- ->CREATING A MATERIALIZED VIEW
CREATE MATERIALIZED VIEW
  v_monthly_surgery_stats AS
SELECT
  to_char(surgical_admission_date, 'YYYY-MM') AS year_month,
  unit_name,
  COUNT(surgery_id) AS num_surgeries,
  SUM(total_cost) AS total_cost,
  SUM(total_profit) AS total_profit
FROM
  surgical_encounters
GROUP BY
  1,
  2
ORDER BY
  2,
  1
WITH
  NO DATA;

-- ->UPDATE A MATERIALIZED VIEW
REFRESH MATERIALIZED VIEW v_monthly_surgery_stats;

-- ->RENAME A MATERIALIZED VIEW
ALTER MATERIALIZED VIEW v_monthly_surgery_stats
RENAME TO mview_monthly_surgery_stats;

SELECT
  *
FROM
  "v_monthly_surgery_stats";

ALTER MATERIALIZED VIEW mview_monthly_surgery_stats
RENAME COLUMN year_month TO year_month_ext;

-- -->RECURSIVE VIEWS
-- FIRST WAY OF WRITING RECURSIVE VIEW
CREATE VIEW
  v_fibonacci AS
WITH RECURSIVE
  fibonacci AS (
    SELECT
      1 AS a,
      1 AS b
    UNION ALL
    SELECT
      b,
      a+b
    WHERE
      b<200
  )
SELECT
  *
FROM
  fibonacci;

-- SECOND WAY OF WRITING RECURSIVE VIEW
CREATE RECURSIVE VIEW
  v_fibonacci (a, b) AS
SELECT
  1 AS a,
  1 AS b
UNION ALL
SELECT
  b,
  a+b
FROM
  v_fibonacci
WHERE
  b<200;

-- TESTING RECURSIVE VIEW
SELECT
  *
FROM
  v_fibonacci;

-- ----------------------
SELECT
  *
FROM
  "orders_procedures"
LIMIT
  10;

CREATE RECURSIVE VIEW
  v_orders (order_procedure_id, order_parent_order_id, level) AS
SELECT
  order_procedure_id,
  order_parent_order_id,
  0 AS level
FROM
  orders_procedures
WHERE
  order_parent_order_id IS NULL
UNION ALL
SELECT
  op.order_procedure_id,
  op.order_parent_order_id,
  o.level+1 AS level
FROM
  orders_procedures op
  INNER JOIN v_orders o ON op.order_parent_order_id=o.order_procedure_id;

SELECT
  *
FROM
  v_orders;

-- CODING CHALLENGE
-- -------------
CREATE VIEW
  v_patients_primary_care AS
SELECT
  p.master_patient_id,
  p.name AS patient_name,
  p.gender,
  p.primary_language,
  p.date_of_birth,
  p.pcp_id,
  ph.full_name AS pcp_name
FROM
  patients p
  INNER JOIN physicians ph ON p.pcp_id=ph.id;

SELECT
  *
FROM
  "v_patients_primary_care"
WHERE
  primary_language IS NOT NULL;

-- -------------
CREATE MATERIALIZED VIEW
  mv_hospital_encounters AS
SELECT
  h.hospital_id,
  h.hospital_name,
  to_char(patient_admission_datetime, 'YYYY-MM') AS year_month,
  COUNT(patient_encounter_id) AS num_encounters,
  COUNT(NULLIF(patient_in_icu_flag, 'No')) AS num_icu_patterns
FROM
  encounters e
  LEFT JOIN departments d ON e.department_id=d.department_id
  LEFT JOIN hospitals h ON d.hospital_id=h.hospital_id
GROUP BY
  1,
  2,
  3
ORDER BY
  1,
  3
WITH
  NO DATA;

REFRESH MATERIALIZED VIEW mv_hospital_encounters;

SELECT
  *
FROM
  mv_hospital_encounters;

ALTER MATERIALIZED VIEW mv_hospital_encounters
RENAME TO mv_hospital_encounters_statistics;

-- -------------
CREATE VIEW
  v_patients_primary_maleham AS
SELECT
  p.master_patient_id,
  p.name AS patient_name,
  p.gender,
  p.primary_language,
  p.pcp_id,
  p.date_of_birth
FROM
  patients p
WHERE
  p.pcp_id=4121
WITH
  CHECK OPTION;

ALTER VIEW v_patients_primary_maleham
ALTER COLUMN pcp_id
SET DEFAULT 4121;

ALTER VIEW v_patients_primary_maleham
RENAME TO v_patients_primary_care_maleham;

INSERT INTO
  v_patients_primary_care_maleham
VALUES
  (
    1245,
    'John Doe',
    'Male',
    'ENGLISH',
    DEFAULT,
    '2003-07-09'
  );

INSERT INTO
  v_patients_primary_care_maleham
VALUES
  (
    1246,
    'Mary Hartwebee',
    'Female',
    'ENGLISH',
    4122,
    '2003-07-09'
  );

-- LESSON 11 SQL FUNCTIONS
-- -->CREATE FUNCTIONS
-- ->CREATE FUNCTION WITH BASE SQL
CREATE FUNCTION f_test_function (a INT, b INT) RETURNS INT LANGUAGE sql AS 'SELECT $1+$2';

SELECT
  f_test_function (1, 2);

-- ->CREATE FUNCTION WITH PLPG SQL
CREATE FUNCTION f_plpgsql_function (a INT, b INT) RETURNS INT AS $$ 
BEGIN 
RETURN a + b;
END;
$$ LANGUAGE plpgsql;

SELECT
  f_plpgsql_function (1, 2);

SELECT
  f_plpgsql_function (a=>1, b=>2);

-- ->PGSQL WAY FUNCTION
CREATE FUNCTION f_calculate_los (start_time TIMESTAMP, end_time TIMESTAMP) RETURNS NUMERIC LANGUAGE plpgsql AS $$ 
BEGIN 
RETURN ROUND((EXTRACT(EPOCH FROM (end_time-start_time))/3600)::NUMERIC, 2);
END; 
$$;

-- subtracting time stamps from each other is problematic. Epoch changes them to seconds
-- ->BASESQL WAY FUNCTION
CREATE FUNCTION f_calculate_los (start_time TIMESTAMP, end_time TIMESTAMP) RETURNS NUMERIC LANGUAGE sql AS 'SELECT ROUND((EXTRACT(EPOCH FROM (end_time - start_time))/3600)::NUMERIC, 2)';

SELECT
  patient_admission_datetime,
  patient_discharge_datetime,
  f_calculate_los (
    patient_admission_datetime,
    patient_discharge_datetime
  ) AS los
FROM
  encounters;

-- ->LIST AVAILABLE FUNCTIONS
SELECT
  *
FROM
  information_schema.routines
WHERE
  routine_schema='general_hospital';

-- -->RENAME FUNCTIONS
ALTER FUNCTION f_calculate_los
RENAME TO fm_f_calculate_los;

-- -->MODIFY FUNCTIONS
CREATE
OR REPLACE FUNCTION fm_calculate_los (start_time TIMESTAMP, end_time TIMESTAMP) RETURNS NUMERIC LANGUAGE plpgsql AS $$
BEGIN
RETURN ROUND(
  (EXTRACT (EPOCH FROM (end_time - start_time))/3600)::NUMERIC,4
  );
END;
$$;

SELECT
  fm_calculate_los (
    patient_admission_datetime,
    patient_discharge_datetime
  ) AS los
FROM
  encounters;

-- -->DELETE FUNCTIONS
DROP FUNCTION IF EXISTS fm_calculate_los;

-- CODING CHALLENGE
-- -------------
CREATE
OR REPLACE FUNCTION f_mask_field (field TEXT) RETURNS TEXT LANGUAGE plpgsql AS $$
BEGIN
RETURN md5(field);
END;
$$;

SELECT
  name,
  f_mask_field (name) AS masked_name
FROM
  patients;

-- -------------
CREATE
OR REPLACE FUNCTION f_mask_field (field TEXT) RETURNS TEXT LANGUAGE plpgsql AS $$
BEGIN 
IF FIELD IS NULL THEN RETURN NULL; 
ELSE RETURN CONCAT('Patient', LEFT(md5(field),8)); END IF; END; $$;

SELECT
  name,
  f_mask_field (name) AS masked_name
FROM
  patients;

ALTER FUNCTION f_mask_field
RENAME TO f_mask_patient_name;

DROP FUNCTION IF EXISTS f_mask_patient_name;

-- LESSON 12 STORED PROCEDURES
-- -->CREATING STORED PROCEDURE
CREATE PROCEDURE sp_test_procedure () LANGUAGE plpgsql AS $$
BEGIN
DROP TABLE IF EXISTS general_hospital.test_table;
CREATE TABLE general_hospital.test_table( id INT);
COMMIT;
END;
$$;

-- -->RUNNING STORED PROCEDURE
CALL sp_test_procedure ();

-- -->RENAMING STORED PROCEDURE
ALTER PROCEDURE sp_test_procedure
RENAME TO spp_test;

-- -->INQUIRE STORED PROCEDUR
SELECT
  *
FROM
  information_schema.routines
WHERE
  routine_schema='general_hospital'
  AND routine_type='PROCEDURE';

-- -->MODIFYING STORED PROCEDURES
CREATE
OR REPLACE PROCEDURE sp_test_procedure () LANGUAGE plpgsql AS $$
BEGIN
DROP TABLE IF EXISTS general_hospital.test_table_new;
CREATE TABLE general_hospital.test_table_new(id INT);
COMMIT;
END;
$$;

CALL sp_test_procedure ();

-- ->RELOCATING STORED PROCEDURE TO ANOTHER SCHEMA
ALTER PROCEDURE sp_test_procedure
SET schema public;

-- -->DELETE STORED PROCEDURES
DROP PROCEDURE IF EXISTS public.sp_test_procedure;

-- CODING CHALLENGE
-- -------------
CREATE PROCEDURE sp_update_surgery_cost (surgery_to_update INT, cost_change NUMERIC) LANGUAGE plpgsql AS $$
DECLARE 
num_resources INT;
BEGIN
-- Update surgical encounters
UPDATE general_hospital.surgical_encounters SET total_cost = total_cost+cost_change WHERE surgery_id = surgery_to_update;
COMMIT;
-- Get number of resources
SELECT COUNT(*) INTO num_resources FROM general_hospital.surgical_costs WHERE surgery_id = surgery_to_update;
-- Update costs table 
UPDATE general_hospital.surgical_costs SET resource_cost = resource_cost+(cost_change / num_resources) WHERE surgery_id = surgery_to_update;
COMMIT;
END;
$$;

CALL sp_update_surgery_cost (6518, 1000);

SELECT
  *
FROM
  surgical_encounters
WHERE
  surgery_id=6518;

ALTER PROCEDURE sp_update_surgery_cost
RENAME TO sp_update_surgical_cost;

-- LESSON 13 TRIGGERS
-- -->CREATE TRIGGER
CREATE FUNCTION f_clean_physician_name () RETURNS TRIGGER LANGUAGE plpgsql AS $$
BEGIN
IF NEW.last_name IS NULL OR NEW.first_name IS NULL THEN RAISE EXCEPTION 'Name cannot be null';
ELSE 
NEW.first_name = TRIM(NEW.first_name);
NEW.last_name= TRIM(NEW.last_name);
NEW.full_name = CONCAT(NEW.last_name, ', ', NEW.first_name);
RETURN NEW;
END IF;
END;
$$;

-- -->ATTACH TRIGGER ONTO TABLE
CREATE TRIGGER tr_clean_physician_name BEFORE INSERT ON physicians FOR EACH ROW
EXECUTE PROCEDURE f_clean_physician_name ();

INSERT INTO
  physicians
VALUES
  (' John ', ' Doe', 'Something', 12345);

SELECT
  *
FROM
  physicians
WHERE
  id=12345;

-- -->LIST TRIGGER
SELECT
  trigger_schema,
  trigger_name,
  event_manipulation,
  action_statement
FROM
  information_schema.triggers
WHERE
  event_object_table='physicians';

-- -->ENABLE/DISABLE TRIGGER
-- ->SELECTIVE ENABLE/DISABLE TRIGGER
ALTER TABLE physicians DISABLE TRIGGER tr_clean_physician_name;

ALTER TABLE physicians ENABLE TRIGGER tr_clean_physician_name;

-- ->TOTAL ENABLE/DISABLE TRIGGER
ALTER TABLE physicians DISABLE TRIGGER ALL;

ALTER TABLE physicians ENABLE TRIGGER ALL;

-- -->ALTERING TRIGGER
-- ->RENAME TRIGGER
ALTER TRIGGER tr_clean_physician_name ON physicians
RENAME TO tr_physician_name;

-- -->DELETE TRIGGER
DROP TRIGGER IF EXISTS tr_clean_physician_name ON physicians;

-- CODING CHALLENGE
-- -------------
CREATE FUNCTION f_update_surgical_costs () RETURNS TRIGGER LANGUAGE plpgsql AS $$
DECLARE 
num_resources INT;
BEGIN
--GET RESOURCE COUNT
SELECT COUNT(*) INTO num_resources
FROM general_hospital.surgical_costs
WHERE surgery_id = NEW.surgery_id;
--UPDATE COSTS TABLE
IF NEW.total_cost != OLD.total_cost THEN
UPDATE general_hospital.surgical_costs SET resource_cost = NEW.total_cost / num_resources WHERE surgery_id = NEW.surgery_id;
END IF;
RETURN NEW;
END;
$$;

CREATE TRIGGER tr_my_trigger
AFTER
UPDATE ON general_hospital.surgical_encounters FOR EACH ROW
EXECUTE PROCEDURE f_update_surgical_costs ();

ALTER TRIGGER tr_my_trigger ON surgical_encounters
RENAME TO tr_altered_trigger;

UPDATE surgical_encounters
SET
  total_cost=total_cost+1000
WHERE
  surgery_id=14615;

SELECT
  *
FROM
  surgical_encounters
WHERE
  surgery_id=14615;

DROP TRIGGER tr_altered_trigger ON surgical_encounters;

-- LESSON 14 USEFUL METHODS AND TOOLS
-- -->EXPLAIN, EXPLAIN (FORMAT...) & EXPLAIN ANALYZE
-- IN ORDER TO PROTECT DATABASE FROM BEING OVERWRITTEN BY THESE QUERIES, WE WRAP THEM IN A SQL TRANSACTION AND END IT WITH ROLLBACK;
-- ->EXPLAIN
EXPLAIN
WITH
  surgical_los AS (
    SELECT
      surgery_id,
      (surgical_discharge_date-surgical_admission_date) AS los,
      AVG(surgical_discharge_date-surgical_admission_date) OVER () AS avg_los
    FROM
      surgical_encounters
  )
SELECT
  *,
  ROUND(los-avg_los, 2)
FROM
  surgical_los;

-- ->EXPLAIN FORMAT()
EXPLAIN (FORMAT json)
WITH
  surgical_los AS (
    SELECT
      surgery_id,
      (surgical_discharge_date-surgical_admission_date) AS los,
      AVG(surgical_discharge_date-surgical_admission_date) OVER () AS avg_los
    FROM
      surgical_encounters
  )
SELECT
  *,
  ROUND(los-avg_los, 2)
FROM
  surgical_los;

-- ->EXPLAIN ANALYZE
EXPLAIN
ANALYZE
WITH
  surgical_los AS (
    SELECT
      surgery_id,
      (surgical_discharge_date-surgical_admission_date) AS los,
      AVG(surgical_discharge_date-surgical_admission_date) OVER () AS avg_los
    FROM
      surgical_encounters
  )
SELECT
  *,
  ROUND(los-avg_los, 2)
FROM
  surgical_los;

-- -->DROP vs TRUNCATE
-- ->DROP TABLE
DROP TABLE Sales_y2017;

-- ->TRUNCATE TABLE
BEGIN TRANSACTION;

TRUNCATE TABLE patients CASCADE;

ROLLBACK TRANSACTION;

-- --> EXPORT/IMPORT DATA WITH COPY
-- ->COPY OUT
COPY physicians TO 'C:\Users\Public\physicians.csv'
WITH
  DELIMITER ',' CSV HEADER;

-- ->COPY IN
CREATE TABLE
  physicians_3 (
    first_name TEXT,
    last_name TEXT,
    full_name TEXT,
    id INT
  );

COPY physicians_3
FROM
  'C:\Users\Public\physicians.csv'
WITH
  DELIMITER ',' CSV HEADER;

-- -->ARRAY AND ARRAY FUNCTIONS
WITH
  resources AS (
    SELECT
      surgery_id,
      array_agg(
        DISTINCT resource_name
        ORDER BY
          resource_name
      ) AS resource_array
    FROM
      general_hospital.surgical_costs
    GROUP BY
      surgery_id
  )
SELECT
  r1.surgery_id,
  r2.surgery_id,
  r1.resource_array
FROM
  resources r1
  LEFT OUTER JOIN resources r2 ON r1.surgery_id!=r2.surgery_id
  AND r1.resource_array=r2.resource_array
WHERE
  r1.resource_array@>ARRAY['Full Blood Count']::VARCHAR[];

-- resource.array containing 'Full Blood Count' string in the array
-- -->JSON AND JSON FUNCTIONS
SELECT
  '{"first_name": "Ben", "last_name": "Doe"}'::JSONB->>'first_name';

SELECT
  '[{"first_name": "Ben", "last_name": "Doe"}]'::JSONB->0;

SELECT
  '{"b":2}'::jsonb<@'{"a":1, "b":2}'::jsonb;

SELECT
  '{"a":1, "b":2}'::jsonb@>'{"b":3}'::jsonb;

SELECT
  '[{"a":1}, "b"]'::jsonb||'["c", "d"]'::jsonb;

SELECT
  jsonb_build_object(
    'id',
    id,
    'fist_name',
    first_name,
    'last_name',
    last_name
  ) AS physician_json
FROM
  physicians;

-- -->LISTING/LOADING POSTGRE EXTENSIONS
SELECT
  *
FROM
  pg_available_extensions;

CREATE EXTENSION fuzzystrmatch SCHEMA general_hospital;

SELECT
  levenshtein ('bigelow', 'bigalo');

CREATE EXTENSION earthdistance CASCADE SCHEMA general_hospital;

SELECT
  p.latitude,
  p.longitude,
  h.latitude,
  h.longitude,
  earth_distance (
    ll_to_earth (p.latitude, p.longitude),
    ll_to_earth (h.latitude, h.longitude)
  )/1000 AS distance_km,
  point(p.longitude, p.latitude)<@>point(h.longitude, h.latitude) AS distance_miles
FROM
  patients p
  INNER JOIN hospitals h ON h.hospital_id=111000;

SELECT
  *
FROM
  information_schema.columns
WHERE
  table_schema='general_hospital'
  AND table_name='hospitals';

-- CODING CHALLENGE
-- -------------
-- ->LIST AVAILABLE EXTENSIONS
SELECT
  *
FROM
  pg_available_extensions
ORDER BY
  1;

-- ->LOAD AN EXTENSION TO THE SCHEMA
CREATE EXTENSION insert_username SCHEMA general_hospital;

BEGIN TRANSACTION;

EXPLAIN
ANALYZE
DELETE FROM general_hospital.vitals;

ROLLBACK TRANSACTION;

-- ->RETIREVE JSONB DATA FROM A TABLE 
SELECT
  *
FROM
  patients;

SELECT
  json_build_object(
    'name',
    name, -- value field from the table
    'address',
    address_full, -- value field from the table
    'city',
    city, -- value field from the table
    'state',
    state, -- value field from the table
    'zip_cd',
    zip_cd -- value field from the table
  ) AS address_jsonb
FROM
  patients;