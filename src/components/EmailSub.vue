<template>

    <section>
        <div class="d-flex align-items-center justify-content-between container">
            <div class="d-flex align-items-center my_email-icon-container">
                <div class="my_circle">
                    <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="my_text">
                    Subscribe now and get special offers
                </div>
            </div>
            <div class="row">
                <div class="col-auto">
                    <label class="visually-hidden">
                        Insert your email
                    </label>
                    <input class="form-control" placeholder="Insert your email">
                </div>
                <div class="col-auto">
                    <button class="btn btn-primary m-0">
                        SEND
                    </button>
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
        background-color: #2e3237;
        padding: 5.5rem 0;
    }

    .my_email-icon-container {
        gap: .85rem;
    }

    .my_circle {
        height: 5rem;
        width: 5rem;
        text-align: center;
        line-height: 5rem;
        border-radius: 50%;
        background-color: #2b2e32;
    }

    .my_text,
    .my_email-icon-container {
        font-size: 2rem;
        font-weight: 700;
        color: white;
    }

    .form-control,
    .btn-primary {
        border-radius: 30px;
    }

    .form-control {
        &:focus {
            border-color: white;
            box-shadow: none;
        }

        &::placeholder {
            font-size: .8rem;
            color: #d1d1d1;
            font-weight: 300;
        }
    }

    .btn-primary {
        font-weight: 600;
        font-size: .88rem;
        padding: 0.4rem 2.4rem;
    }

</style>