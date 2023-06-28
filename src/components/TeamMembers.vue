<template>

    <section class="d-flex justify-content-center">
        <div v-for="obj in statements" class="my_infos-show">
            <div v-if="obj.active" class="d-flex flex-column align-items-center my_infos-container">
                <div class="my_img-container">
                    <img :src="obj.src" :alt="obj.sign">
                </div>
                <p class="my_parag m-0">
                    {{ obj.parag }}
                </p>
                <p class="my_sign m-0">
                    {{ obj.sign }}
                </p>
                <div class="d-flex my_check-page">
                    <div class="my_circle" :class="{'my_fill-bg' : statements[0].active}" @click="changePage(0)">
    
                    </div>
                    <div class="my_circle" :class="{'my_fill-bg' : statements[1].active}" @click="changePage(1)">
    
                    </div>
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
                statements: [
                    {
                        src: "../../src/assets/man_testimonial.png",
                        parag: "Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum. ",
                        sign: "Darío Pineda, Theme Fusion",
                        active: true
                    },
                    {
                        src: "../../src/assets/woman_testimonial.png",
                        parag: "Curabitur non tristique tortor. Vestibulum aliquet suscipit ipsum in volutpat. Donec vel lacinia sem, vitae semper nulla. In hac habitasse platea dictumst. Mauris consectetur est et nibh sadip hendrerit bibendum. ",
                        sign: "Lisa Smith, Theme Fusion",
                        active: false
                    },
                ]
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
            changePage (activeIndex) {
                this.statements.forEach ((obj) => {
                    obj.active = false
                })
                this.statements[activeIndex].active = true
            }
        }
    }
</script>

<style lang="scss" scoped>

    section {
        background-image: url(../../src/assets/testimonials_home_1_bg.jpg);
        background-position: center;
        background-size: cover;
        padding: 8rem 0;
    }

    .my_infos-show {
        margin: auto 0;
    }

    .my_infos-container {
        color: white;
        gap: 2rem;
        padding: 0 28rem;
        text-align: center;
    }

    .my_check-page {
        gap: .3rem;
    }

    .my_circle {
        height: 15px;
        width: 15px;
        border: 2px solid white;
        border-radius: 50%;
    }

    .my_fill-bg {
        background-color: white;
    }

</style>