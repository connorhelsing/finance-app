<template>
  <div>
    <sui-menu attached="top">
      <sui-menu-menu position="left">
        <router-link :to="{name: 'Index'}">
          <h2>Finance & Accounting</h2>
        </router-link>
      </sui-menu-menu>
      <sui-menu-menu position="right">
        <sui-menu-item right>
          <sui-input transparent icon="search" placeholder="Search..." />
        </sui-menu-item>
      </sui-menu-menu>
    </sui-menu>
  </div>
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
h2{
  padding-top: 4px;
  padding-left: 10px;
  text-decoration: none;
}
.router-link-exact-active{
  text-decoration: none;
}
</style>
