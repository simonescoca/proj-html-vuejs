<template>

    <section>
        <div class="container">
            <h6 class="my_sect-title">
                B R A N D - L O G O S
            </h6>
            <div class="d-flex align-items-center justify-content-between my_logos-container">
                <div v-for="logo in logos" class="my_single-logo-container" :class="{'d-none': !logo.active}">
                    <img :src="logo.img" :alt="logo.brand">
                </div>
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
                logos: [
                    {
                        brand: "FOREST 1864",
                        img: "../../src/assets/b_logotype_1.png",
                        active: true
                    },
                    {
                        brand: "BADGE RETRO & STYLE",
                        img: "../../src/assets/b_logotype_2.png",
                        active: true
                    },
                    {
                        brand: "BEARD FASHION",
                        img: "../../src/assets/b_logotype_3.png",
                        active: true
                    },
                    {
                        brand: "EST. HYPE 2011",
                        img: "../../src/assets/b_logotype_4.png",
                        active: true
                    },
                    {
                        brand: "A&Q BRAND",
                        img: "../../src/assets/b_logotype_5.png",
                        active: true
                    },
                    {
                        brand: "xSINCEx AUTHENTIC 20 USA 13",
                        img: "../../src/assets/b_logotype_6.png",
                        active: false
                    },
                    {
                        brand: "xTHEx YARD",
                        img: "../../src/assets/b_logotype_7.png",
                        active: false
                    }
                ],

                activeIndex: 4,
                offIndex: 6
            }
        },

        created() {
            setInterval (() => {
                if (this.activeIndex === 6) {
                    this.activeIndex = 0
                } else {
                    this.activeIndex++
                }

                if (this.offIndex === 6) {
                    this.offIndex = 0
                } else {
                    this.offIndex++
                }

                this.logos[this.activeIndex].active = true
                this.logos[this.offIndex].active = false
            }, 5000)
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
        background-color: #f6f6f6;
        padding: 5rem 0;
    }

    h6 {
        text-align: center;
        padding-bottom: 3rem;
    }

    .my_single-logo-container {
        height: 5rem;
        width: 10rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

</style>