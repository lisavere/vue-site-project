<template>
    <div :class="['product-card', { selected: this.hasSelected() }]">

        <div class="prod prod-1">
            <div class="pic">
                <div class="shimmer-div"></div>
            </div>
            <div :class="['favorite pic', { active: this.hasFavorite() }]" @click="changeFavorite()" />
        </div>

        <div class="prod prod-2 product-description">
            <span>{{ this.name }}</span>
            <span>{{ this.weight }}г</span>
        </div>
        <div class="prod prod-3 product-description">
            <span>
                {{ this.description }}
            </span>
        </div>
        <div class="prod prod-4 product-description">
            <div>
                <span class="price">{{ this.price }}р</span>
            </div>
            <div>
                <my-button class="btn" @click=" this.hasSelected() ? removeSelected(this.id) : addSelected(this.id)">{{
                    this.hasSelected() ? 'Удалить' : 'В корзину' }}</my-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import myButton from '@/elements/MyButton.vue'

export default {
    components: {
        myButton
    },
    props: {
        id: Number,
        name: String,
        weight: String,
        description: String,
        price: String // Number
    },
    data() {
        return {

        }
    },
    methods: {
        ...mapMutations({
            // избранные
            addFavorite: 'addFavorite',
            removeFavorite: 'removeFavorite',
            // корзина
            addSelected: 'addSelected',
            removeSelected: 'removeSelected'
        }),
        hasFavorite() {
            return this.favorites.filter(s => s == this.id).length > 0
        },
        hasSelected() {
            return this.selected.filter(s => s == this.id).length > 0
        },
        changeFavorite() {
            if (this.hasFavorite()) {
                this.removeFavorite(this.id);
            }
            else {
                this.addFavorite(this.id);
            }
        }
    },
    computed: {
        ...mapState({
            favorites: state => state.favorites,
            selected: state => state.selected
        })
    }
}
</script>

<style lang="scss" scoped>
@mixin animation-block {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}

.shimmer-div {
    background: lightblue;
    animation: shimmer 1.5s infinite;
    background-repeat: no-repeat;
    -webkit-mask: linear-gradient(-60deg,
            rgba(#fff, 0) 0,
            rgba(#fff, 0.2) 20%,
            rgba(#fff, 0.5) 60%,
            rgba(#fff, 0)) right/450% 100%;

    @include animation-block();
}

@keyframes shimmer {
// from {
//     transform: translateX(-60%);
// }

// to {
//     transform: translateX(100%);
// }
    70% {
        -webkit-mask-position: left
    }
}

@mixin flex-row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.favorite {
    cursor: pointer;
}

$dark: #312525;

.product-card {
    position: relative;
    min-height: 390px;
    padding: 30px;

    background-color: #FAFAFA;
    border-radius: 8px;
    box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.25);

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    justify-content: flex-start;

    .btn {
        position: absolute;
        margin: auto;
        right: 0;
        bottom: 0;
    }

    &.selected {
        background-color: $dark;
        color: white;

        .btn {
            background-color: white;
            color: #312525;
        }
    }
}

.prod {
    width: 100%;
    position: relative;

    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
}

$width: calc(100% - 70px);

$product-face-height: 144px;

.prod.prod-1 {
    min-height: $product-face-height;

    .pic {
        overflow: hidden;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        background-color: whitesmoke;
        border-radius: 8px;

        width: $width;
        max-width: $product-face-height;

        height: $product-face-height;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    .pic.favorite {
        width: 20px;
        height: 20px;
        margin-right: 0px;
        background-color: unset;
        background-image: url('../img/favorites-empty.svg');

        &.active {
            background-image: url('../img/favorites.svg');
        }
    }
}

.prod.prod-2 {
    @include flex-row();

    align-items: center;
    font-size: 19px;

    white-space: nowrap;

    span {
        width: 50%;
    }

    span:nth-child(1) {
        text-align: left;
    }

    span:nth-child(2) {
        text-align: right;
        font-size: 15px;
    }
}

.prod.prod-3 {
    font-size: 15px;
    text-align: left;
}

.prod.prod-4 {
    @include flex-row();

    font-size: 19px;

    div {
        width: 50%;

        .price {
            position: absolute;
            margin: auto;
            left: 0;
            bottom: 0;
        }
    }
}
</style>