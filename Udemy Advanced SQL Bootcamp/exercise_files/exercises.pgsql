-- -- LESSON 2 SUBQUERIES AND CTEs
-- -- --> FROM(...) / FROM(...)...JOIN(...) SUBQUERIES
SELECT
  *
FROM
  general_hospital.patients
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
      general_hospital.patients
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
      general_hospital.surgical_encounters
    WHERE
      surgical_admission_date BETWEEN '2016-11-01' AND '2016-11-30'
  ) se
  INNER JOIN (
    SELECT
      master_patient_id
    FROM
      general_hospital.patients
    WHERE
      date_of_birth >= '1990-01-01'
  ) p ON se.master_patient_id = p.master_patient_id;

-- -- -->COMMON TABLE EXPRESSIONS CTEs
-- CODE WITH NO CTEs
SELECT
  *
FROM
  (
    SELECT
      *
    FROM
      general_hospital.patients
    WHERE
      date_of_birth >= '2000-01-01'
    ORDER BY
      master_patient_id
  ) p
WHERE
  p.name ILIKE 'm%';

-- REWORKED CTEs VERSION OF ABOVE CODE
WITH
  young_patients AS (
    SELECT
      *
    FROM
      general_hospital.patients
    WHERE
      date_of_birth >= '2000-01-01'
  )
SELECT
  *
FROM
  young_patients
WHERE
  name ILIKE 'm%';

-- ->MULTIPLE CTEs
WITH
  -- SELECT COUNTIES WITH WITH PATIENT COUNTS OVER 1500 AND SELECT THE PATIENTS IN THOSE COUNTIES 
  top_counties AS (
    SELECT
      county,
      COUNT(*) AS num_patients
    FROM
      general_hospital.patients
    GROUP BY
      county
    HAVING
      COUNT(*) > 1500
  ),
  county_patients AS (
    SELECT
      p.master_patient_id,
      p.county
    FROM
      general_hospital.patients p
      INNER JOIN top_counties t ON p.county = t.county
  )
  -- AND FIND OUT THE NUMBER OF SURGERIES BASED ON THEIR COUNTY.  
SELECT
  p.county,
  COUNT(s.surgery_id) AS num_surgeries
FROM
  general_hospital.surgical_encounters s
  INNER JOIN county_patients p ON s.master_patient_id = p.master_patient_id
GROUP BY
  p.county;

-- -- -->RECURSIVE COMMON TABLE EXPRESSIONS CTEs
WITH RECURSIVE
  fibonacci AS (
    SELECT
      1 AS a,
      1 AS b
    UNION
    SELECT
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

WITH RECURSIVE
  orders
  -- RECURSIVE TABLE NAME
  AS (
    SELECT
      order_procedure_id,
      order_parent_order_id,
      0 AS level
    FROM
      general_hospital.orders_procedures
    WHERE
      order_parent_order_id IS NULL
      -- parent_order_id reset to 0 for NULL declarations
    UNION ALL
    --and the rest is added 1 
    SELECT
      op.order_procedure_id,
      op.order_parent_order_id,
      o.level + 1
    FROM
      general_hospital.orders_procedures op
      INNER JOIN orders o ON op.order_parent_order_id = o.order_procedure_id
  )
SELECT
  *
FROM
  orders
  -- RECURSIVE TABLE NAME
WHERE
  level != 0
LIMIT
  100;

WITH RECURSIVE
  company_hierarchy AS (
    SELECT
      id,
      first_name,
      last_name,
      boss_id,
      0 AS hierarchy_level
    FROM
      employees
    WHERE
      boss_id IS NULL
    UNION ALL
    SELECT
      e.id,
      e.first_name,
      e.last_name,
      e.boss_id,
      hierarchy_level + 1
    FROM
      employees e,
      company_hierarchy ch
    WHERE
      e.boss_id = ch.id
  )
SELECT
  ch.first_name AS employee_first_name,
  ch.last_name AS employee_last_name,
  e.first_name AS boss_first_name,
  e.last_name AS boss_last_name,
  hierarchy_level
FROM
  company_hierarchy ch
  LEFT JOIN employees e ON ch.boss_id = e.id
ORDER BY
  ch.hierarchy_level,
  ch.boss_id;

WITH RECURSIVE
  per_investor_amount AS (
    SELECT
      0 AS investors_number,
      0.00 AS investment_amount,
      0.00 AS individual_amount
    UNION
    SELECT
      pia.investors_number + 1,
      i.investment_amount,
      i.investment_amount / (investor_number + 1)
    FROM
      investment i,
      per_investor_amount pia
    WHERE
      investors_number < 3
  )
SELECT
  *
FROM
  per_investor_amount
ORDER BY
  investment_amount,
  investors_number;

-------------------------
-- CREATE DATABASE routes;
-- DROP TABLE cities_route;
-- CREATE TABLE
--   cities_route (
--     city_from VARCHAR(50) NOT NULL,
--     city_to VARCHAR(50) NOT NULL,
--     distance DECIMAL(10, 2) NOT NULL
--   );
-- INSERT INTO
--   cities_route (city_from, city_to, distance)
-- VALUES
--   ('Groningen', 'Heerenveen', 61.4),
--   ('Groningen', 'Harlingen', 91.6),
--   ('Harlingen', 'Wieringerwerf', 52.3),
--   ('Wieringerwerf', 'Hoorn', 26.5),
--   ('Hoorn', 'Amsterdam', 46.1),
--   ('Amsterdam', 'Haarlem', 30),
--   ('Heerenveen', 'Lelystad', 74),
--   ('Lelystad', 'Amsterdam', 57.2);
SELECT
  *
FROM
  cities_route;

WITH RECURSIVE
  possible_route AS (
    SELECT
      cr.city_to,
      cr.city_from || '-->' || cr.city_to AS route,
      cr.distance
    FROM
      cities_route cr
    WHERE
      cr.city_from = 'Groningen'
    UNION
    SELECT
      cr.city_to,
      pr.route || '->' || cr.city_to AS route,
      CAST((pr.distance + cr.distance) AS DECIMAL(10, 2))
    FROM
      possible_route pr
      INNER JOIN cities_route cr ON cr.city_from = pr.city_to
  )
SELECT
  route,
  distance
FROM
  possible_route pr
WHERE
  pr.city_to = 'Haarlem'
ORDER BY
  pr.distance;

-- -- -->NUMERICAL COMPARISON SUBQUERIES
-- ENUMARATE TOTAL SURGERY COST FOR EACH SURGERY TYPE
WITH
  total_cost AS (
    SELECT
      surgery_id,
      SUM(resource_cost) AS total_surgery_cost
    FROM
      general_hospital.surgical_costs
    GROUP BY
      surgery_id
  )
  -- AND SELECT THE ONES THAT IS ABOVE THE AVERAGE SURGERY COST
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
  general_hospital.vitals
WHERE
  bp_diastolic > (
    SELECT
      MIN(bp_diastolic)
    FROM
      general_hospital.vitals
  )
  AND bp_systolic < (
    SELECT
      MAX(bp_systolic)
    FROM
      general_hospital.vitals
  );

-- -- -->IN & NOT IN SUBQUERIES
-- IN..
SELECT
  *
FROM
  general_hospital.patients
WHERE
  master_patient_id IN (
    SELECT DISTINCT
      master_patient_id
    FROM
      general_hospital.surgical_encounters
  )
ORDER BY
  master_patient_id;

--LETS REWRITE ABOVE CODE WITH JOIN()
SELECT
  p.master_patient_id
FROM
  general_hospital.patients p
  INNER JOIN general_hospital.surgical_encounters s ON p.master_patient_id = s.master_patient_id
ORDER BY
  p.master_patient_id;

-- NOT IN...
SELECT
  *
FROM
  general_hospital.patients
WHERE
  master_patient_id NOT IN (
    SELECT DISTINCT
      master_patient_id
    FROM
      general_hospital.surgical_encounters
  )
ORDER BY
  master_patient_id;

-- -- -->ANY(...) & ALL(...) SUBQUERIES
SELECT
  *
FROM
  general_hospital.surgical_encounters
WHERE
  total_profit > ALL (
    SELECT
      AVG(total_cost)
    FROM
      general_hospital.surgical_encounters
    GROUP BY
      diagnosis_description
  );

-- DIAGNOSIS WHOSE AVG LENGTH OF STAY IS LESS OR EQUAL TO THE AVG LENGTH OF STAY OF ALL ENCOUNTERS BY DEPARTMENTS.
SELECT
  diagnosis_description,
  AVG(surgical_discharge_date - surgical_admission_date) AS length_of_stay
FROM
  general_hospital.surgical_encounters
GROUP BY
  diagnosis_description
HAVING
  AVG(surgical_discharge_date - surgical_admission_date) <= ALL (
    SELECT
      AVG(
        EXTRACT(
          DAY
          FROM
            patient_discharge_datetime - patient_admission_datetime
        )
      )
    FROM
      general_hospital.encounters
    GROUP BY
      department_id
  );

SELECT
  unit_name,
  string_agg(DISTINCT surgical_type, ',') AS case_types
FROM
  general_hospital.surgical_encounters
GROUP BY
  unit_name
HAVING
  string_agg(DISTINCT surgical_type, ',') LIKE ALL (
    SELECT
      string_agg(DISTINCT surgical_type, ',')
    FROM
      general_hospital.surgical_encounters
  );

-- -- -->[WHERE] EXISTS(...)/NOT EXISTS(...) SUBQUERIES
SELECT
  e.*
FROM
  general_hospital.encounters e
WHERE
  EXISTS (
    SELECT
      1
      -- IMPORTANT! EXITS CLAUSE DO NOT CARE THE ENTRY OF COLUMN.... IF * OR 1 OR ANYTHING...
    FROM
      general_hospital.orders_procedures o
    WHERE
      e.patient_encounter_id = o.patient_encounter_id
  );

--GET ALL PATIENTS WHO HAD NO SURGERY
SELECT
  p.*
FROM
  general_hospital.patients p
WHERE
  NOT EXISTS (
    SELECT
      *
    FROM
      general_hospital.surgical_encounters s
    WHERE
      s.master_patient_id = p.master_patient_id
  );

-- CODING CHALLENGE
-- FIND THE AVERAGE NUMBER OF ORDERS PER ENCOUNTER BY PROVIDER/PHYSICIAN --> ENCOUNTER / ORDERS
WITH
  provider_encounters AS (
    SELECT
      ordering_provider_id,
      patient_encounter_id,
      COUNT(ordering_provider_id) AS num_procedures
    FROM
      general_hospital.orders_procedures
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
  general_hospital.physicians p
  LEFT OUTER JOIN provider_orders o ON p.id = o.ordering_provider_id
WHERE
  o.avg_num_procedures IS NOT NULL
ORDER BY
  o.avg_num_procedures DESC;

-- FIND ENCOUNTERS WITH ANY OF THE TOP 10 MOST COMMON ORDER CODES --> ENCOUNTERS/ORDER TABLES
SELECT DISTINCT
  patient_encounter_id
FROM
  general_hospital.orders_procedures
WHERE
  order_cd IN (
    SELECT
      order_cd
    FROM
      general_hospital.orders_procedures
    GROUP BY
      order_cd
    ORDER BY
      COUNT(*) DESC
    LIMIT
      10
  );

-- FIND ACCOUNTS WITH A TOTAL ACCOUNT BALANCE OVER $10000 AND AT LEAST ONE ICU ENCOUNTER --> ACCOUNTS / ENCOUNTERS TABLES
SELECT
  a.account_id,
  a.total_account_balance
FROM
  general_hospital.accounts a
WHERE
  total_account_balance > 10000
  AND EXISTS (
    SELECT
      1
    FROM
      general_hospital.encounters e
    WHERE
      e.hospital_account_id = a.account_id
      AND patient_in_icu_flag = 'Yes'
  );

-- FIND ENCOUNTERS FOR PATIENTS BORN ON OR AFTER 1995-01-01 WHOSE LENGTH OF STAY IS GREATER THAN OR EQUAL TO THE AVERAGE SURGICAL LENGTH OF STAY FOR PATIENTS 65 OR OLDER
WITH
  old_los AS (
    SELECT
      EXTRACT(
        YEAR
        FROM
          -- NOTE: AGE() POSTGRESQL FUNCTION
          AGE (NOW(), date_of_birth)
          -- DATEDIFF (NOW(), p.date_of_birth) IN MYSQL
      ) AS age,
      AVG(
        s.surgical_discharge_date - s.surgical_admission_date
      ) AS avg_los
    FROM
      general_hospital.patients p
      INNER JOIN general_hospital.surgical_encounters s ON p.master_patient_id = s.master_patient_id
    WHERE
      p.date_of_birth IS NOT NULL
      AND
      -- NOTE: extract is a date&ytime function per https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html#function_extract
      EXTRACT(
        YEAR
        FROM
          -- NOTE: AGE() POSTGRESQL FUNCTION
          AGE (NOW(), date_of_birth)
          -- DATEDIFF (NOW(), p.date_of_birth) IN MYSQL
      ) >= 65
    GROUP BY
      EXTRACT(
        YEAR
        FROM
          -- NOTE: AGE() POSTGRESQL FUNCTION
          AGE (NOW(), date_of_birth)
          -- DATEDIFF (NOW(), p.date_of_birth) IN MYSQL
      )
  )
SELECT
  e.*
FROM
  general_hospital.encounters e
  INNER JOIN general_hospital.patients p ON e.master_patient_id = p.master_patient_id
  AND p.date_of_birth >= '1995-01-01'
WHERE
  EXTRACT(
    DAYS
    FROM
      (
        e.patient_discharge_datetime - e.patient_admission_datetime
      )
  ) >= ALL (
    SELECT
      avg_los
    FROM
      old_los
  );