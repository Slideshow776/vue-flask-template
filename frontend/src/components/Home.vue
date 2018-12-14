<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="routes">
      <router-link to=/counter>
        <md-button class="md-raised">To the Counter!</md-button>
      </router-link>
      <router-link to=/backend>
        <md-button class="md-raised">Talk to the backend!</md-button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.routes {
  display: flex;
  flex-direction: column;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
