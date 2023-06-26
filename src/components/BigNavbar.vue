<template>

    <nav class="py-5">
        <div class="container d-flex justify-content-between align-items-center">
            <div class="my_logo-container">
                <img src="../assets/classic_shop_logo2x.png" alt="brand logo">
            </div>
            <div class="d-flex my_ul-button-container">
                <ul class="d-flex list-unstyled align-items-center m-0">
                    <li v-for="link in links">
                        <a :href="link.href" class="my_ul-links">
                            {{ link.text }}
                        </a>
                    </li>
                </ul>
                <button class="my_button">
                    shop now!
                </button>
            </div>
            <div class="d-flex my_icons-container">
                <a href="#">
                    <i class="fa-regular fa-user"></i>
                </a>
                <a href="#">
                    <i class="fa-solid fa-bag-shopping"></i>
                </a>
            </div>
        </div>
    </nav>

</template>

<script>

    export default {
        components: {

        },

        data() {
            return {
                links: [
                    {
                        text: "Home",
                        href: "#"
                    },
                    {
                        text: "Shop",
                        href: "#"
                    },
                    {
                        text: "Products",
                        href: "#"
                    },
                    {
                        text: "Categories",
                        href: "#"
                    },
                    {
                        text: "News",
                        href: "#"
                    },
                    {
                        text: "Elements",
                        href: "#"
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

    .my_logo-container {
        height: 3rem;
        width: fit-content;

        img {
            height: 100%;
            object-fit: contain;
            object-position: center;
        }
    }

    .my_ul-button-container {
        gap: 2rem;
    }

    ul {
        gap: 1.8rem;
    }

    .my_ul-links {
        text-decoration: none;
        color: black;
        font-size: .85rem;
        font-weight: 300;

        &:hover {
            color: rgb(128, 164, 255);
        }
    }

    .my_button {
        border: none;
        text-transform: uppercase;
        font-size: .85rem;
        font-weight: 700;
        color: white;
        padding: .5rem 1rem;
        border-radius: 30px;
        background-color: #427ed1;

        &:hover {
            background-color: #1359bb;
        }
    }

    .my_icons-container {
        gap: 1.5rem;
        
        a {
            font-size: 1.3rem;
            color: black;
        }
    }
</style>