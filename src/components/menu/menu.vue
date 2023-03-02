<script setup>

defineProps({
    classes: String,
    type: String

})

</script>

<template>
    <div>
        <nav :class="classes" :v-show="type == 'home'">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/WeatherAppView">Weather App</RouterLink>
            <RouterLink to="/ShoppingView">Shopping list</RouterLink>
            <RouterLink to="/projectsView">projects</RouterLink>
            <RouterLink to="/ShoppingView">Kontakt</RouterLink>
        </nav>

        <nav :class="classes" :v-show="type == 'project'">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/WeatherAppView">Weather App</RouterLink>
            <RouterLink to="/ShoppingView">Shopping list</RouterLink>
            <RouterLink to="/projectsView">projects</RouterLink>
            <RouterLink to="/ShoppingView">Kontakt</RouterLink>
        </nav>
    </div>
</template>

<style lang="scss" scoped>
nav {
    display: flex;
    align-items: center;

    height: 70px;
    padding: 0 1vw;
    font-size: 18px;

    a {
        text-decoration: none;
        color: var(--white);
        padding: 0 20px;
    }

    a:hover {
        text-decoration: underline;
    }
}

.list {
    flex-direction: column;
    align-items: start;
}
</style>