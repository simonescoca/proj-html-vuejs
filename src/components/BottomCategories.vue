<template>

    <section>
        <div class="my_hr"></div>
        <div class="container d-flex justify-content-between">
            <div v-for="categ in categories" class="d-flex flex-column my_single-categ">
                <h6>
                    {{ categ[0].categ }}
                </h6>
                <div v-for="singleObj in categ" class="d-flex justify-content-between my_single-categ-obj">
                    <div class="d-flex flex-column justify-content-between my_infos">
                        <p class="m-0 my_title">
                            {{ singleObj.title }}
                        </p>
                        <div v-if="singleObj.stars" class="d-flex my_stars">
                            <i v-for="i in singleObj.stars" class="fa-solid fa-star"></i>
                        </div>
                        <div class="my_price-container">
                            <p class="m-0 my_fullPrice">
                                {{ singleObj.fullPrice }}
                            </p>
                            <p class="m-0 my_price">
                                {{ singleObj.price }}
                            </p>
                        </div>
                        <p class="m-0 my_by">
                            {{ singleObj.by }}
                        </p>
                    </div>
                    <div class="my_img-container">
                        <img :src="singleObj.img" :alt="singleObj.title">
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
                categories: [
                    [
                        {
                            categ: "F E A T U R E D",
                            title: "Black Jacket",
                            stars: "",
                            fullPrice: "",
                            price: "125$",
                            by: "",
                            img: "../../src/assets/black_leather_jacket.jpg"
                        },
                        {
                            title: "Black Leather Jacket",
                            stars: 5,
                            fullPrice: "235$",
                            price: "200$",
                            by: "",
                            img: "../../src/assets/black_elegant_leather_jacket.jpg"
                        },
                        {
                            title: "Hipster Black Top",
                            stars: "",
                            fullPrice: "",
                            price: "57$",
                            by: "",
                            img: "../../src/assets/hipster_black_top.jpg"
                        }
                    ],
                    [
                        {
                            categ: "O N - S A L E",
                            title: "Black Leather Jacket",
                            stars: 5,
                            fullPrice: "235$",
                            price: "200$",
                            by: "",
                            img: "../../src/assets/black_elegant_leather_jacket.jpg"
                        },
                        {
                            title: "Blue Leather Jacket",
                            stars: "",
                            fullPrice: "80$",
                            price: "60$",
                            by: "",
                            img: "../../src/assets/blue_leather_jacket.jpg"
                        },
                        {
                            title: "Casual Colorful T-shirts",
                            stars: "",
                            fullPrice: "36$",
                            price: "24$",
                            by: "",
                            img: "https://avada.website/classic-shop/wp-content/uploads/sites/48/2015/10/casual_colorful_t-shirts.jpg"
                        }
                    ],
                    [
                        {
                            categ: "T O P - R A T E D",
                            title: "Leather Gloves",
                            stars: 5,
                            fullPrice: "",
                            price: "45$",
                            by: "",
                            img: "../../src/assets/leather_gloves.jpg"
                        },
                        {
                            title: "Black Leather Jacket",
                            stars: 5,
                            fullPrice: "235$",
                            price: "200$",
                            by: "",
                            img: "../../src/assets/black_elegant_leather_jacket.jpg"
                        },
                        {
                            title: "Spring Printed Dress",
                            stars: 5,
                            fullPrice: "",
                            price: "47$",
                            by: "",
                            img: "../../src/assets/spring_printed_dress.jpg"
                        }
                    ],
                    [
                        {
                            categ: "L A T E S T - R E V I E W S",
                            title: "Black Leather Jacket",
                            stars: 5,
                            fullPrice: "",
                            price: "",
                            by: "by admin",
                            img: "../../src/assets/black_elegant_leather_jacket.jpg"
                        },
                        {
                            title: "Leather Gloves",
                            stars: 5,
                            fullPrice: "",
                            price: "",
                            by: "by Beardman",
                            img: "../../src/assets/leather_gloves.jpg"
                        },
                        {
                            title: "Spring Printed Dress",
                            stars: 5,
                            fullPrice: "",
                            price: "",
                            by: "by admin",
                            img: "../../src/assets/spring_printed_dress.jpg"
                        }
                    ]
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
            
        },
    }
</script>

<style lang="scss" scoped>

    section {
        margin-bottom: 5rem;
    }

    .my_hr {
        background-color: #eaeaea;
        width: 96%;
        height: 2px;
        margin: 0 auto;
        margin-bottom: 4rem;
    }

    .my_single-categ {
        gap: 3rem;

        h6 {
            font-weight: 400;
        }
    }

    .my_single-categ-obj {
        padding-bottom: 1rem;
        border-bottom: 1px solid #eaeaea;
    }

    .my_img-container {
        height: 7rem;
        width: 4rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: top;
            cursor: pointer;
        }
    }

    .my_fullPrice {
        text-decoration: line-through;
        font-weight: 300;
    }

    .my_price {
        font-weight: 500;
    }

    .fa-star {
        color: #427ed1;
    }

</style>