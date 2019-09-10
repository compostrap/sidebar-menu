<p align="center">
  <img src="https://avatars0.githubusercontent.com/u/50230834?s=400&u=3551f498f489486fb0ee563171d5fb2d43892a17&v=4" width="100" alt="logo">
</p>

<h3 align="center">Compostrap</h3>
<p align="center">Simple and fast components build on Bootstrap 4</p>

## Info
Simple and fast multi-level sidebar menu on Bootstrap 4

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

## Documentation

```html

  <!-- flex -->
	<div class="d-flex nav-fixed" id="wrapper">
    
    <!-- sidebar -->
		<nav role="navigation" class="sidebar sidebar-dark rounded-0">
      
      <!-- sidebar menu -->
			<div class="sidebar-menu">
        <!-- sidebar list -->
      </div>
      
		</nav>

		<!-- content -->
		<div class="content">

			<!-- navbar -->
			<nav class="navbar navbar-expand-md fixed-top navbar-light bg-light">

				<!-- navbar title -->
				<a class="navbar-brand" href="#">Sidebar menu</a>

				<!-- navbar icon click for show/hide sidebar menu -->
				<div class="navbar-nav">
					<a class="nav-item nav-link nav-bars" id="sidebar-toggle" href="#">
						<i class="fas fa-bars"><!-- font awesome icon --></i>
					</a>
				</div>

			</nav>

      <!-- main content -->
			<main role="main" class="container-fluid">
        ...
      </main>
      
		</div>
	</div>
```
