<template>
  <div>
    <h3>Talk to the Backend!</h3>
    <md-button @click="getDefaultMessage" class="md-raised">Get Message</md-button>
    <div class="align-input">
      <md-field>
        <md-icon class="md-accent">warning</md-icon>
        <label>Click here to echo a message</label>
        <md-input
          v-model.lazy="userInput"
          @keyup.enter="echo(userInput)"
        ></md-input>
      </md-field>
    </div>
    <h2>{{this.getMessageFromBackend}}</h2>
    <router-link to="/">
      <h6>Go back home</h6>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Backend',
  data () {
    return {
      userInput: ''
    }
  },
  computed: {
    ...mapGetters([
      'getMessageFromBackend'
    ])
  },
  methods: {
    getDefaultMessage () {
      this.$store.dispatch('getMessageFromBackend')
    },
    echo (userInput) {
      this.$store.dispatch('echoBackend', userInput)
    }
  }
}
</script>

<style scoped>

.align-input {
  display:flex;
  align-items: center;
  justify-content: center;
}

.md-field {
  width:34%;
}

</style>
