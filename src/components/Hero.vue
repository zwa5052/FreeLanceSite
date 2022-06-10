<template>
    <section class="hero is-fullheight">
        <div class="hero-body ml-5">
            <div class="container">
                <h1 class="hero-title">
                    <span class="text-wrapper">
                        <span class="letters-first" v-show="showTitleOne">
                            Hello,
                        </span>
                        <br />
                        <span class="letters-second" v-show="showTitleTwo">
                            I'm Zach,
                        </span>
                        <br />
                        <span class="letters-third" v-show="showTitleThree">
                            Full Stack Developer & Designer
                        </span>
                        <br />
                    </span>
                </h1>
                <div class="buttons is-flex columns mt-5">
                    <div class="column justify-content-end">
                        <div class="center">
                            <button class="btn">
                                <svg
                                    width="180px"
                                    height="60px"
                                    viewBox="0 0 180 60"
                                    class="border"
                                >
                                    <polyline
                                        points="179,1 179,59 1,59 1,1 179,1"
                                        class="bg-line"
                                    />
                                    <polyline
                                        points="179,1 179,59 1,59 1,1 179,1"
                                        class="hl-line"
                                    />
                                </svg>
                                <span>Get In Touch</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import _ from "lodash";
export default {
    data() {
        return {
            showTitleOne: false,
            showTitleTwo: false,
            showTitleThree: false,
        };
    },

    mounted() {
        _.delay(
            this.titleAnimation,
            1000,
            "letters-first",
            "letter-first",
            "showTitleOne"
        );
        _.delay(
            this.titleAnimation,
            2000,
            "letters-second",
            "letter-second",
            "showTitleTwo"
        );
        _.delay(
            this.titleAnimation,
            3000,
            "letters-third",
            "letter-third",
            "showTitleThree"
        );
    },

    methods: {
        titleAnimation(className, letter, show) {
            // Wrap every individual letter in a span
            let textWrapper = document.querySelector(
                `.hero-title .${className}`
            );
            textWrapper.innerHTML = textWrapper.textContent.replace(
                /\S/g,
                `<span class='${letter}'>$&</span>`
            );

            // Toggles v-show directive before animation runs
            this.$data[show] = true;

            // animejs timeline animation function, does not repeat.
            anime.timeline({ loop: false }).add({
                targets: `.hero-title .${letter}`,
                scale: [0, 1],
                duration: 1500,
                elasticity: 800,
                delay: (el, i) => 45 * (i + 1),
            });
        },
    },
};
</script>

<style>
.hero {
    background-color: hsl(0, 0%, 19%);
    color: white;
}

.hero-title {
    position: relative;
    font-weight: 400;
    font-size: 4em;
}

.hero-title .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
    line-height: 1.2em;
}

.hero-title .letter-first {
    transform-origin: 50% 100%;
    display: inline-block;
}

.hero-title .letter-second {
    transform-origin: 50% 100%;
    display: inline-block;
}

.hero-title .letter-third {
    transform-origin: 50% 100%;
    display: inline-block;
}

.center {
    width: 180px;
    height: 60px;
    position: absolute;
}

.btn {
    width: 180px;
    height: 60px;
    cursor: pointer;
    background: hsl(0, 0%, 19%);
    border: 1px solid hsl(160, 91%, 63%);
    outline: none;
    transition: 1s ease-in-out;
    border-radius: 12px;
}

svg {
    position: absolute;
    left: 0;
    top: 0;
    fill: none;
    stroke: #fff;
    stroke-dasharray: 150 480;
    stroke-dashoffset: 150;
    transition: 1s ease-in-out;
    border-radius: 12px;
}

.btn:hover {
    transition: 1s ease-in-out;
    background: hsl(160, 91%, 63%);
    color: hsl(0, 0%, 19%);
}

.btn:hover svg {
    stroke-dashoffset: -480;
}

.btn span {
    color: white;
    font-size: 18px;
    font-weight: 200;
}

.btn:hover span {
    color: hsl(0, 0%, 19%);
}
</style>
