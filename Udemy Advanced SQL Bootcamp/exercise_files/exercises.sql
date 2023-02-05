-- LESSON 2 SUBQUERIES AND CTEs
-- --> FROM(...) / FROM(...)...JOIN(...) SUBQUERIES
SELECT
  *
FROM
  patients
WHERE
  date_of_birth >= '2000-01-01'
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
      date_of_birth >= '2000-01-01'
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
      surgical_admission_date BETWEEN '2016-11-01'
      AND '2016-11-30'
  ) se
  INNER JOIN (
    SELECT
      master_patient_id
    FROM
      patients
    WHERE
      date_of_birth >= '1990-01-01'
  ) p ON se.master_patient_id = p.master_patient_id;

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
      date_of_birth >= '2000-01-01'
    ORDER BY
      master_patient_id
  ) p
WHERE
  p.name ILIKE 'm%';

-- REWORKED CTE VERSION OF THE ABOVE CODE
WITH young_patients AS (
  SELECT
    *
  FROM
    patients
  WHERE
    date_of_birth >= '2000-01-01'
)
SELECT
  *
FROM
  young_patients
WHERE
  name ILIKE 'm%';

-- ->COMPLEX CTE
-- ->MULTIPLE CTEs
WITH top_counties AS (
  -- SELECT COUNTIES WITH WITH PATIENT COUNTS OVER 1500 AND SELECT THE PATIENTS IN THOSE COUNTIES 
  SELECT
    county,
    COUNT(*) AS num_patients
  FROM
    patients
  GROUP BY
    county
  HAVING
    COUNT(*) > 1500
),
county_patients AS (
  -- AND FIND OUT THE NUMBER OF SURGERIES BASED ON THEIR COUNTY.  
  SELECT
    p.master_patient_id,
    p.county
  FROM
    patients p
    INNER JOIN top_counties t ON p.county = t.county
)
SELECT
  p.county,
  COUNT(s.surgery_id) AS num_surgeries
FROM
  surgical_encounters s
  INNER JOIN county_patients p ON s.master_patient_id = p.master_patient_id
GROUP BY
  p.county;

-- --> CTEs COMPARISON SUBQUERIES
WITH total_cost AS (
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
  total_surgery_cost > (
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
  bp_diastolic >(
    SELECT
      MIN(bp_diastolic)
    FROM
      "vitals"
  )
  AND bp_systolic <(
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
    SELECT
      DISTINCT master_patient_id
    FROM
      "surgical_encounters"
  )
ORDER BY
  master_patient_id;

--SIMILARLY, JOIN VERSION OF THE ABOVE CODE
SELECT
  DISTINCT p.master_patient_id
FROM
  "patients" p
  INNER JOIN "surgical_encounters" s ON p.master_patient_id = s.master_patient_id
ORDER BY
  p.master_patient_id;

SELECT
  p.master_patient_id
FROM
  patients p
  INNER JOIN surgical_encounters s ON p.master_patient_id = s.master_patient_id
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
    SELECT
      DISTINCT master_patient_id
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
  total_profit > ALL (
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
  AVG(
    surgical_discharge_date - surgical_admission_date
  ) AS length_of_stay
FROM
  surgical_encounters
GROUP BY
  diagnosis_description
HAVING
  AVG(
    surgical_discharge_date - surgical_admission_date
  ) <= ALL (
    SELECT
      AVG(
        EXTRACT(
          DAY
          FROM
            patient_discharge_datetime - patient_admission_datetime
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
  string_agg(DISTINCT surgical_type, ',') LIKE ALL(
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
  EXISTS(
    SELECT
      1
    FROM
      "orders_procedures" o
    WHERE
      e.patient_encounter_id = o.patient_encounter_id
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
      s.master_patient_id = p.master_patient_id
  );

-- -->RECURSIVE CTEs
WITH RECURSIVE fibonacci AS (
  SELECT
    -- base value
    1 as a,
    1 as b
  UNION
  ALL
  SELECT
    -- recursive operation
    b,
    a + b
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

WITH RECURSIVE orders AS (
  SELECT
    order_procedure_id,
    order_parent_order_id,
    0 AS level
  FROM
    orders_procedures
  WHERE
    order_parent_order_id IS NULL
  UNION
  ALL
  SELECT
    op.order_procedure_id,
    op.order_parent_order_id,
    o.level + 1 AS level
  FROM
    orders_procedures op
    INNER JOIN orders o ON op.order_parent_order_id = o.order_procedure_id
)
SELECT
  *
FROM
  orders
WHERE
  level != 0;

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

WITH provider_encounters AS (
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
  LEFT OUTER JOIN provider_orders o ON p.id = o.ordering_provider_id
WHERE
  o.avg_num_procedures IS NOT NULL
ORDER BY
  o.avg_num_procedures DESC;

-- find encounters with any of the top 10 most common order codes
SELECT
  DISTINCT patient_encounter_id
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
  total_account_balance > 10000
  AND EXISTS(
    SELECT
      1
    FROM
      encounters e
    WHERE
      e.hospital_account_id = a.account_id
      AND patient_in_icu_flag = 'Yes'
  );

-- find encounters for patients born on or after 1995-01-01 whose length of stay is greater than or equal to the average surgical length of stay for patients 65 or older
WITH old_los AS (
  SELECT
    EXTRACT(
      YEAR
      FROM
        AGE(NOW(), p.date_of_birth)
    ) AS age,
    AVG(
      s.surgical_discharge_date - s.surgical_admission_date
    ) AS avg_los
  FROM
    patients p
    INNER JOIN surgical_encounters s ON p.master_patient_id = s.master_patient_id
  WHERE
    p.date_of_birth IS NOT NULL
    AND EXTRACT(
      YEAR
      FROM
        AGE(NOW(), p.date_of_birth)
    ) >= 65
  GROUP BY
    EXTRACT(
      YEAR
      FROM
        AGE(NOW(), p.date_of_birth)
    )
)
SELECT
  e.*
FROM
  encounters e
  INNER JOIN patients p ON e.master_patient_id = p.master_patient_id
WHERE
  p.date_of_birth >= '1995-01-01'
  AND EXTRACT(
    DAYS
    FROM
      (
        e.patient_discharge_datetime - e.patient_admission_datetime
      )
  ) >= ALL(
    SELECT
      avg_los
    FROM
      old_los
  );

-- LESSON 3 WINDOW FUNCTIONS
-- ---> PERFORMING DYNAMIC CALCS ON DATA WITHIN GROUPS 
-- --> WINDOW FUNCTIONS with CTEs
WITH surgical_los AS (
  SELECT
    surgery_id,
    (
      surgical_discharge_date - surgical_admission_date
    ) AS los,
    AVG(
      surgical_discharge_date - surgical_admission_date
    ) OVER() AS avg_los
  FROM
    "surgical_encounters"
)
SELECT
  *,
  ROUND(los - avg_los, 2)
FROM
  surgical_los;

-- --> RANK() OVER([PARTITION BY]... [ORDER BY]...)
SELECT
  account_id,
  primary_icd,
  total_account_balance,
  RANK() OVER(
    PARTITION BY primary_icd
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
  RANK() OVER(
    PARTITION BY surgeon_id
    ORDER BY
      total_cost ASC
  ) AS cost_rank,
  ROW_NUMBER() OVER(
    PARTITION BY surgeon_id,
    diagnosis_description
    ORDER BY
      total_profit DESC
  ) AS profit_row_number
FROM
  "surgical_encounters" s
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id = p.id
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
  "encounters" WINDOW w AS (
    PARTITION BY master_patient_id
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
  AVG(total_profit) OVER(PARTITION BY s.surgeon_id) AS avg_total_profit,
  SUM(total_cost) OVER(PARTITION BY s.surgeon_id) AS total_surgeon_cost
FROM
  "surgical_encounters" s
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id = p.id;

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
  LEFT OUTER JOIN "physicians" p ON s.surgeon_id = p.id WINDOW w AS (PARTITION BY s.surgeon_id);

-- CODING CHALLENGE
-- FIND SURGERIES THAT OCCURED WITHIN 30 DAYS OF A PREVIOUS SURGERY
WITH prior_surgery AS (
  SELECT
    surgery_id,
    master_patient_id,
    surgical_admission_date,
    surgical_discharge_date,
    LAG(surgical_discharge_date) OVER(
      PARTITION BY master_patient_id
      ORDER BY
        surgical_admission_date
    ) AS previous_discharge_date
  FROM
    surgical_encounters
)
SELECT
  *,
  (
    surgical_admission_date - previous_discharge_date
  ) AS days_between_surgeries
FROM
  prior_surgery
WHERE
  (
    surgical_admission_date - previous_discharge_date
  ) <= 30;

--FOR EACH DEPARTMENT, FIND THE 3 PHYSICIANS WITH THE MOST ADMISSIONS
WITH provider_department AS (
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
    ROW_NUMBER() OVER(
      PARTITION BY department_id
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
  LEFT OUTER JOIN physicians p ON p.id = pd.admitting_provider_id
  LEFT OUTER JOIN departments d ON d.department_id = pd.department_id
WHERE
  encounter_rank <= 3
ORDER BY
  d.department_name,
  encounter_rank DESC;

-- FOR EACH SURGERY, FIND ANY RESOURCES THAT ACCOUNTED FOR MORE THAN 50% OF TOTAL SURGERY COST
WITH total_cost AS (
  SELECT
    surgery_id,
    resource_name,
    resource_cost,
    SUM(resource_cost) OVER(PARTITION BY surgery_id) AS total_surgery_cost
  FROM
    surgical_costs
)
SELECT
  *,
  (resource_cost / total_surgery_cost) * 100 AS pct_total_cost
FROM
  total_cost
WHERE
  (resource_cost / total_surgery_cost) * 100 > 50;

-- LESSON 4 ADVANCED JOIN OPERATIONS
-- --->SELF JOIN
SELECT
  se1.surgery_id AS surgery_id1,
  (
    se1.surgical_discharge_date - se1.surgical_admission_date
  ) AS los1,
  se2.surgery_id AS surgery_id2,
  (
    se2.surgical_discharge_date - se2.surgical_admission_date
  ) AS los2
FROM
  "surgical_encounters" se1
  INNER JOIN "surgical_encounters" se2 ON (
    se1.surgical_discharge_date - se1.surgical_admission_date
  ) = (
    se2.surgical_discharge_date - se2.surgical_admission_date
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
  INNER JOIN "orders_procedures" o2 ON o1.order_parent_order_id = o2.order_procedure_id;

-- --->FULL JOIN
-- SORT OUT NULL CASES
SELECT
  a.account_id,
  e.patient_encounter_id
FROM
  "accounts" a FULL
  JOIN "encounters" e ON a.account_id = e.hospital_account_id
WHERE
  a.account_id IS NULL
  OR e.patient_encounter_id IS NULL;

SELECT
  d.department_id,
  d.department_name
FROM
  "departments" d FULL
  JOIN "hospitals" h ON d.hospital_id = h.hospital_id
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
  d.hospital_id = h.hospital_id;

SELECT
  h.hospital_name,
  d.department_name
FROM
  hospitals h,
  departments d
WHERE
  d.hospital_id = h.hospital_id;

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
  departments d NATURAL
  JOIN hospitals h;

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
  (AVG(v.bp_diastolic) + AVG(v.bp_systolic)) * 0.5 AS median_bp
FROM
  vitals v
  INNER JOIN encounters e USING(patient_encounter_id)
  LEFT OUTER JOIN physicians p ON e.admitting_provider_id = p.id
GROUP BY
  p.full_name;

-- find the number of surgeries in the surgical costs table without data in the surgical encounters table
SELECT
  COUNT(DISTINCT sc.surgery_id)
FROM
  surgical_costs sc FULL
  JOIN surgical_encounters se USING(surgery_id)
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
UNION
ALL
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
WITH all_patients AS (
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
  INNER JOIN patients p ON ap.master_patient_id = p.master_patient_id;

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

WITH missing_departments AS (
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
  INNER JOIN departments d ON m.department_id = d.department_id;

-- CODING CHALLENGE
-- GENERATE A LIST OF ALL PHYSICIANS AND PHYSICIAN TYPES IN THE ENCOUNTERS TABLE INCLUDING THEIR NAMES
WITH combined_physicians AS (
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
  INNER JOIN physicians p ON p.id = cp.provider_id
ORDER BY
  p.full_name,
  cp.provider_type;

-- FIND ALL PRIMARY CARE PHYSICIANS WHO ALSO ADMITTING PROVIDERS
WITH admitting_pcps AS (
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
  INNER JOIN physicians p ON p.id = a.pcp_id;

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
  GROUPING SETS ((state), (state, county),())
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
  LEFT JOIN "physicians" p ON se.surgeon_id = p.id
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
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  warehouse,
  product
UNION
ALL
SELECT
  warehouse,
  null,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  warehouse
UNION
ALL
SELECT
  null,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  product
UNION
ALL
SELECT
  null,
  null,
  SUM(quantity) qty
FROM
  inventory;

SELECT
  warehouse,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  GROUPING SETS(
    (warehouse, product),
    (warehouse),
    (product),
    ()
  );

-- postgre sql version
SELECT
  warehouse,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  ROLLUP (warehouse, product);

-- mysql version
SELECT
  warehouse,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  warehouse,
  product WITH ROLLUP;

-- -->GROUP BY CUBE
-- VIA GROUPING SETS
SELECT
  warehouse,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  GROUPING SETS(
    (warehouse, product),
    (warehouse),
    (product),
    ()
  );

-- VIA CUBE
SELECT
  warehouse,
  product,
  SUM (quantity) qty
FROM
  inventory
GROUP BY
  CUBE(warehouse, product);

SELECT
  state,
  county,
  COUNT(*) AS num_patients
FROM
  "patients"
GROUP BY
  CUBE(state, county)
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
  LEFT JOIN physicians p ON se.surgeon_id = p.id
GROUP BY
  cube(
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
  LEFT JOIN departments d ON e.department_id = d.department_id
  LEFT JOIN hospitals h ON d.hospital_id = h.hospital_id
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
        AGE(NOW(), date_of_birth)
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
        AGE(NOW(), date_of_birth)
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
  CUBE(weight, height)
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
  ROLLUP(1, 2, 3)
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