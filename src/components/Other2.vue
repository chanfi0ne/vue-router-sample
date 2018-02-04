
<template>
  <div>
  <h1>{{ model.text }}</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Other2',

  data() {
    return {
      model: {
        text: 'fetching name...'
      }
    }
  },

  created() {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      if(this.$route.params.id !== undefined){
        this.model = { text: 'Hello ' + this.$route.params.id }
      }else{
        axios.get('https://uinames.com/api/?ext&amount=1&region=united+states&gender=random')
        .then((resp) => {
          this.model = { text: 'Hello ' + resp.data.name }
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>