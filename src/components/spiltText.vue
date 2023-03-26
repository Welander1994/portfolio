<script setup>
const props = defineProps({
    title: String,
    speed: Number
})
</script>

<template>
    <div>
        <p class="top">{{ title }}</p>
        <p class="top">{{ title }}</p>
        <h1 class="text" id="header" :data-value="title">{{ title }}</h1>
        <p class="bottom">{{ title }}</p>
        <p class="bottom">{{ title }}</p>
    </div>
</template>

<style lang="scss" scoped>

div {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
        font-weight: 900;

    
    h1,
    p {
        font-size: 5rem;
        transition: .2s;

        &:hover {
            opacity: .7;
        } 
    }



    h1 {
        text-transform: uppercase;
        font-weight: 900;
        height: fit-content;
        margin: -5px 0;
        padding: 0;



    }

    .top, 
    .bottom {

        overflow: hidden;
        padding:  0px;
        margin: -7px;
        height: 40px;
        -webkit-text-stroke: 2px var(--gray);
        text-stroke: 2px var(--gray);

        color: transparent; 

        &:nth-child(odd) {
            height: 30px;
        }
    }

    .bottom {
        display: flex;
        align-items: end;
    }
}



</style>