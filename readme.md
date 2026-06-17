## Sidebar menu
Simple and fast multi-level sidebar menu built on Bootstrap 5.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/compostrap/sidebar-menu/blob/master/license)
[![npm version](https://badge.fury.io/js/sidebar-menu-compostrap.svg)](https://badge.fury.io/js/sidebar-menu-compostrap)
[![Build status](https://github.com/compostrap/sidebar-menu/actions/workflows/build.yml/badge.svg)](https://github.com/compostrap/sidebar-menu/actions/workflows/build.yml)

## Installation
```
npm install sidebar-menu-compostrap
```

## Usage
Import the styles and initialize the menu in your JavaScript entry point:

```javascript
import 'sidebar-menu-compostrap/sidebar-menu.css';
import { SidebarMenuApp } from 'sidebar-menu-compostrap';

SidebarMenuApp.init();
```

The demo uses `theme-switcher-compostrap` for switching Bootstrap themes:

```javascript
import 'theme-switcher-compostrap/theme-switcher.css';
import ThemeSwitcher from 'theme-switcher-compostrap';

new ThemeSwitcher({
	lightIcon: 'fa-solid fa-sun',
	darkIcon: 'fa-solid fa-moon',
}).initialize();
```

## Built on
- [Bootstrap 5](https://getbootstrap.com)
- [Font Awesome 7](https://fontawesome.com)
- [Perfect scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)
- [Nanobar](https://github.com/jacoborus/nanobar)
- [Theme switcher](https://github.com/compostrap/theme-switcher)

## Demo
- [Live demo](https://compostrap.github.io/sidebar-menu)

## Introduction
Simple and fast multi-level sidebar menu built on Bootstrap 5.
So you should be aware of how Bootstrap itself is used. The advantage is also knowledge of sass, npm.

**The sidebar menu is built on the sidebar skeleton. I recommend you [look at it](https://github.com/compostrap/sidebar-skeleton).**

## Important classes in the menu
See the menu in the template.

| Description                     | Class        |
|---------------------------------|--------------|
| Marks the active item           | link-current |
| Icon animation                  | bell         |
| Marks the drop-down menu icon   | link-arrow   |
| Marks the hidden drop-down menu | list-hidden  |

## Themes
The sidebar menu follows Bootstrap's global **Light** and **Dark** themes through `data-bs-theme`.

```html
<html lang="en" data-bs-theme="light">
```

The menu adapts links, icons, rotating arrows, hidden submenu backgrounds, and scrollbar colors from that single Bootstrap theme source.
Use `theme-switcher-compostrap` when you want a ready-made Bootstrap theme switcher.

## Customization
If you need to further customize the visual appearance (e.g., custom background colors for menu items, specific icon colors, or unique border radius), we recommend using the **[sidebar-menu-custom](https://github.com/compostrap/sidebar-menu-custom)** package.

The custom package is designed for easy modification of:
- **Backgrounds:** Subtle tints for first-level menu items.
- **Icons:** Custom coloring for active or hovered states.
- **Layout:** Precise alignment of menu elements (like rotating arrows).
- **Variables:** Global CSS variables for consistent styling (e.g., `--sm-modern-border-radius`).
