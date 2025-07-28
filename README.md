Dark/Light Mode Clock with Icon Toggle
Overview
This project is a stylish, enlarged analog clock with syntax-highlighted code sample, featuring a dark/light mode toggle switch. The toggle switch includes a moving moon/sun icon that changes color and position based on the theme.

Dark mode: Dark blue background (#2c3e50) with a gray moon icon 🌙 inside the toggle.

Light mode: Light background (#f1f1f1) with a yellow sun icon ☀️ inside the toggle.

The toggle button is positioned in the top-left corner of the page.

The moon/sun icon moves with the knob (toggle circle).

Smooth transitions between themes.

Features
Enlarged analog clock with hour, minute, and second hands.

Center dot on the clock face.

Syntax-highlighted code snippet beside the clock.

Responsive toggle button with moving icon inside.

Smooth animated transitions for color and icon changes.

Demo Screenshots
Dark Mode (Default)

Light Mode (Toggled)

Toggle Button Close-up
Moon icon on the left in dark mode


Sun icon moving with knob in light mode


Installation
Clone this repository:

bash
Copy
Edit
git clone https://github.com/Sadeesa/dark-light-clock-toggle.git
Open index.html in your favorite browser.

Usage
Click the toggle button on the top-left corner to switch between dark and light modes.

Observe the moon/sun icon inside the toggle moving with the knob.

Watch the clock hands move in real time.

File Structure
graphql
Copy
Edit
/
├── index.html        # Main HTML file with embedded CSS and JS
├── images/           # Folder containing screenshots for README
│   ├── dark_mode.png
│   ├── light_mode.png
│   ├── toggle_dark.png
│   └── toggle_light.png
└── README.md         # This file
Technologies Used
HTML5

CSS3 (Flexbox, transitions, pseudo-elements)

JavaScript (for clock animation and toggle functionality)

No external libraries or frameworks

Customization
You can change the toggle colors by editing the CSS .slider background colors.

Adjust clock size or colors by modifying relevant CSS classes.

Add your own syntax code snippet inside the .code block in the HTML.

License
MIT License © 2025 Sadeesa Damruwan

