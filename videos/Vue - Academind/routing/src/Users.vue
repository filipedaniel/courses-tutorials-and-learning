<template>
  <div>
    <h1>Users Overview!</h1>
    <p>Team ID is {{ $route.params.teamId }}</p>
    <button @click="goHome">Go Home</button>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (to, from) {
      // alert(to.params.teamId)
    }
  },
  created() {
           
  },
  methods: {
    goHome() {
      this.$router.push('/');
    }
  }
}
</script>