-- CREATED SCHEMA & TABLES USING MODEL WIZARD
CREATE INDEX nameIndex ON student (name);
ALTER TABLE class ADD status ENUM('not-started', 'ongoing', 'finished') NOT NULL;
ALTER TABLE class ALTER COLUMN status SET DEFAULT 'not-started';