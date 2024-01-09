<template>
    <HeaderCard v-model:name="this.pageName" />
    <ProductListCard v-model:products="getFavorites" v-if="getFavorites.length > 0" />
    <p class="empty-favorite-text" v-else>Пусто. Добавьте товары в избранное :)</p>
</template>
<script>
import { mapState } from 'vuex'

import HeaderCard from '@/components/HeaderCard.vue';
import ProductListCard from '@/components/ProductListCard.vue';

export default {
    data() {
        return {
            pageName: 'Избранное',
        }
    },
    components: {
        HeaderCard, ProductListCard
    },
    computed: {
        ...mapState({
            favorites: state => state.favorites,
            products: state => state.products
        }),
        getFavorites() {
            return this.products.filter(item => this.favorites.filter(s => s == item.id).length > 0)
        }
    },
    methods: {

    }
}
</script>
<style lang="scss">
.empty-favorite-text {
    margin-top: 50px;
}
</style>