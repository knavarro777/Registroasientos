# BusBookingExpress

BusBookingExpress is an interactive web application designed for online bus seat reservation and management. It allows registering passengers, assigning seats in real-time, modifying reservations, and deleting occupied seat records through a dynamic interface.

---

## Development Team

Project created by Software Engineering students for the *Fundamentals of Programming* course (first semester project in 2023):

* Johnston Navarro Karol Daniela
* Perez Gonzalez Nereyda Celestina
* Muñoz Rosales Mayte

---

## Features

* Register Reservation: Allows entering the passenger's name and the number of seats to reserve (allowed seat range: 1 to 40). Dynamically changes the background color of reserved seats.
* Built-in Validations:
  * Seat range control (1-40).
  * Duplicate seat prevention within the same reservation.
  * Verification of prior seat availability.
* Modify Reservation: Updates passenger details or adjusts their assigned seats.
* Delete Reservation: Frees occupied seats and reverts them to their default available state.
* Visual Layout/Map: Displays an illustrative bus diagram (photo.png) as a visual reference for seat locations.

---

## Technologies Used

* HTML5: Web structure of the application (proyectoborrador.html).
* CSS3: Responsive styling, visual effects (hover effects, transitions), and column layout via style.css.
* JavaScript (Vanilla JS): Application logic, DOM manipulation, and real-time validations in proyectoborrador.js.
