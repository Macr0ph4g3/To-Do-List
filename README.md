# To-Do-List
This is my To-Do-List I'm working on for the Odin Project. This was one I wanted to actually flesh out a little bit more than previous projects.

## Current version is 0.5

## Roadmap to 1.0

1. Add Date-FNS to the existing To Do creator tool so that you can have a date picker.
 - Ensure only dates can be put into that field.

 2. Update the existing To Do creator tool to have a list for priorities instead of being typed. 
    - Priorities will consist of the following:
        - High
        - Medium
        - Low

3. Add functionality to expand a to-do on click
    - Hovering over the to-do will darken it
    - Clicking on it will create a new div that. . .
        -Has the title at the top
        - Description below
        - Project Priority Due Date at the bottom
        - Save / Cancel button
    - Clicking on Save will update the toDo Array index of all it's values and run the cardCreator.js function so everything updates
    - Clicking Cancel creates new pop up saying "Are you sure?"

4. Delete a to-do
    - Add a trashcan icon to the right of to do objects
        - When clicked use same pop up of Are You sure

5. Add Local Storage
