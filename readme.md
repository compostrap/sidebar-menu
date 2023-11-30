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

Version 1x built on Bootstrap 4  
Version 2x built on Bootstrap 5

## Built on
- [Bootstrap](https://getbootstrap.com)
- [Font Awesome 6](https://fontawesome.com)
- [Perfect scrollbar](https://github.com/mdbootstrap/perfect-scrollbar)
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
|---------------------------------|----------------|
| Marks the active item           | `link-current` |
| Icon animation                  | `bell`         |
| Marks the drop-down menu icon   | `link-arrow`   |
| Marks the hidden drop-down menu | `list-hidden`  |

## Sidebar colors
Colors are the same as bootstrap. Add more colors in [colors.scss](https://github.com/compostrap/sidebar-menu/blob/master/scss/themes/_colors.scss)

| Color                                                        | Sidebar             | List             | List icons         | Scrollbar             |
| -------------------------------------------------------------| ------------------- | ---------------- | ------------------ | --------------------- |
| ![#ffffff](https://via.placeholder.com/15/ffffff/ffffff.png) | `sidebar-bg-white`  | `list-bg-white`  | -                  | `scrollbar-bg-white`  |
| ![#f8f9fa](https://via.placeholder.com/15/f8f9fa/f8f9fa.png) | `sidebar-bg-light`  | `list-bg-light`  | -                  | `scrollbar-bg-light`  |
| ![#212529](https://via.placeholder.com/15/212529/212529.png) | `sidebar-bg-dark`   | `list-bg-dark`   | -                  | `scrollbar-bg-dark`   |
| ![#007bff](https://via.placeholder.com/15/007bff/007bff.png) | `sidebar-bg-blue`   | `list-bg-blue`   | `list-icon-blue`   | `scrollbar-bg-blue`   |
| ![#6f42c1](https://via.placeholder.com/15/6f42c1/6f42c1.png) | `sidebar-bg-purple` | `list-bg-purple` | `list-icon-purple` | `scrollbar-bg-purple` |
| ![#e83e8c](https://via.placeholder.com/15/e83e8c/e83e8c.png) | `sidebar-bg-pink`   | `list-bg-pink`   | `list-icon-pink`   | `scrollbar-bg-pink`   |
| ![#dc3545](https://via.placeholder.com/15/dc3545/dc3545.png) | `sidebar-bg-red`    | `list-bg-red`    | `list-icon-red`    | `scrollbar-bg-red`    |
| ![#fd7e14](https://via.placeholder.com/15/fd7e14/fd7e14.png) | `sidebar-bg-orange` | `list-bg-orange` | `list-icon-orange` | `scrollbar-bg-orange` |
| ![#28a745](https://via.placeholder.com/15/28a745/28a745.png) | `sidebar-bg-green`  | `list-bg-green`  | `list-icon-green`  | `scrollbar-bg-green`  |
