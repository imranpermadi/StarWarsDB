<template>
  <div>
    <h1>Star Wars People List</h1>
    <ul>
      <li v-for="person in people" :key="person.url">
        <router-link :to="{ name: 'people-detail', params: { id: getIdFromUrl(person.url) } }">
          {{ person.name }}
        </router-link>
      </li>
    </ul>
    <button @click="loadPeople">Load People</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      people: [],
      nextPage: 'https://swapi.dev/api/people/',  // The first page of people
    };
  },
  methods: {
    loadPeople() {
      axios.get(this.nextPage).then((response) => {
        this.people = response.data.results;
        this.nextPage = response.data.next;
      });
    },
    getIdFromUrl(url) {
      return url.match(/\/(\d+)\/$/)[1];  // Extract ID from the URL
    },
  },
  created() {
    this.loadPeople();
  },
};
</script>
