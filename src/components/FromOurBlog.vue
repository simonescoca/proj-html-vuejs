<template>

    <section>
        <div class="container">
            <div class="d-flex align-items-center justify-content-center my_sect-title-container">
                <div class="my_hr"></div>
                <h2 class="my_title">
                    From Our Blog
                </h2>
                <div class="my_hr"></div>
            </div>
            <div class="d-flex my_sect-subtitle-container">
                <h6 class="m-auto my_subtitle">
                    The latest Classic Shop news
                </h6>
            </div>
            <div class="d-flex justify-content-center my_cards-container">
                <div v-for="card in cards" class="my_single-card">
                    <div class="card">
                        <div class="my_img-container">
                            <img :src="card.src" class="card-img-top" :alt="card.title">
                        </div>
                        <div class="card-body">
                            <h3 class="card-title m-0">
                                {{ card.title }}
                            </h3>
                            <p class="card-text my_date">
                                {{ card.date }}
                            </p>
                            <p class="card-text m-0 my_parag">
                                {{ card.parag }}
                            </p>
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
                        src: "../../src/assets/post_img_12-700x441.jpg",
                        title: "Aenean lobortis sapien enim viverra",
                        date: "September 9th, 2015 | 0 Comments",
                        parag: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
                    },
                    {
                        src: "../../src/assets/post_img_11-700x441.jpg",
                        title: "Duis ac massa semper maximus",
                        date: "September 9th, 2015 | 0 Comments",
                        parag: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
                    },
                    {
                        src: "../../src/assets/post_img_10-700x441.jpg",
                        title: "Nunc fermint nulla eu justo sem id",
                        date: "September 9th, 2015 | 0 Comments",
                        parag: "Donec finibus sit amet orci eget ultricies. Praesent posuere ante ut erat fringilla"
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
        margin-bottom: 6rem;
    }

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
        gap: 2rem;
    }

    .card {
        width: 23rem;
        --bs-card-border-width: 0;
        border-radius: 0;
    }

    .my_img-container {
        overflow: hidden;
    }

    .card-img-top {
        border-radius: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
        transition: all 0.5s;
        cursor: pointer;
    }

    .card-body {
        padding: 1rem 0 0 0;
    }

    .card-title {
        font-size: 1rem;
        font-weight: 700;
    }

    .my_date {
        font-size: .8rem;
        font-weight: 300;
        margin-bottom: 0 0 1rem 0;
    }

    .my_parag {
        font-size: .88rem;
        font-weight: 400;
        line-height: 2rem;
    }

    .card-img-top:hover {
        transform: scale(1.11);
    }
</style>