<template>

    <main>
        <FeaturedProducts />
        <MainCollections />
        <BestSeller />
        <ShippingDiscount />
        <NewArrivals />
        <TeamMembers />
        <FromOurBlog />
        <BottomCategories />
        <BrandLogos />
    </main>

</template>

<script>
    import FeaturedProducts from './FeaturedProducts.vue';
    import MainCollections from './MainCollections.vue';
    import BestSeller from './BestSeller.vue';
    import ShippingDiscount from './ShippingDiscount.vue';
    import NewArrivals from './NewArrivals.vue';
    import TeamMembers from './TeamMembers.vue';
    import FromOurBlog from './FromOurBlog.vue';
    import BottomCategories from './BottomCategories.vue';
    import BrandLogos from './BrandLogos.vue';

    export default {
        components: {
            FeaturedProducts,
            MainCollections,
            BestSeller,
            ShippingDiscount,
            NewArrivals,
            TeamMembers,
            FromOurBlog,
            BottomCategories,
            BrandLogos
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

</style>