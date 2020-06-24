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
[https://compostrap.github.io/sidebar.menu](https://compostrap.github.io/sidebar.menu)

## Introduction
Simple and fast multi-level sidebar menu on Bootstrap. So you should be aware of how Bootstrap itself is used. The advantage is also knowledge of sass, npm, grunt.

**The sidebar menu is built on the sidebar skeleton. I recommend you [look at it](https://github.com/compostrap/sidebar-skeleton).**

## See the html template code
https://raw.githubusercontent.com/compostrap/sidebar-menu/master/demo.html

## Important classes in the menu
See the menu in the template.

| Description                     | Class          |
| ------------------------------- | ---------------|
| Marks the active item           | `link-current` |
| Marks the drop-down menu icon   | `link-arrow`   |
| Marks the hidden drop-down menu | `list-hidden`  |

## Color combination of side panel and menu
Colors are the same as bootstrap. Add more colors in [colors.scss](https://github.com/compostrap/sidebar-menu/blob/master/scss/themes/_colors.scss)

| Sidebar color class | Menu color class | Hidden menu color class | Scrollbar color class  |
| --------------------| -----------------| ----------------------- | ---------------------- |
| `sidebar-bg-white`  | `list-bg-white`  | `list-bg-menu-*`        |  `scrollbar-bg-white`  |
| `sidebar-bg-light`  | `list-bg-light`  | `list-bg-menu-*`        |  `scrollbar-bg-light`  |
| `sidebar-bg-dark`   | `list-bg-dark`   | `list-bg-menu-*`        |  `scrollbar-bg-dark`   |
| `sidebar-bg-blue`   | `list-bg-blue`   | -                       |  `scrollbar-bg-blue`   |
| `sidebar-bg-purple` | `list-bg-purple` | -                       |  `scrollbar-bg-purple` |
| `sidebar-bg-pink`   | `list-bg-pink`   | -                       |  `scrollbar-bg-pink`   |
| `sidebar-bg-red`    | `list-bg-red`    | -                       |  `scrollbar-bg-red`    |
| `sidebar-bg-orange` | `list-bg-orange` | -                       |  `scrollbar-bg-orange` |
| `sidebar-bg-green`  | `list-bg-green`  | -                       |  `scrollbar-bg-green`  |
| `sidebar-bg-teal`   | `list-bg-teal`   | -                       |  `scrollbar-bg-teal`   |
| `sidebar-bg-cyan`   | `list-bg-cyan`   | -                       |  `scrollbar-bg-cyan`   |

