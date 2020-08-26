-- DATA MODEL
CREATE DATABASE MealReservation;
CREATE TABLE Reservation(
    id INT,
    number_of_guests INT,
    meal_id INT,
    created_date DATE,
    contact_phonenumber VARCHAR(255),
    contact_name VARCHAR(255),
    contact_email VARCHAR(255)
);
CREATE TABLE Meal(
  id INT,
  title VARCHAR(255),
  description TEXT,
  location VARCHAR(255),
  `when` DATETIME,
  max_reservations INT,
  price DECIMAL,
  created_date DATE
);
CREATE TABLE Review(
  id INT,
  title VARCHAR(255),
  description TEXT,
  meal_id INT,
  stars INT,
  created_date DATE
);
ALTER TABLE Meal ADD PRIMARY KEY(id);
ALTER TABLE Reservation ADD FOREIGN KEY (meal_id) REFERENCES Meal (id);
ALTER TABLE Review ADD FOREIGN KEY (meal_id) REFERENCES Meal (id);

-- MEAL
-- Get all meals
SELECT * FROM meal;
-- Add a new meal
INSERT INTO meal VALUES(1, 'pasta vegetarian', 'with tomato and basilikum sauce', 'Italy', now(), 5, 175.00, '2020-08-11');
INSERT INTO meal VALUES(2, 'pasta with chicken', 'with tomato and barbecue sauce', 'Spain', now(), 10, 100.00, '2020-08-08');
INSERT INTO meal VALUES(3, 'lasagne vegetarian', 'with mushroom sauce', 'Italy', now(), 7, 90.00, '2020-08-05');
INSERT INTO meal VALUES(4, 'pizza barbecue', 'thin crust', 'Denmark', now(), 15, 110.00, '2020-08-01');
INSERT INTO meal VALUES(5, 'lasagne', 'with tomato sauce', 'Italy', now(), 5, 80.00, '2020-07-31');
INSERT INTO meal VALUES(6, 'pasta vegetarian', 'with tomato and basilikum sauce', 'Italy', now(), 5, 175.00, '2020-08-11');
INSERT INTO meal VALUES(7, 'pasta with chicken', 'with tomato and barbecue sauce', 'Spain', now(), 10, 100.00, '2020-08-08');
INSERT INTO meal VALUES(8, 'lasagne vegetarian', 'with mushroom sauce', 'Italy', now(), 7, 90.00, '2020-08-05');
INSERT INTO meal VALUES(9, 'pizza barbecue', 'thin crust', 'Denmark', now(), 15, 110.00, '2020-08-01');
INSERT INTO meal VALUES(10, 'lasagne', 'with tomato sauce', 'Italy', now(), 5, 80.00, '2020-07-31');

-- Get a meal with any id, fx 1
SELECT * FROM meal WHERE id=1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE meal SET title='lasagne', price=125.75 WHERE id=1;
-- Delete a meal with any id, fx 1
DELETE FROM meal WHERE id=1;

-- RESERVATION
-- Get all reservations
SELECT * FROM reservation;
-- Add a new reservation
INSERT INTO reservation VALUES(1,5,1,current_date(),22223333,'Jaqueline','jaque_171@hotmail.com');
INSERT INTO reservation VALUES(2,3,1,current_date(),11111111,'Marie','marie_hey@hotmail.com');
INSERT INTO reservation VALUES(3,10,2,current_date(),33344455,'Martin','martin_007@hotmail.com');
INSERT INTO reservation VALUES(4,5,2,current_date(),12312312,'Sonya','sonya_abc@hotmail.com');
INSERT INTO reservation VALUES(5,7,3,current_date(),13131313,'Anna','anna_anna@hotmail.com');
INSERT INTO reservation VALUES(6,5,1,current_date(),22223333,'Jaqueline','jaque_171@hotmail.com');
INSERT INTO reservation VALUES(7,3,1,current_date(),11111111,'Marie','marie_hey@hotmail.com');
INSERT INTO reservation VALUES(8,10,2,current_date(),33344455,'Martin','martin_007@hotmail.com');
INSERT INTO reservation VALUES(9,5,2,current_date(),12312312,'Sonya','sonya_abc@hotmail.com');
INSERT INTO reservation VALUES(10,7,3,current_date(),13131313,'Anna','anna_anna@hotmail.com');

-- Get a reservation with any id, fx 1
SELECT * FROM reservation WHERE id=1;
-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE reservation SET contact_name='Jackie' WHERE id=1;
-- Delete a reservation with any id, fx 1
DELETE FROM reservation WHERE id=1;

-- REVIEWS
-- Get all reviews
SELECT * FROM review;
-- Add a new review
INSERT INTO review VALUES(1, 'pasta-veg-Review', 'Just a opinion', 1, 2, current_date());
INSERT INTO review VALUES(2, 'pasta-veg-Review', 'Just a opinion', 1, 5, current_date());
INSERT INTO review VALUES(3, 'Lasagne-Review', 'Just a opinion', 5, 2, current_date());
INSERT INTO review VALUES(4, 'Lasagne-Review', 'Just a opinion', 5, 4, current_date());
INSERT INTO review VALUES(5, 'Lasagne-Review', 'Just a opinion', 5, 3, current_date());
-- Get a review with any id, fx 1
SELECT * FROM review WHERE id=1;
-- Update a review with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE review SET description='just a personal opinion', stars=3 WHERE id=1;
-- Delete a review with any id, fx 1
DELETE FROM review WHERE id=1;

-- ADDITIONAL QUERIES
-- Get meals that has a price smaller than a specific price fx 90
SELECT * FROM meal WHERE price<90;
-- Get meals that still has available reservations
SELECT 
    meal.title Title,
    meal.max_reservations Maximum_Reservations,
    meal.created_date,
    SUM(reservation.number_of_guests) Number_of_Guests_Reserved
FROM
    meal
        JOIN
    reservation ON (meal.id = reservation.meal_id)
GROUP BY meal.id , meal.created_date
HAVING Number_of_Guests_Reserved < Maximum_Reservations;

-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT * FROM meal WHERE title LIKE '%vegetar%';
-- Get meals that has been created between two dates
SELECT * FROM meal WHERE created_date BETWEEN '2020-08-01' AND current_date();
-- Get only specific number of meals fx return only 5 meals
select * from meal;
SELECT COUNT(id) Number_of_Vegetarian_Meals FROM meal WHERE title LIKE '%vegetar%' || '%Vegetar%';
-- Get the meals that have good reviews
SELECT 
    meal.title Title,
    meal.description Meal_Description,
    ROUND(AVG(review.stars), 2) Average_Number_of_Stars
FROM
    meal
        JOIN
    review ON (meal.id = review.meal_id)
GROUP BY meal.title
ORDER BY Average_Number_of_Stars DESC
LIMIT 5;
-- Get reservations for a specific meal sorted by created_date
SELECT 
    meal.title Title,
    COUNT(reservation.number_of_guests) Number_of_Guests, meal.created_date
FROM
    meal
        JOIN
    reservation ON (meal.id = reservation.meal_id)
    GROUP BY meal.created_date
ORDER BY meal.created_date;
-- Sort all meals by average number of stars in the reviews
SELECT 
    meal.title Title,
    meal.description Description,
    ROUND(AVG(review.stars),2) Average_Number_of_Stars
FROM
    meal
        JOIN
    review
WHERE
    meal.id = review.meal_id
GROUP BY meal.id
ORDER BY Average_Number_of_Stars;