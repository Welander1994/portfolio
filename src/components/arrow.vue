<script setup>

</script>

<template>
    <div>
        <span class="material-symbols-outlined arrow">
            arrow_back
        </span>
    </div>
</template>

<style lang="scss" scoped>
.arrow {
    font-size: 50px;
    font-weight: 300;
    padding: 10px 2vw;
    color: white;

    user-select: none;
    cursor: pointer;

    &:hover {
        animation: bounce-left 4s infinite ease;

        @keyframes bounce-left {
            0% {
                transform: translateX(0px);
            }

            5% {
                transform: translateX(-10px);
            }

            10% {
                transform: translateX(0px);
            }

            15% {
                transform: translateX(-10px);
            }

            20% {
                transform: translateX(0px);
            }

            100% {
                transform: translateX(0px);
            }
        }
    }


}
</style>