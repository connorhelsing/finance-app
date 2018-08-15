<template>
<div id="navbar">
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Finance & Accounting</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>Link One</v-btn>
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
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

<style>
.el-menu-item {

}
</style>



