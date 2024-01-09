<template>
    <div class="header">
        <design class="design" />
        <span>
            {{ this.name }}
        </span>
        <design class="design" />
    </div>
</template>

<script>
import design from '@/elements/DotElement.vue';

export default {
    components: {
        design
    },
    props: {
        name: String
    }
}
</script>

<style lang="scss">
.header {
    font-size: 60px;

    @media (max-width: 908px) {
        font-size: 30px;
    }

    .design {
        margin-left: 40px;
        margin-right: 40px;
    }

    span {
        text-transform: uppercase;
    }
}
</style>