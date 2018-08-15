<template>
<nav class="navbar is-fixed is-light">
  <div class="navbar-brand">
    <router-link :to="{name: 'Index'}">
    <a class="title">
      <h2 class="title is-2 is-light">Finance & Accounting</h2>
    </a>
  </router-link>
  </div>

</nav>
</template>

<script>
  export default {
    name: 'Navbar',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
.navbar{
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
}
</style>
