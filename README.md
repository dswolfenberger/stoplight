# Interactive Intersection
## Current state:
All cars wired, white car and police car fire after either is clicked, ignoring intersection status. Lights are not wired up or tied to any of the events. 9/17/26
<img width="1278" height="1276" alt="2026-09-17 17 54 27" src="https://github.com/user-attachments/assets/3448794f-9e56-42a5-b9a6-f45f470618d5" />

## What is it?

A small front-end project that simulates an interactive intersection with four vehicles that move based on user interaction.

Each vehicle responds to user clicks, while JavaScript controls movement, timing, intersection state, and sequencing.

## Features

- Clickable vehicles
- Animated vehicle movement using CSS transitions
- Traffic light state changes
- Intersection locking to prevent conflicting vehicle movement
- Delayed vehicle responses when another sequence is already running
- Separate horizontal and vertical road behavior
- JavaScript-controlled sequencing and reset timing

## Built With

- HTML
- CSS
- JavaScript

## How It Works

Each vehicle has a starting position defined in CSS.

JavaScript event listeners respond when a vehicle is clicked by adding or removing CSS classes. Those classes change the vehicle's position, while CSS transitions handle the visible movement.

The intersection uses an `isIntersectionBusy` state to prevent conflicting vehicle actions.

Whether a vehicle is allowed to move depends on:

1. The current traffic light state.
2. Whether another vehicle sequence is already running on the same road plane, either `horzroad` or `vertroad`.

### Example

If the white car is clicked while its traffic light is red, the click is ignored and the vehicle remains stopped.

If the police car is clicked while its traffic light is green and its road is available, its movement sequence begins. The vehicle moves according to its CSS transition and resets based on the timing defined in JavaScript.

This prevents multiple vehicles from incorrectly entering the intersection at the same time while still allowing independent behavior between the horizontal and vertical roads.

## Project Structure

```text
project/
├── index.html
├── styles.css
├── script.js
└── images/
    ├── car1.png
    ├── car2.png
    ├── car3.png
    └── car4.png
