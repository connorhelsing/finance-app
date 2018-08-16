<template>
<div id="index">
<v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex :key="`4${i}`" xs4>
        <v-card dark color="primary">
          <v-card-text class="px-0">Revenue</v-card-text>
        </v-card>
        <v-card dark color="primary">
          <v-card-text class="px-0">Expenses</v-card-text>
        </v-card>
        <v-card dark color="primary">
          <v-card-text class="px-0">Receivables</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</div>
<!-- <div class="tile is-ancestor">
  <div class="tile is-parent">
    <article class="tile is-child box">
      <h2 class="title is-2">Revenue</h2>
      <a class="button is-success is-hovered">
        <router-link :to="{name: 'Revenue'}">
          <span>View Detail</span>
        </router-link>
      </a>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <h2 class="title is-2">Expenses</h2>
      <a class="button is-success is-hovered">
        <router-link :to="{name: 'Expenses'}">
          <span>View Detail</span>
        </router-link>
      </a>
    </article>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child box">
      <h2 class="title is-2">Receivables</h2>
      <a class="button is-success is-hovered">
        <router-link :to="{name: 'Expenses'}">
         <span>View Detail</span>
       </router-link>
     </a>
    </article>
  </div>
</div> -->
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Index',
  data () {
    return {

    }
  }
  // methods: {
  //   deleteSmoothie(id) {
  //   // delete doc from firestore
  //   db.collection('smoothies').doc(id).delete()
  //   .then(() => {
  //         this.smoothies = this.smoothies.filter(smoothie => {
  //         return smoothie.id != id
  //       })
  //     })
  //   }
  // },
   // created () {
    // fetch data from firestore
    // db.collection('smoothies').get()
    // .then(snapshot => {
      // snapshot.forEach(doc => {
        // let smoothie = doc.data()
        // smoothie.id = doc.id
        // this.smoothies.push(smoothie)
  //     })
  //   })
  // }
}
</script>

<style>

</style>
