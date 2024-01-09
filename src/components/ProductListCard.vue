<template>
    <div class="product-container">
        <div class="product-elements" v-for="prodType in this.products" :key="prodType.id">
            <ProductCard v-model:id="prodType.id" v-model:name="prodType.name" v-model:weight="prodType.mass"
                v-model:description="prodType.description" v-model:price="prodType.price" />
        </div>
    </div>
</template>
<script>
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: {
        ProductCard
    },
    props: {
        products:
        {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss">
@import '@/styles/styles.scss';

.product-container {
    margin-top: 50px;
    @include flex-row();

    justify-content: left;
    align-items: center;

    .product-elements {
        display: flex;
        justify-content: center;
        
        padding: 0.75rem;

        width: 25%;
        max-width: 25%;

        @media (max-width: 1190px) {
            width: 33.333%;
            max-width: 33.333%;

        }

        @media (max-width: 908px) {
            width: 50%;
            max-width: 50%;
        }

        @media (min-width: 0) and (max-width: 666px) {
            width: 100%;
            max-width: 100%;
        }
    }
}
</style>