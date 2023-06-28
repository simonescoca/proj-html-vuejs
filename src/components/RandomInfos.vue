<template>

    <section>
        <div class="d-flex justify-content-between container">
            <div class="my_generalities">
                <div class="my_logo-container">
                    <img src="../../src/assets/classic_shop_logo_footer.png" class="my_logo" alt="brand logo">
                </div>
                <div class="d-flex flex-column my_text-generals">
                    <span>
                        12345 North Main Street,
                    </span>

                    <span>
                        New York, NY 555555
                    </span>

                    <span>
                        Phone: 1.800.555.6789
                    </span>

                    <span>
                        Email: info@company.com
                    </span>

                    <span>
                        Web: Theme-fusion.com
                    </span>
                </div>
                <div class="d-flex justify-content-between align-items-center my_socials">
                    <div class="my_icon-container">
                        <i class="fa-brands fa-facebook-f"></i>
                    </div>
                    <div class="my_icon-container">
                        <i class="fa-brands fa-twitter"></i>
                    </div>
                    <div class="my_icon-container">
                        <i class="fa-brands fa-instagram"></i>
                    </div>
                    <div class="my_icon-container">
                        <i class="fa-brands fa-youtube"></i>
                    </div>
                </div>
            </div>
            <div class="my_rated-products">
                <h6>
                    TOP RATED PRODUCTS
                </h6>
                <div class="d-flex flex-column my_products-container">
                    <div v-for="product in products" class="d-flex justify-content-between my_single-product">
                        <div class="my_prod-infos">
                            <div class="my_prod-title">
                                {{ product.title }}
                            </div>
                            <div class="my_prod-stars">
                                <i v-for="i in product.star" class="fa-solid fa-star"></i>
                            </div>
                            <div class="my_prod-full-price">
                                {{ product.fullPrice }}
                            </div>
                            <div class="my_prod-price">
                                {{ product.price }}
                            </div>
                        </div>
                        <div class="my_prod-image">
                            <img :src="product.img" :alt="product.title">
                        </div>
                    </div>
                </div>
            </div>
            <div class="my_recent-posts">
                <h6>
                    RECENT POSTS
                </h6>
            </div>
            <div class="my_tags">
                <h6>
                    TAGS
                </h6>
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
                products: [
                    {
                        title: "Leather Gloves",
                        star: 5,
                        fullPrice: "",
                        price: "45$",
                        img: "../../src/assets/leather_gloves-400x520.jpg"
                    },
                    {
                        title: "Black Leather Jacket",
                        star: 5,
                        fullPrice: "235$",
                        price: "200$",
                        img: "../../src/assets/black_elegant_leather_jacket.jpg"
                    },
                    {
                        title: "Spring Printed Dress",
                        star: 5,
                        fullPrice: "",
                        price: "47$",
                        img: "../../src/assets/spring_printed_dress.jpg"
                    },
                    {
                        title: "Black Rebel Leather ",
                        star: 0,
                        fullPrice: "",
                        price: "87$",
                        img: "../../src/assets/black_leather_jacket-400x520.jpg"
                    }
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
        background-color: #2b2e32;
        padding: 6rem 0;
        color: white;
    }

    .my_logo-container {
        height: 5rem;
        width: 10rem;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .my_single-product {
        gap: 2rem;
    }

    .my_text-generals {
        gap: .4rem;
        font-size: .85rem;
        margin: 1.5rem 0;
    }

    .my_icon-container {
        font-size: 1.2rem;
    }

    h6 {
        font-size: .9rem;
    }

    .my_products-container {
        gap: 2rem;
    }

    .my_prod-image {
        height: 5rem;
        width: 3rem;

        img {
            height: 100%;
            width: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    i {
        color: #427ed1;
    }
</style>