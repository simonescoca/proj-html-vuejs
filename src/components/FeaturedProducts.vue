<template>

    <section>
        <div class="container">

            <div class="d-flex align-items-center justify-content-center my_sect-title-container">
                <div class="my_hr"></div>
                <h2 class="my_title">
                    Featured Products
                </h2>
                <div class="my_hr"></div>
            </div>
            <div class="d-flex my_sect-subtitle-container">
                <h6 class="m-auto my_subtitle">
                    Must have products from our top sellers
                </h6>
            </div>

            <div class="d-flex my_buttons-container">
                <div class="my_button" id="men" @click="activeIndex = 0">
                    Men
                </div>
                <div class="my_button" @click="activeIndex = 1">
                    Women
                </div>
                <div class="my_button" id="accessories" @click="activeIndex = 2">
                    Accessories
                </div>
            </div>

            <div class="d-flex justify-content-between my_cards-container">
                <div v-for="card in shopWindow[activeIndex]" class="card">
                    <img :src="card.img" class="card-img-top" :alt="card.title">
                    <div class="card-body">
                        <h5 class="card-title">
                            {{ card.title }}
                        </h5>
                        <p class="card-text">
                            {{ card.category }}
                        </p>
                        <div class="d-flex my-price-container">
                            <h5 v-if="card.fullPrice" class="my_price my_lined">
                                {{ card.fullPrice }}
                            </h5>
                            <h5 class="my_price">
                                {{ card.price }}
                            </h5>
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
                shopWindow: [
                    [
                        {
                            img: "../../src/assets/black_elegant_leather_jacket.jpg",
                            title: "Black Leather Jacket",
                            category: "Men, Jacket, Jeans",
                            fullPrice: "235$",
                            price: "200$"
                        },
                        {
                            img: "../../src/assets/black_leather_suit.jpg",
                            title: "Black Leather Suit",
                            category: "Jackets, Men",
                            fullPrice: "",
                            price: "176$"
                        },
                        {
                            img: "../../src/assets/blue_jacket_and_white_stripe_tee.jpg",
                            title: "Blue Jacket & White Stripe Tee",
                            category: "Jackets, Men, Suits",
                            fullPrice: "",
                            price: "580$"
                        },
                        {
                            img: "../../src/assets/black_elegant_leather_jacket.jpg",
                            title: "Modern Black Leather Suit",
                            category: "Jackets, Men",
                            fullPrice: "",
                            price: "96$"
                        }
                    ],
                    [
                        {
                            img: "../../src/assets/spring_printed_dress.jpg",
                            title: "Spring Printed Dress",
                            category: "Dress, Women",
                            fullPrice: "",
                            price: "47$"
                        },
                        {
                            img: "../../src/assets/modern_love_tee.jpg",
                            title: "Modern Love Tee",
                            category: "T-Shirts, Women",
                            fullPrice: "",
                            price: "68$"
                        },
                        {
                            img: "../../src/assets/black_leather_jacket.jpg",
                            title: "Black Jacket",
                            category: "Jackets, Women",
                            fullPrice: "",
                            price: "125$"
                        },
                        {
                            img: "../../src/assets/hipster_black_top.jpg",
                            title: "Hipster Black Top",
                            category: "T-Shirts, Women",
                            fullPrice: "",
                            price: "57$"
                        },
                    ],
                    [
                        {
                            img: "../../src/assets/casual_leather_belts.jpg",
                            title: "Casual Leather Belts",
                            category: "Accessories, Men",
                            fullPrice: "",
                            price: "65$"
                        },
                        {
                            img: "../../src/assets/leather_gloves-400x520.jpg",
                            title: "Leather Gloves",
                            category: "Accessories, Gloves, Men, Women",
                            fullPrice: "",
                            price: "45$"
                        },
                        {
                            img: "../../src/assets/modern_leather_boots.jpg",
                            title: "Modern Leather Boots",
                            category: "Accessories, Men, Miscellaneous, Shoes",
                            fullPrice: "50$",
                            price: "30$"
                        },
                        {
                            img: "../../src/assets/brown_dress_shoes.jpg",
                            title: "Brown Dress Shoes",
                            category: "Accessories, Miscellaneous, Shoes, Women",
                            fullPrice: "46$",
                            price: "36$"
                        },
                    ]
                ],

                activeIndex: 0
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

    .my_buttons-container {
        width: fit-content;
        border: 1px solid #eaeaea;
        margin: 0 auto 2rem ;
    }

    .my_button {
        cursor: pointer;
        padding: 0.6rem 3.8rem;
        background-color: #f6f6f6;
        transition: all 0.3s;
        font-weight: 700;

        &:hover {
            background-color: transparent;
        }
    }

    #men {
        border-right: 1px solid #eaeaea;
    }

    #accessories {
        border-left: 1px solid #eaeaea
    }

    .card {
        width: 18rem;
        --bs-card-border-width: 0;
    }

    .my-price-container {
        gap: .8rem;
    }

    .my_price {
        font-size: 1rem;
        font-weight: 500;
        color: #427ed1;
    }

    .my_lined {
        text-decoration: line-through;
        font-weight: 300;
    }
</style>