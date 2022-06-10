<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                >
            </a>

            <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbar-links"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item link-hover"><span class="nav-link">Home</span> </a>
                <a class="navbar-item link-hover"> <span class="nav-link">About Me</span> </a>
                <a class="navbar-item link-hover"> <span class="nav-link">Portfolio</span> </a>
                <a class="navbar-item link-hover"> <span class="nav-link">Blog</span> </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
$navbar-item-hover-background-color: hsl(0, 0%, 19%);
.navbar-menu {
    background-color: hsl(0, 0%, 19%);
}

.navbar-item {
     background-color: hsl(0, 0%, 19%);
}

.nabar-brand {
    background-color: hsl(0, 0%, 19%);
}

.link-hover {
	 display: flex;
	 text-decoration: none;
	 position: relative;
	 background-color: hsl(0, 0%, 19%);
	 cursor: pointer;
     color: inherit;
}

 .link-hover:before {
	 position: absolute;
	 left: 0;
	 bottom: 0;
	 content: "";
	 display: block;
	 width: 100%;
	 height: 100%;
	 background-color:  hsl(160, 91%, 63%);;
	 transform-origin: 0 bottom 0;
	 transform: scaleY(0);
	 transition: 0.4s ease-out;

}

.link-hover.navbar-item:hover .nav-link {
	 color: hsl(0, 0%, 0%);
}

 .link-hover:hover:before  {
	 transform: scaleY(1);
}

 .nav-link {
     position: relative;
    transition: .4s ease-out;
    color: white;

 }

 body {
    background-color: hsl(0, 0%, 19%);
}
</style>
