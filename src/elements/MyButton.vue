<template>
    <button>
        <slot>

        </slot>
    </button>
</template>

<style lang="scss">
$dark: #312525;

button {
    text-wrap: nowrap;
    cursor: pointer;

    font-size: 15px;

    border-radius: 8px;

    background: $dark;
    color: white;

    width: 120px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 22px;
    padding-right: 22px;

    border: unset;
}
</style>