-- Create the database
CREATE DATABASE school_management;

-- Connect to the database
\c school_management;

-- Create schema (optional)
CREATE SCHEMA school;

-- Create table for students
CREATE TABLE school.students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    class VARCHAR(20) NOT NULL
);

-- Create table for fees
CREATE TABLE school.fees (
    fee_id SERIAL PRIMARY KEY,
    student_id INT NOT NULL REFERENCES school.students(student_id),
    amount DECIMAL(10, 2) NOT NULL,
    paid BOOLEAN DEFAULT FALSE,
    due_date DATE NOT NULL
);

-- Insert sample data into students table
INSERT INTO school.students (first_name, last_name, class) VALUES 
('John', 'kwasi', 'CPEN206'),
('serwa', 'osei’, 'CBAS 210'),
('Edward', 'Fordjour', 'CPEN205');
(‘Steven’, ‘Nyarko’,’CPEN208’);
(‘Phill’, ‘Mensah’, ‘CPEN202’);
-- Insert sample data into fees table
INSERT INTO school.fees (student_id, amount, paid, due_date) VALUES 
(1, 500.00, FALSE, '2024-06-01'),
(1, 300.00, TRUE, '2024-05-01'),
(2, 450.00, FALSE, '2024-06-01'),
(3, 350.00, TRUE, '2024-05-01'),
(3, 150.00, FALSE, '2024-06-01');

CREATE OR REPLACE FUNCTION school.calculate_outstanding_fees() RETURNS JSON AS $$
DECLARE
    result JSON;
BEGIN
    SELECT json_agg(json_build_object(
        'student_id', s.student_id,
        'student_name', s.first_name || ' ' || s.last_name,
        'outstanding_fees', COALESCE(SUM(f.amount), 0)
    ))
    INTO result
    FROM school.students s
    LEFT JOIN school.fees f ON s.student_id = f.student_id AND f.paid = FALSE
    GROUP BY s.student_id;

    RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Call the function to get outstanding fees for each student
SELECT school.calculate_outstanding_fees();

[
  {
    "student_id": 1,
    "student_name": "John Doe",
    "outstanding_fees": 500.00
  },
  {
    "student_id": 2,
    "student_name": "Jane Smith",
    "outstanding_fees": 450.00
  },
  {
    "student_id": 3,
    "student_name": "Alice Johnson",
    "outstanding_fees": 150.00
  }
]
