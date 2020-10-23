--CHALLENGE=See Table of Retiring Emp 
SELECT e.emp_no, e.first_name, e.last_name, t.title, t.from_date, s.salary
INTO retirement_info
FROM employees as e
LEFT JOIN titles as t
ON (e.emp_no = t.emp_no)
LEFT JOIN salaries as s
ON (e.emp_no = s.emp_no )
WHERE (birth_date BETWEEN '1925-01-01' AND '1955-12-31')
AND (hire_date BETWEEN '1985-01-01' AND '1988-12-31');

--CHALLENGE query method to locate duplicates
SELECT emp_no, count(emp_no)
FROM retirement_info
GROUP BY emp_no
ORDER BY count (emp_no) DESC, emp_no ASC

--CHALLENEGE duplicates that we need to remove include only the most recent title of each employee
-- Partition the data to show only most recent title per employee
SELECT tmp.emp_no,
 tmp.first_name,
 tmp.last_name,
 tmp.title,
 tmp.from_date
--INTO recent_employee_titles
FROM 
 (
	 SELECT emp_no,
	 first_name,
	 last_name,
	 title,
	 from_date,
	 ROW_NUMBER() OVER
	 (
		 PARTITION BY (emp_no)
		 ORDER BY from_date DESC
	 ) AS rn
	 FROM retirement_info
 ) AS tmp 
WHERE rn = 1
ORDER BY emp_no;

--CHALLENGE Query to verify if any duplicates were present after partition
SELECT emp_no, count(emp_no)
FROM recent_employee_titles
GROUP BY emp_no
ORDER BY count (emp_no) DESC, emp_no ASC