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
-- find encounters for patients born on or after 1995-01-01 whose length of stay is greater than or equal to the average surgical length of stay for patients 65 or older