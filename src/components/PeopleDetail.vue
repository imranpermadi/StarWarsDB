<template>
    <div>
        <h1>{{ person.name }}</h1>
        <p><strong>Birth Year:</strong> {{ person.birth_year }}</p>
        <p><strong>Gender:</strong> {{ person.gender }}</p>
        <p><strong>Height:</strong> {{ person.height }} cm</p>
        <p><strong>Mass:</strong> {{ person.mass }} kg</p>

        <h3>Films:</h3>
        <ul>
            <li v-for="film in person.films" :key="film">{{ film }}</li>
        </ul>

        <h3>Species:</h3>
        <ul>
            <li v-for="species in person.species" :key="species">{{ species }}</li>
        </ul>

        <h3>Starships:</h3>
        <ul>
            <li v-for="ship in person.starships" :key="ship">{{ ship }}</li>
        </ul>

        <h3>Vehicles:</h3>
        <ul>
            <li v-for="vehicle in person.vehicles" :key="vehicle">{{ vehicle }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: ['id'],
    data() {
        return {
            person: {},
        };
    },
    created() {
        axios.get(`https://swapi.dev/api/people/${this.id}/`).then((response) => {
            this.person = response.data;
        });
    },
};
</script>
