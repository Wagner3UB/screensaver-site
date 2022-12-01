# screensaver-site

App used to set a "screensaver behavior" to a site.

If the user remains off (no mouse movement, no clicks and no keyboard pressing) after X seconds the popup shows. After that, if the user do some kind of action as click ou key press, the counter resets and the main-content reappears.

How to install:

- Copy the script to your application, you can copy the content and add to your existent script or as a new file.
- Copy the CSS content WITHOUT the reset part to your css file.
- Copy the DIV #id="screensaver" to your main file (or create a new react component with all import/export paths to your main file).
- Change the image logo as you desire.

Changing the offline time limit

- You can set how many minutes for the popup shows up at the script file just changing the number inside the conditional (idleTime >= 5000). Each 1000 -> 1 second to popup.

Example: for 1 minute -> 60000
