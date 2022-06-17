<template>
    <section class="hero is-fullheight">
        <div class="hero-body p-0">
            <div class="container">
                <h1 class="hero-title mb-5">
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
                <div class="buttons is-flex is-justify-content-start">
                    <div class="center">
                        <button class="btn animate flip" v-show="contactButton">
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
    </section>
</template>

<script>
import _ from "lodash"
export default {
    data() {
        return {
            showTitleOne: false,
            showTitleTwo: false,
            showTitleThree: false,
            letterClasses: [
                {
                    class: "letters-first",
                    letter: "letter-first",
                    show: "showTitleOne",
                },
                {
                    class: "letters-second",
                    letter: "letter-second",
                    show: "showTitleTwo",
                },
                {
                    class: "letters-third",
                    letter: "letter-third",
                    show: "showTitleThree",
                },
            ],
            contactButton: false,
        }
    },

    mounted() {
        // Loop over title entries and run animation logic
        this.letterClasses.forEach((element, index) => {
            // First seperate letters and add span class.
            this.wrapText(element)
            // Then initiate animation and show title.
            this.titleAnimation(element.show)
        })
        // After title is complete show button animation
        _.delay(() => {this.contactButton = true}, 6000)
    },

    methods: {
        wrapText(element) {
            if (element.class) {
                // Wrap every individual letter in a span
                let textWrapper = document.querySelector(
                    `.hero-title .${element.class}`
                )
                // Appens letter class to each individual letter
                textWrapper.innerHTML = textWrapper.textContent.replace(
                    /\S/g,
                    `<span class='${element.letter}'>$&</span>`
                )
            }
        },

        // Function to animate title on mount
        titleAnimation(show) {
            // Toggles v-show directive before animation runs
            this.$data[show] = true

            // animejs timeline animation function, does not repeat.
            let title = anime
                .timeline({ loop: false })
                .add({
                    targets: `.hero-title .letter-first`,
                    scale: [0, 1],
                    duration: 1500,
                    elasticity: 800,
                    delay: (el, i) => 45 * (i + 1),
                })
                .add({
                    targets: `.hero-title .letter-second`,
                    scale: [0, 1],
                    duration: 1500,
                    elasticity: 800,
                    delay: (el, i) => 45 * (i + 1),
                })
                .add({
                    targets: `.hero-title .letter-third`,
                    scale: [0, 1],
                    duration: 1500,
                    elasticity: 800,
                    delay: (el, i) => 45 * (i + 1),
                })
        },
    },
}
</script>

<style>
.hero {
    background-color: hsl(0, 0%, 19%);
    color: white;
}

.hero-title {
    position: relative;
    font-weight: 800;
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
    font-family: "Montserrat", sans-serif;
}

.hero-title .letter-second {
    transform-origin: 50% 100%;
    display: inline-block;
    font-family: "Montserrat", sans-serif;
}

.hero-title .letter-third {
    transform-origin: 50% 100%;
    display: inline-block;
    font-family: "Montserrat", sans-serif;
}

.center {
    width: 180px;
    height: 60px;
    position: absolute;
}

.buttons .btn {
    transform-origin: 50% 100%;
    display: inline-block;
    position: relative;
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
    border: 3px solid hsl(0, 0%, 100%);
}

.btn:hover svg {
    stroke-dashoffset: -480;
}

.btn span {
    color: white;
    font-size: 18px;
    font-weight: 300;
}

.btn:hover span {
    color: hsl(0, 0%, 19%);
    font-weight: 500;
}
</style>
