# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js or date](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

- The URL of the deployed application.

- The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

---

© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
//present past and future color coded
time content color are must change
track time military time bc its repeatbable
local storage > blue buttons
treat each block individually
compartive values with current time
focus on one block then iterate
string blocks
create key to object
when render check console log

Tiffany Lombardi, Michael Habert, James Kim, Nathan Paecchi and Cammeryne Sullivan collaborated

we first added blocks to the HTML with the help of Michael

we then created dependencies and variables which we then used in functions

to get the cuurent date we found a my date function that is vanilla javascript

time object was created in military time because its repeatable

Worked with Justin who provided neccesary code that would color assign the text blocks

store user input
