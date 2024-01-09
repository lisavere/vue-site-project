<template>
    <HeaderCard v-model:name="this.pageName" />

    <div class="product-menu">
        <div v-for="(element, index) in this.menu" :key="index" :class="{ active: this.filter == index }" :id="element.id"
            @click="this.chooseMenu($event.target.id)">
            {{ element.name }}
        </div>
    </div>

    <ProductListCard v-model:products="filtered" />
</template>

<script>
import HeaderCard from '@/components/HeaderCard.vue';
import ProductListCard from '@/components/ProductListCard.vue';

import { mapState } from 'vuex'

export default {
    components: { HeaderCard, ProductListCard },
    data() {
        return {
            pageName: 'Меню',
            menu: [
                { id: 0, name: 'Все' },
                { id: 1, name: 'Роллы' },
                { id: 2, name: 'Лапша и рис' },
                { id: 3, name: 'Салаты' },
                { id: 4, name: 'Пицца' }
            ],
            filter: 0,
            filteredProducts: []
        }
    },
    methods: {
        chooseMenu(number) {
            this.filter = Number(number);
        }
    },
    computed: {
        ...mapState({
            products: state => state.products
        }),
        filtered() {
            return this.filter == 0 ? this.products : [...this.products].filter(item => item.group == this.filter);
        }
    }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.product-menu {
    margin-top: 50px;

    @include flex-row();

    justify-content: center;
    align-items: center;

    text-transform: uppercase;

    div {
        padding-left: 32px;
        padding-right: 32px;

        padding-top: 16px;
        padding-bottom: 16px;

        cursor: pointer;

        color: $menu-text-color;
        border-radius: 100px;
    }

    div.active {
        background-color: $body-color;
        color: white;
    }
}
</style>