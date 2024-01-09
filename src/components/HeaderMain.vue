<template>
    <nav>
        <div class="logo">
            <img src="@/img/ellipse.svg">
        </div>

        <div class="menu">
            <div @click="this.$router.push('/')">Меню</div>
            <design class="el" />
            <div @click="this.$router.push('/favorite')">Избранное</div>
            <design class="el" />
        </div>

        <div class="contact">
            <span>Контакты:</span>
            <span>&nbsp;</span>
            <span>+7 999 999 99 99</span>
        </div>

        <div class="to-shop">
        <button :class="['shop', { dark: this.getSelected.length > 0 }]"
          @click="this.$emit('state', true)">Корзина</button>
      </div>
    </nav>
</template>
<script>
import design from '@/elements/DotElement.vue';
import { mapState } from 'vuex';

export default {
    props:{
        state: Boolean
    },
    components: {
        design
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

nav {
    max-width: $container-width;
    width: auto;
    height: 100%;

    margin: auto;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    div {
        flex-shrink: 0;
        cursor: pointer;
    }
}

.logo {
    position: absolute;
    width: $logo-width;
    height: $logo-width;
    background-color: transparent;

    img {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
    }

    @media (max-width: 908px) {
        display: none;
    }
}

nav .menu {
    margin-left: calc($logo-width + 5%);
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;

    justify-content: left;
    align-items: center;

    @media (max-width: 908px) {
        margin-left: 3rem;
    }
}

.el {
    margin-left: 16px;
    margin-right: 16px;
}

.contact {
    span {
        @include font(18px);
    }

    display: flex;
    align-items: flex-end;

    img {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 0) and (max-width: 666px) {
        display: none;
    }
}

.to-shop {
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    @include font(16px, false);

    background-color: white;
    border: unset;
    padding: unset;
    cursor: pointer;

    &.shop {
        text-align: center;
        width: 101px;
        height: 42px;
        border-radius: 30px;

        margin-left: 16px;

        &.dark {
            background-color: salmon;
            color: white;
        }

        margin-right: 0.75rem;

        @media (max-width: 908px) {
            margin-right: 3rem;
        }
    }
}
</style>