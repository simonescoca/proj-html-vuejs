<template>

    <section>
        <div class="d-flex my_cards-container">
            <div v-for="card in cards" class="my_single-card">
                <div class="my_img-container">
                    <img :src="card.src" :alt="card.title">
                </div>
                <div class="d-flex my_infos-on-absolute">
                    <div class="d-flex flex-column m-auto align-items-center my_content">
                        <h2 class="my_title">
                            {{ card.title }}
                        </h2>
                        <h5 class="my_subtitle">
                            {{ card.subtitle }}
                        </h5>
                        <button class="my_button">
                            VIEW MORE
                        </button>
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
                        src: "../../src/assets/winter_collection_bg.jpg",
                        title: "Winter Collection",
                        subtitle: "STYLISH AND WARM"
                    },
                    {
                        src: "../../src/assets/spring_collection_bg.jpg",
                        title: "Spring Collection",
                        subtitle: "BRIGHT AND COLORFUL"
                    },
                    {
                        src: "../../src/assets/autumn_collection_bg.jpg",
                        title: "Autumn Collection",
                        subtitle: "RICH AND COMFORTABLE"
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
        margin-bottom: 9rem;
    }

    .my_cards-container {
        width: 100%;
    }

    .my_single-card {
        position: relative;
        width: calc(100% / 3);
    }

    .my_img-container {
        height: 620px;

        img {
            object-fit: cover;
            object-position: top;
            width: 100%;
            height: 100%;
        }
    }

    .my_infos-on-absolute {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }

    .my_content {
        gap: 1.3rem;
    }

    .my_title {
        color: white;
        font-size: 2.6rem;
        font-weight: 700;
    }

    .my_subtitle {
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
    
        &:hover {
            background-color: transparent;
        }
    }

</style>