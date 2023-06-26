<template>

    <div class="d-flex carousel" @mouseenter="stopAutoPlay" @mouseleave="autoPlay">
        <div class="d-flex img-container">
            <img :src="imagesList[activeIndex].src" class="my_image" alt="immagini carosello">
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center my_over-the-img">
            <button type="button" class="btn btn-outline-dark my_button my_button-previous" @click="backButton">
                <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button type="button" class="btn btn-outline-dark my_button my_button-next" @click="nextButton">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
            <h3 class="my_title text-capitalize">
                {{ imagesList[activeIndex].title }}
            </h3>
            <h5 class="my_paragraph text-uppercase">
                {{ imagesList[activeIndex].paragraph }}
            </h5>
            <div class="d-flex py-3 my_carousel-buttons-container">
                <button v-if="imagesList[activeIndex].button1 !== ''" class="my_carousel-button text-uppercase">
                    {{ imagesList[activeIndex].button1 }}
                </button>
                <button v-if="imagesList[activeIndex].button2 !== ''" class="my_carousel-button text-uppercase">
                    {{ imagesList[activeIndex].button2 }}
                </button>
            </div>
        </div>
    </div>

</template>

<script>

    export default {
        components: {

        },

        data() {
            return {
                imagesList: [
                    {
                        src: '../../src/assets/home1_slide_one_bg.jpg',
                        title: 'avada classic shop',
                        paragraph: 'show your products with style',
                        button1: 'get avada now!',
                        button2: ''
                    },
                    {
                        src: '../../src/assets/home1_slide_2_bg.jpg',
                        title: 'online store',
                        paragraph: 'sell your products with style',
                        button1: 'men',
                        button2: 'women'
                    },
                    {
                        src: '../../src/assets/home1_slide_three_bg_2.jpg',
                        title: 'brand new arrivals',
                        paragraph: 'new collection from new york',
                        button1: 'view all',
                        button2: 'lookbook'
                    },
                ],

                activeIndex: 0,

                autoplay: ""
            }
        },

        created() {
            // this.autoplay = setInterval (this.nextButton, 3000)
        },

        mounted() {
            this.autoplay = setInterval (this.nextButton, 3000)
        },

        props: {

        },

        computed: {
            
        },

        methods: {
            backButton () {
                if (this.activeIndex === 0) {
                    this.activeIndex = this.imagesList.length - 1
                } else {
                    this.activeIndex--
                }
            },

            nextButton () {
                if (this.activeIndex === this.imagesList.length - 1) {
                    this.activeIndex = 0
                } else {
                    this.activeIndex++
                }
            },

            autoPlay () {
                this.autoplay = setInterval (this.nextButton, 3000)
            },

            stopAutoPlay () {
                clearInterval (this.autoplay)
            }
        },
    }
</script>

<style lang="scss" scoped>

    .carousel {
        height: 44rem;
        position: relative;
    }

    .img-container {
        width: 100%;
        height: 90%;
        border-radius: 10px;
    }

    .my_image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }

    .my_over-the-img {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .my_button {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        border: none;
    }

    .my_button-previous {
        left: 3px;
    }

    .my_button-next {
        right: 3px;
    }

    .my_title,
    .my_paragraph,
    .my_carousel-button {
        color: white;
    }

    .my_title {
        font-size: 5rem;
        font-weight: 700;
    }

    .my_paragraph {
        font-weight: 700;
        font-size: 1.6rem;
    }

    .my_carousel-buttons-container {
        gap: 1.2rem;
    }

    .my_carousel-button {
        background-color: rgba(255, 255, 255, 0.15);
        border: 2px solid white;
        padding: 1rem 2.2rem;
        border-radius: 24px;
        font-weight: 700;
        transition: all 0.3s;

        &:hover {
            background-color: transparent;
        }
    }
</style>