<template>
<div id="index">
  <v-app id="inspire">
    <v-container grid-list-md text-xs-center align>
      <v-layout align-start justify-center row fill-height/>
        <v-flex v-for="i in 3" :key="`4${i}`" xs4>
          <v-card dark color="primary">
            <v-card-text class="px-0">4</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
