<template>
  <div>
    <h3>Counter!</h3>
    <p>{{this.getCount}}</p>
    <md-button class="md-raised" @click="decrease">Descrease</md-button>
    <md-button class="md-raised" @click="increase">Increase</md-button>
    <router-link to="/">
      <h6>Go back home</h6>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Counter',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'getCount'
    ])
  },
  methods: {
    increase () {
      this.$store.dispatch('incrementCounter')
    },
    decrease () {
      this.$store.dispatch('decrementCounter')
    }
  }
}
</script>

<style scoped>

</style>
