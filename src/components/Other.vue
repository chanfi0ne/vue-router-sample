
<template>
  <div class="other">
    <h2>People</h2>
    go to a <router-link to="/greeting">Random Person</router-link>
    or go to <router-link to="/greeting/squidward">squidward tentacles</router-link>
  </div>
</template>

<script>
export default {
  name: 'Other',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
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
