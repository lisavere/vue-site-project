<template>
  <div class="main">
    <header>
      <header-page v-on:state="this.changeState" />
    </header>

    <div class="router-view">
      <router-view />
    </div>

    <footer>
      <p>2023</p>
    </footer>
  </div>

  <shopping-page v-model:visibility="this.shoppingCartVisible" />
</template>

<script>
import headerPage from '@/components/HeaderMain.vue';
import shoppingPage from '@/pages/ShoppingPage.vue'
import design from '@/elements/DotElement.vue';

export default {
  data() {
    return {
      shoppingCartVisible: false
    }
  },
  components: {
    design,
    shoppingPage,
    headerPage
  },
  methods: {
    changeState() {
      this.shoppingCartVisible = true;
    }
  }
}
</script>

<style lang="scss">
@import '@/styles/styles.scss';

.main {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  header,
  footer {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
  }
}

header,
footer {
  width: 100%;
  background-color: $background-menu-color;
  display: block;

  @include font(16px, true);
  height: $menu-height;
}

header {
  @media (max-width: 908px) {
    height: calc($menu-height/2);
  }
}

footer {
  background-color: whitesmoke;
  color: $text-color-dark;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: center;
  margin-top: 50px;

}

.router-view {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: auto;

  width: 100%;

  max-width: 1190px;
  margin: auto;

  margin-top: 50px;

  @include font(28px, false);
  color: $body-color;

  @media (max-width: 908px) {
    @include font(20px, false);
  }
}

body {
  margin: auto;
  display: block;
  min-width: 333px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  box-sizing: border-box;
}
</style>
