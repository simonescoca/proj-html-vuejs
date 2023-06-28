<template>

    <section>
        <div class="container">
            <div class="d-flex align-items-center justify-content-center my_sect-title-container">
                <div class="my_hr"></div>
                <h2 class="my_title">
                    Best Seller
                </h2>
                <div class="my_hr"></div>
            </div>
            <div class="d-flex my_sect-subtitle-container">
                <h6 class="m-auto my_subtitle">
                    Must have products from our top sellers
                </h6>
            </div>
            <div class="d-flex justify-content-between my_cards-container">
                <button class="my_carousel-button my_previous" @click="offIndexUpdate('down')">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <button class="my_carousel-button my_next" @click="offIndexUpdate('up')">
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
                <div v-for="card in cards" class="my_single-card" :class="card.active ? '' : 'd-none'">
                    <div class="my_single-card-container">
                        <div class="my_img-container">
                            <img :src="card.src" :alt="card.title">
                        </div>
                        <div class="my_card-on-hover">
                            <div class="my_infos">
                                <h3 class="my_card-title">
                                    {{ card.title }}
                                </h3>
                                <h6 class="my_card-subtitle">
                                    {{ card.subtitle }}
                                </h6>
                                <div class="my_full-price">
                                    {{ card.fullPrice }}
                                </div>
                                <div class="my_price">
                                    {{ card.price }}
                                </div>
                            </div>
                            <div class="my_buttons">
                                <button class="my_buttons">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        Add to Cart
                                    </div>
                                </button>
                                <button class="my_buttons">
                                    <div class="d-flex align-items-center">
                                        <i class="fa-solid fa-bars"></i>
                                        Details
                                    </div>
                                </button>
                            </div>
                        </div>
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
                cards: [
                    {
                        src: "../../src/assets/spring_printed_dress.jpg",
                        title: "Spring Printed Dress",
                        subtitle: "Women, Dress",
                        fullPrice: "",
                        price: "47$",
                        active: true,
                        index: 0
                    },
                    {
                        src: "../../src/assets/modern_love_tee.jpg",
                        title: "Modern Love Tee",
                        subtitle: "T-Shirts, Women",
                        fullPrice: "",
                        price: "68$",
                        active: true,
                        index: 1
                    },
                    {
                        src: "../../src/assets/black_leather_jacket.jpg",
                        title: "Modern Love Tee",
                        subtitle: "T-Shirts, Women",
                        fullPrice: "",
                        price: "68$",
                        active: true,
                        index: 2
                    },
                    {
                        src: "../../src/assets/black_elegant_leather_jacket.jpg",
                        title: "Black Leather Jacket",
                        subtitle: "Jackets, Jeans, Men",
                        fullPrice: "235$",
                        price: "200$",
                        active: true,
                        index: 3
                    },
                    {
                        src: "../../src/assets/hipster_black_top.jpg",
                        title: "Hipster Black Top",
                        subtitle: "T-Shirts, Women",
                        fullPrice: "",
                        price: "57$",
                        active: true,
                        index: 4
                    },
                    {
                        src: "../../src/assets/black_leather_suit.jpg",
                        title: "Black Leather Suit",
                        subtitle: "Men, Jackets",
                        fullPrice: "",
                        price: "176$",
                        active: false,
                        index: 5
                    }
                ],

                offIndex: 5,
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
            offIndexUpdate (downOrUp) {
                this.cards[this.offIndex].active = true

                if (downOrUp === 'down') {

                    if (this.offIndex === 0) {
                        this.offIndex = 5
                    } else {
                        this.offIndex--
                    }
                } else if (downOrUp === 'up') {

                    if (this.offIndex === 5) {
                        this.offIndex = 0
                    } else {
                        this.offIndex++
                    }
                }
                
                this.cards[this.offIndex].active = false
            }
        },
    }
</script>

<style lang="scss" scoped>
    .my_sect-title-container {
        gap: 1.3rem;
        margin-bottom: 1.5rem;
    }

    .my_hr {
        height: 1px;
        width: 34%;
        background-color: #eaeaea;
    }

    .my_title {
        font-weight: 800;
        font-size: 2.6rem;
        margin-bottom: 0;
    }

    .my_sect-subtitle-container {
        margin-bottom: 5rem;
    }

    .my_subtitle {
        font-weight: 500;
    }

    .my_cards-container {
        width: 100%;
        position: relative;
    }

    .my_carousel-button {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        background-color: transparent;
        border: none;
        padding: 2rem 0.5rem;
        border-radius: 5px;

        &:hover {
            background-color: #f3f3f3;
        }

        &:active {
            color: white;
        }
    }

    .my_previous {
        left: 0;
    }

    .my_next {
        right: 0;
    }

    .my_single-card {
        width: 20%;
    }

    .my_img-container {
        height: 300px;

        img {
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: top;
        }
    }

    .my_card-on-hover {
        display: none;
    }

</style>