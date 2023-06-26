<template>

    <nav class="navbar">
        <div class="container d-flex justify-content-between align-items-center">
            <ul class="d-flex list-unstyled m-0 my_socials">
                <li v-for="social in socials">
                    <a :href="social.href">
                        <i :class="social.iconClass"></i>
                    </a>
                </li>
            </ul>
            

            <div>
                animation typing
            </div>


            <div class="d-flex" role="search">
                <button class="btn" type="submit">
                    <i class="fa-solid fa-magnifying-glass my_lens"></i>
                </button>
                <input class="form-control" type="search" placeholder="Search for products..." aria-label="Search">
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
                socials: [
                    {
                        name: "facebook",
                        iconClass: "fa-brands fa-facebook-f",
                        href: "#"
                    },
                    {
                        name: "twitter",
                        iconClass: "fa-brands fa-twitter",
                        href: "#"
                    },
                    {
                        name: "instagram",
                        iconClass: "fa-brands fa-instagram",
                        href: "#"
                    },
                    {
                        name: "youtube",
                        iconClass: "fa-brands fa-youtube",
                        href: "#"
                    },
                    {
                        name: "pinterest",
                        iconClass: "fa-brands fa-pinterest-p",
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

    .navbar {
        border-top: 3px solid #427ed1;
        border-bottom: 1px solid #d1d1d1;
    }

    .my_socials {
        padding: .2rem 0;
        gap: 1.3rem;

        a {
            color: #494949;
        }
    }

    .form-control {
        font-size: .8rem;
        color: #b2b2b2;
        padding: 0;
        border: none;

        &::placeholder {
            color: #d1d1d1;
        }

        &:focus {
            color: #989898;
            border: none;
            box-shadow: none;
        }
    }

    .btn {
        --bs-btn-padding-x: .4rem;
        --bs-btn-padding-y: .1rem;
        --bs-btn-font-size: .9rem;
    }

    .my_lens {
        color: #aaaaaa;
    }
</style>