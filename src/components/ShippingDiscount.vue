<template>

    <section class="d-flex justify-content-center">
        <div class="d-flex my_img-bg my_one">
            <div class="my_infos">
                <h2 class="my_title">
                    70% Off
                </h2>
                <p class="my_paragraph m-0">
                    Vivamus tempor leo lacus, feugiat ut magna aliquam erat.
                </p>
                <button class="my_button">
                    VIEW MORE
                </button>
            </div>
        </div>
        <div class="d-flex my_img-bg my_two">
            <div class="my_infos">
                <h2 class="my_title">
                    Free Shipping
                </h2>
                <p class="my_paragraph m-0">
                    Vivamus tempor leo lacus, feugiat ut magna aliquam erat.
                </p>
                <button class="my_button">
                    VIEW MORE
                </button>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        components: {

        },

        data() {
            return {
                
            }
        },

        created() {
            
        },

        mounted() {
            
        },

        props: {

        },

        computed: {
            
        },

        methods: {
            
        },
    }
</script>

<style lang="scss" scoped>

    section {
        background-image: url(../../src/assets/bkgd_confetti-compressor.jpg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 6rem 0;
        gap: 3rem;
        margin-bottom: 9rem;
    }

    .my_img-bg {
        width: 30%;
        height: 23rem;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 0 4rem;
    }

    .my_one {
        background-image: url(../../src/assets/promo_box_1_bg.jpg);
    }

    .my_two {
        background-image: url(../../src/assets/promo_box_2_bg.jpg);
    }

    .my_infos {
        margin: auto 0;
    }

    .my_title {
        color: white;
        font-size: 2.6rem;
        font-weight: 700;
    }

    .my_paragraph {
        color: white;
        font-size: 1rem;
        font-weight: 400;
    }

    .my_button {
        width: fit-content;
        background-color: rgba(255, 255, 255, 0.15);
        border: 2px solid white;
        padding: .7rem 1.9rem;
        border-radius: 24px;
        font-weight: 700;
        font-size: .85rem;
        transition: all 0.3s;
        color: white;
        margin-top: 1.5rem;
    
        &:hover {
            background-color: transparent;
        }
    }

</style>