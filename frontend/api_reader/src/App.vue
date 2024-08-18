<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  data() {
    return {
      words: [],
      success: false,
    }
  },
  methods: {
    grabbing() {
      fetch('http://localhost:3000/api/games')
        .then(response => response.json())
        .then(data => {
          this.words = data;
          this.success = true;
        })
        .catch(error => {
          console.error('There was an error fetching data:', error)
          this.success = false;
        })
    }
  },
  mounted() {
    this.grabbing();
  }
}
</script>

<template>
  <div v-if="success">
     <ul>
      <li v-for="word in words">{{ word.game_name }} {{ word.currently_playing }}</li>
     </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
