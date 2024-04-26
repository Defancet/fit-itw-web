# ITW - JavaScript

## Author

- **Name:** Maksim Kalutski
- **Login:** xkalut00

## Overview

This project is designed to enhance a web navigation interface using JavaScript and jQuery, making it responsive and
user-friendly across various device resolutions. The interface includes a navigation bar that adapts its presentation
style based on the screen size, ranging from hamburger menus for extra small devices to full descriptive menus for
larger screens.

## Task Description

1. **Responsive Navigation:**
    - Extra small (xs): Displays a hamburger menu for screens <576 px.
    - Small (sm): Suitable for mobile phones (≥576px).
    - Medium (md): For tablets (≥768px), icons display without description, revealing descriptions on hover.
    - Large (lg) and Extra large (xl): For notebooks (≥992px) and desktops (≥1200px), show a standard menu with
      descriptions.

2. **Icons:**
    - Utilize Font Awesome to select appropriate free icons for the menu,
      including `home`, `info-circle`, `tv`, `grin-beam-sweat`, `hammer`, `envelope`, `code-branch`, and `bars`.

3. **Hamburger Menu:**
    - Visible at extra small resolutions, providing a button to display a slide-out menu.

4. **Sticky Menu:**
    - The menu remains fixed at the top of the page while scrolling.

5. **Dynamic Title for Icons:**
    - When navigation items lack a visible description (on small and medium devices), a dynamic title with the same
      content as the standard description is displayed.

6. **Animated Scrolling:**
    - Clicking a navigation item triggers smooth scrolling to its anchor point over 1000 ms, considering the position of
      the sticky menu to prevent abrupt page movements.
