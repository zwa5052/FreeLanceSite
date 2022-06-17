<template>
    <nav
        class="navbar is-fixed-top animate flip"
        role="navigation"
        aria-label="main navigation"
        v-show="showNav"
    >
        <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
                <img
                    src="https://bulma.io/images/bulma-logo.png"
                    width="112"
                    height="28"
                />
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
                <router-link class="navbar-item link-hover" to="/"
                    ><span class="nav-link">Home</span>
                </router-link>
                <router-link class="navbar-item link-hover" to="/about">
                    <span class="nav-link">About Me</span>
                </router-link>
                <router-link class="navbar-item link-hover" to="/portfolio">
                    <span class="nav-link">Portfolio</span>
                </router-link>
                <router-link class="navbar-item link-hover" to="/blog">
                    <span class="nav-link">Blog</span>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
import _ from "lodash"
export default {
    data() {
        return {
            showNav: false,
        }
    },

    created() {
        // Shows navbar after 8 seconds (once title animation runs and rest of hero is shown)
        _.delay(() => {
            this.showNav = true
        }, 6000)
    },
}
</script>

<style lang="scss">
.navbar-menu {
    background-color: hsl(0, 0%, 19%);
}

.navbar-item {
    font-weight: 500;
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
    background-color: hsl(160, 91%, 63%);
    transform-origin: 0 bottom 0;
    transform: scaleY(0);
    transition: 0.4s ease-out;
}

.link-hover.navbar-item:hover .nav-link {
    font-weight: 500;
    color: hsl(0, 0%, 0%);
}

.link-hover:hover:before {
    transform: scaleY(1);
}

.nav-link {
    position: relative;
    transition: 0.4s ease-out;
    color: white;
}
</style>
