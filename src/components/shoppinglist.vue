<script setup>
import { ref, onMounted } from 'vue'

const newItem = ref('');

const list = ref([
    { name: "mælk", collected: false },
    { name: "smør", collected: false }
]);

const clearAll = () => {
    list.value = [];
    save();
}

const deleteItem = (key) => {
    list.value.splice(key, 1);
    save();
}

const addItem = (e) => {
    if (newItem.value !== "") {
        e.preventDefault();
        list.value.push({
            name: newItem.value,
            collected: false,
        })
        newItem.value = ""
        save()
    }
}

const save = () => {
    localStorage.shoppingList = JSON.stringify(list.value)
}


onMounted(() => {
    if (list) {
        list.value = JSON.parse(localStorage.shoppingList)
    }

})




</script>

<template>
    <div id="shoppingList">
        <div class="input">
            <form>
                <input v-model="newItem" type="text" placeholder="Add items" />
                <button v-on:click="addItem">+</button>
            </form>
        </div>



        <ul>

            <li v-for="(item, key) in list" v-bind:class="{ collected: item.collected }">
                <div class="items">
                    <input type="checkbox" v-model="item.collected" v-on:change="save" />
                    <span>{{ item.name }} </span>
                </div>
                <div class="itemRemover">
                    <button id="delete" v-on:click="deleteItem(key)">-</button>
                </div>
            </li>
        </ul>

        <div class="clearAll">
            <button v-on:click="clearAll">Clear all</button>

        </div>

    </div>
</template>

<style lang="scss" scoped>
#shoppingList {
    margin: 0;
    padding: 10px;
    transition: 0.5s ease-in-out;
    width: 350px;
}



.input {
    display: flex;
}

.input input {
    width: 270px;
    height: 30px;
    padding: 0 0 0 10px;
    margin: 0;
    border: 0;
    background-color: var(--bg-2);
    color: var(--white);
    border-radius: 10px;
    height: 40px;
    font-family: "VT323", monospace;
    font-size: 1.4rem;
}

.input input:focus {
    outline: none;
}

input::placeholder {
    padding: 0 0 0 0px;
    color: var(--purple);
    font-size: 1.4rem;
    font-family: "VT323", monospace;
}

.input button {
    height: 40px;
    border-radius: 10px;
    padding: 0 10px 0 10px;
    margin: 0 0 0 5px;
    border: 0;
    width: 64px;
    background-color: var(--bg-2);
    color: var(--purple);
    font-size: 1.4rem;
}

#shoppingList ul {
    padding: 0;
}

#shoppingList ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px 0 5px;
    margin: 10px 0;
    height: 40px;
    list-style: none;
    border-radius: 10px;
    background-color: var(--bg-2);
    transition: 0.5s ease-in-out;
    color: var(--purple);
}

.items {
    display: flex;
    align-items: center;
}

#shoppingList ul li span {
    padding-left: 10px;
    text-transform: capitalize;
    font-size: 1.4rem;
}

#shoppingList ul li.collected {
    transition: 0.5s ease-in-out;
    margin-left: 5px;
    background-color: var(--bg-1);
    color: var(--bg-2);
}

#shoppingList ul li input {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;

    height: 16px;
    width: 16px;
    border: 2px solid var(--purple);
    border-radius: 10px;
    outline: none;
    transition: 0.5s ease-in-out;
    cursor: pointer;
}

#shoppingList ul li input:checked {
    background-color: var(--purple);
}


ul li button {
    background-color: transparent;
    border: 0;
    color: var(--purple);
    text-transform: uppercase;
    width: 20px;
    height: 20px;
    padding: 0 20px 0 0;
    font-size: 1.2rem;
}

.clearAll button {
    height: 40px;
    border-radius: 10px;
    padding: 0;
    margin: 10px 0;
    border: 0;
    width: 100%;
    background-color: var(--bg-2);
    color: var(--purple);
    font-size: 1.4rem;
    font-family: "VT323", monospace;
}

.clearAll button:focus {
    outline: none;
}
</style>