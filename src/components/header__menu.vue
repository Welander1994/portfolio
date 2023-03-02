<script setup>
import burger__menu from '../components/menu/burger__menu.vue';
import arrow from './arrow.vue';

</script>

<template>
    <div>
        <RouterLink to="/">
            <arrow />
        </RouterLink>

        <!--   <burger__menu /> -->
    </div>
</template>

<style lang="scss" scoped>
div {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    align-items: center;
}

a {
    list-style: none;
    text-decoration: none;
}
</style>