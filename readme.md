<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/50230834?s=400&u=3551f498f489486fb0ee563171d5fb2d43892a17&v=4" width="100" alt="logo">
</p>

<h3 align="center">Compostrap</h3>
<p align="center">Simple and fast components build on Bootstrap 4</p>

## Sidebar menu
Simple and fast multi-level sidebar menu.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/compostrap/sidebar-menu/master/license.md)
[![npm version](https://badge.fury.io/js/sidebar-menu-compostrap.svg)](https://badge.fury.io/js/sidebar-menu-compostrap)
[![Build Status](https://travis-ci.com/compostrap/sidebar-menu.svg?branch=master)](https://travis-ci.com/compostrap/sidebar-menu)
[![CodeFactor](https://www.codefactor.io/repository/github/compostrap/sidebar-menu/badge)](https://www.codefactor.io/repository/github/compostrap/sidebar-menu)

## Installation
```
npm install --save sidebar-menu-compostrap
```

## Built on
- [Bootstrap 4](https://getbootstrap.com)
- [jQuery](https://jquery.com)
- [Font Awesome 5](https://fontawesome.com)
- [Perfect scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)
- [Open Sans @font-face kit](https://github.com/FontFaceKit/open-sans)
- [Nanobar](https://github.com/jacoborus/nanobar)

## Demo
- [Dark](https://compostrap.github.io/sidebar.dark)
- [Dark gradient](https://compostrap.github.io/sidebar.dark.gradient)
- [White](https://compostrap.github.io/sidebar.white)
- [White gradient](https://compostrap.github.io/sidebar.white.gradient)

## Introduction
Simple and fast multi-level sidebar menu on Bootstrap. So you should be aware of how Bootstrap itself is used. The advantage is also knowledge of sass, npm, grunt.

**The sidebar menu is built on the sidebar skeleton. I recommend you [look at it](https://github.com/compostrap/sidebar-skeleton).**

## Important classes in the menu
See the menu in the template.

| Description                     | Class          |
| ------------------------------- | ---------------|
| Marks the active item           | `link-current` |
| Marks the drop-down menu icon   | `link-arrow`   |
| Marks the hidden drop-down menu | `list-hidden`  |

## Sidebar colors
Colors are the same as bootstrap. Add more colors in [colors.scss](https://github.com/compostrap/sidebar-menu/blob/master/scss/themes/_colors.scss)

| Color                                                              | Sidebar             | List             | List icons         | Scrollbar             |
| ------------------------------------------------------------------ | ------------------- | ---------------- | ------------------ | --------------------- |
| ![#ffffff](https://placehold.it/15/ffffff/000000?text=+) `#ffffff` | `sidebar-bg-white`  | `list-bg-white`  | -                  | `scrollbar-bg-white`  |
| ![#f8f9fa](https://placehold.it/15/f8f9fa/000000?text=+) `#f8f9fa` | `sidebar-bg-light`  | `list-bg-light`  | -                  | `scrollbar-bg-light`  |
| ![#212529](https://placehold.it/15/212529/000000?text=+) `#212529` | `sidebar-bg-dark`   | `list-bg-dark`   | -                  | `scrollbar-bg-dark`   |
| ![#007bff](https://placehold.it/15/007bff/000000?text=+) `#007bff` | `sidebar-bg-blue`   | `list-bg-blue`   | `list-icon-blue`   | `scrollbar-bg-blue`   |
| ![#6f42c1](https://placehold.it/15/6f42c1/000000?text=+) `#6f42c1` | `sidebar-bg-purple` | `list-bg-purple` | `list-icon-purple` | `scrollbar-bg-purple` |
| ![#e83e8c](https://placehold.it/15/e83e8c/000000?text=+) `#e83e8c` | `sidebar-bg-pink`   | `list-bg-pink`   | `list-icon-pink`   | `scrollbar-bg-pink`   |
| ![#dc3545](https://placehold.it/15/dc3545/000000?text=+) `#dc3545` | `sidebar-bg-red`    | `list-bg-red`    | `list-icon-red`    | `scrollbar-bg-red`    |
| ![#fd7e14](https://placehold.it/15/fd7e14/000000?text=+) `#fd7e14` | `sidebar-bg-orange` | `list-bg-orange` | `list-icon-orange` | `scrollbar-bg-orange` |
| ![#28a745](https://placehold.it/15/28a745/000000?text=+) `#28a745` | `sidebar-bg-green`  | `list-bg-green`  | `list-icon-green`  | `scrollbar-bg-green`  |
