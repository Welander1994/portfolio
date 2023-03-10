<script setup>
import arrow from './arrow.vue';

</script>

<template>
    <div>
        <a href="#" onclick="history.go(-1);">
            <arrow />
        </a>

        <!--   <burger__menu /> -->
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    padding: 0;
    justify-content: space-between;
    align-items: center;
}

a {
    list-style: none;
    text-decoration: none;
}
</style>