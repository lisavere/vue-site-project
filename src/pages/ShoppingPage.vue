<template>
    <div class="shop" v-if="this.visibility == true" @click="closeWindow()">
        <div class="cart" @click.stop>
            <span class="close-btn"  @click="this.closeWindow()">&#10008;</span>
            <HeaderCard class="flex-col col-0 header" v-model:name="this.pageName" />

            <div class="flex-col col-1 food">
                <p class="empty-shop" v-if="this.getSelected.length == 0">Добавьте товары в корзину.</p>

                <transition-group v-else name="shopping-list">
                    <div class="food-cart" v-for="product in this.getSelected" :key="product.id">
                        <div class="content">
                            <div class="flex-rows">
                                <div class="flex-col">
                                    <p class="product-name row-1">{{ product.name }}</p>
                                    <p class="product-name row-2">{{ product.price }}р</p>
                                </div>
                                <div class="flex-col middle">
                                    <p class="row-1">{{ product.description }}</p>
                                    <p class="row-2">кол-во (счетчик)</p>
                                </div>
                                <div class="flex-col">
                                    <p class="row-1">{{ product.mass }}</p>
                                    <p class="row-2">Сумма: {{ product.price }}р</p>
                                </div>
                            </div>
                            <div class="flex-delete" @click="this.removeSelected(product.id)">&#10008;</div>
                        </div>
                    </div>
                </transition-group>

            </div>

            <div class="flex-col col-2 common-price" v-show="this.getSelected.length > 0">
                <span>
                    Общая сумма: {{
                        this.getCommonSum() }}р</span>
            </div>
            <div class="flex-col col-3 submit" v-show="this.getSelected.length > 0">
                <my-button @click="this.closeWindow()">Оформить</my-button>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';

import HeaderCard from '@/components/HeaderCard.vue';
import myButton from '@/elements/MyButton.vue'

export default {
    props: {
        visibility: Boolean
    },
    data() {
        return {
            pageName: 'Корзина'
        }
    },
    components: {
        HeaderCard, myButton
    },
    methods: {
        ...mapMutations({
            removeSelected: 'removeSelected'
        }),
        closeWindow() {
            this.$emit('update:visibility', false);
        },
        getCommonSum() {
            let sum = 0;

            this.getSelected.map((item) => sum += Number(item.price));

            return sum;
        }
    },
    computed: {
        ...mapState({
            selected: state => state.selected,
            products: state => state.products
        }),
        getSelected() {
            return this.products.filter(item => this.selected.filter(s => s == item.id).length > 0)
        }
    }
}
</script>
<style lang="scss" scoped>
@import '@/styles/styles.scss';

@mixin transition {

    .shopping-list-enter-active,
    .shopping-list-leave-active {
        transition: all 0.4s linear;
    }

    .shopping-list-enter-from,
    .shopping-list-leave-to {
        opacity: 0;
        transform: translateX(10px);
    }
}

@include transition();

.shop {
    display: flex;
    justify-content: flex-end;

    position: fixed;

    width: 100%;
    height: 100%;

    z-index: 1;

    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
}

.cart {
    display: flex;
    flex-direction: column;

    position: relative;
    width: calc(100vw/3);

    background-color: #EBE1D7;
    padding: 30px;

    @include font(13px, false);

    @media (max-width: 908px) {
        width: 50%;
    }

    @media (min-width: 0) and (max-width: 666px) {
        width: 100%;
    }
}

.close-btn {
    cursor: pointer;
    position: absolute;
    left: 10;
    top: 20px;
    font-size: 36px;
    color: salmon;
    display: none;

    @media (min-width: 0) and (max-width: 908px) {
        display: block;
    }
}

.common-price,
.submit {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}

.common-price,
.header {
    @include font(28px, false);
}

.header {
    display: flex;
    justify-content: center;
    align-items: center;
}

.flex-col {
    text-align: left;

    flex-grow: 1;
    flex-shrink: 0;
    flex-basis: auto;
}

p.empty-shop {
    text-align: center
}

.col-0 {
    flex-grow: 2;
}

.col-1 {
    flex-grow: 20;
    flex-basis: 0;
    overflow: scroll;
}

.food {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    @include font(13px, false);

    .food-cart {
        background-color: white;
        border-radius: 8px;

        //overflow: hidden;
        padding-left: 15px;
        //padding-right: 15px;

        //padding: 15px;

        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}

.content {
    display: flex;
    flex-direction: row;

    .product-name {
        font-size: 16px;
        font-weight: 600;
    }

    .flex-rows {
        width: 90%;
        display: inline-flex;
        flex-direction: column;
        flex-wrap: nowrap;

        .flex-col {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            text-align: left;
            align-items: center;

            p {
                margin-top: 10px;
                margin-bottom: 10px;
            }

            &.middle p {
                margin: unset;
            }

            p.row-1 {
                width: 60%;
                flex-shrink: 2;
            }

            p.row-2 {
                width: 40%;
                flex-shrink: 1;
            }
        }
    }

    .flex-delete {
        display: inline-flex;
        width: 10%;
        background-color: salmon;
        color: white;
        cursor: pointer;

        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;

        justify-content: center;
        align-items: center;

    }
}
</style>