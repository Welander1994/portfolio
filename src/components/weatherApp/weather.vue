<script setup>
import { ref } from 'vue';
import Rain from './rain.vue';
import Snow from './snow.vue';
import Mist from './mist.vue';
import Thunder from './thunder.vue';
import clouds from './clouds.vue';
import sunshine from './sunshine.vue'

const api_key = 'f114c1d8edfe049f0d1de15551609120';
const url_base = 'https://api.openweathermap.org/data/2.5/';
let query = ref('');
let weather = ref({});
let city = ref('Select a place')

let weather__type = ref('');


async function fetchWeather() {

    await fetch(`${url_base}weather?q=${query.value}&units=metric&APPID=${api_key}`)
        .then(res => {
            return res.json();
        })
        .then(setResults);


};

function setResults(results) {
    weather.value = results;


    if (weather._rawValue.message === 'city not found' || weather._rawValue.message === 'Nothing to geocode') {
        weather__type.value = '';
        city.value = 'city not found';
    } else {

        switch (results.weather[0].main) {
            case 'Rain':
                weather__type.value = 'Raining'
                break;
            case 'Snow':
                weather__type.value = 'Snowing'
                break;
            case 'Mist':
                weather__type.value = 'Misty'
                break;
            case 'Clouds':
                weather__type.value = 'Clouds'
                break;
            case 'Fog':
                weather__type.value = 'Misty'
                break;
            case 'Thunderstorm':
                weather__type.value = 'Thundering'
                break;
            case 'Clear':
                weather__type.value = 'Clear'
                break;
        }

    }


};



function dateBuilder() {
    let d = new Date();

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}


</script>

<template>
    <div class="content">
        <div class="search-box">
            <input type="text" class="search-bar" placeholder="search..." v-model="query"
                @keydown.enter.prevent="fetchWeather">
            <span class="material-symbols-outlined" @click="fetchWeather">search</span>
        </div>


        <div class="weather-wrap" v-if="typeof weather.main != 'undefined'">

            <div class="location-box">
                <div class="location">{{ weather.name }}</div>
                <div class="date">{{ dateBuilder() }}</div>
            </div>

            <div class="weather-box">
                <div class="temp">{{ Math.round(weather.main.temp) }}°</div>
                <div class="weather"> {{ weather.weather[0].description }}</div>
                <div class="wind">
                    <span class="material-symbols-outlined"> air </span>
                    {{ weather.wind.speed }}
                </div>
            </div>
        </div>
        <div class="weather-wrap" v-else>
            <div class="location-box">
                <div class="location">{{ city }}</div>
                <div class="date">{{ dateBuilder() }}</div>
            </div>
        </div>

        <div v-if="weather__type === 'Raining'">
            <rain />
        </div>

        <div v-if="weather__type === 'Snowing'">
            <Snow />
        </div>

        <div v-if="weather__type === 'Misty'">
            <Mist />
        </div>

        <div v-if="weather__type === 'Thundering'">
            <Thunder />
        </div>

        <div v-if="weather__type === 'Clouds'">
            <clouds />
        </div>

        <div v-if="weather__type === 'Clear'">
            <sunshine />
        </div>


    </div>
</template>

<style lang="css" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    user-select: none;
    display: flex;
    flex-direction: column;
}


.content {
    padding: 1rem;
    max-height: 70vh;
    min-height: 600px;
    max-width: 90%;
    border: 1px solid var(--purple);
    border-radius: 25px;
    box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.59);
    -webkit-box-shadow: 10px 10px 43px 0px rgba(0, 0, 0, 0.59);
    -moz-box-shadow: 0px 0px 43px 0px rgba(0, 0, 0, 0.59);

}


.search-box {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    color: #fff;

}

.search-box span {
    font-size: 2rem;

}

.search-box .search-bar {
    display: block;

    min-width: 50%;
    padding: 15px;
    margin: 15px;


    color: #181818;
    font-size: 20px;

    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 12px;

    appearance: none;
    border: none;

    box-shadow: 0 0 16px rgba(110, 106, 106, 0.25);
    transition: .5s ease-in-out;
}

.search-box .search-bar:focus {
    box-shadow: 0 0 32px rgba(110, 106, 106, 0.25);
    color: #fff;
    border: none;
    outline: none;
}


.location-box .location {
    color: #fff;
    font-size: 32px;
    font-weight: 500;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);

}

.location-box .date {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
    font-style: italic;
}

.weather-box {
    text-align: center;
    padding: 10px 25px;
}

.weather-box .temp {
    display: inline-block;
    padding: 10px 25px;
    color: #fff;
    font-size: 102px;
    font-weight: 700;
    text-shadow: 0 0 32px rgba(110, 106, 106, 0.1);

}

.weather-box .weather {
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-transform: capitalize;
    text-shadow: 0 0 32px rgba(110, 106, 106, 0.1);
}

.weather-box .wind {
    color: #fff;
    font-size: 30px;
    font-weight: 300;
    text-shadow: 1px 3px rgb(0 0 0 / 25%);
    font-style: italic;
}

.weather-box .wind span {
    font-size: 30px;
    transform: rotate(-10deg);
}
</style>