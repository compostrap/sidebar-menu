<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/50230834?s=400&u=3551f498f489486fb0ee563171d5fb2d43892a17&v=4" width="100" alt="logo">
</p>

<h3 align="center">Compostrap</h3>
<p align="center">Simple and fast components build on Bootstrap 4</p>

## Info
Simple and fast multi-level sidebar menu.

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

## Live preview

- https://compostrap.github.io/sidebar.menu

## Quick start

**Use CSS:**

```html
<!-- external -->
<link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">
<link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">
<link rel="stylesheet" href="node_modules/open-sans-fontface/open-sans.css">
<link rel="stylesheet" href="node_modules/perfect-scrollbar/css/perfect-scrollbar.css">

<!-- sidebar menu -->
<link rel="stylesheet" href="dist/css/sidebar.css">
```

**Use JS:**

```html
<!-- external -->
<script src="node_modules/jquery/dist/jquery.js"></script>
<script src="node_modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
<script src="node_modules/perfect-scrollbar/dist/perfect-scrollbar.js"></script>
<script src="node_modules/nanobar/nanobar.js"></script>

<!-- sidebar menu -->
<script src="dist/js/sidebar.menu.js"></script>

<!-- js component -->
<script>
  $(function() {
  
    <!-- perfect scrollbar -->
    new PerfectScrollbar('.list-scrollbar');
  
    <!-- nanobar -->
    const nanobar = new Nanobar();
    nanobar.go(100);
  });
</script>
```
