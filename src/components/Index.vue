<template>
<div class="tile is-ancestor">
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
</div>
  <!-- <div class="index container">
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Revenue</h2>
          <button class="button is-dark">
            <router-link :to="{name: 'Revenue'}">
              <b-icon icon="check"></b-icon>
              <span>Finish</span>
            </router-link>
          </button>
            <router-link :to="{name: 'Revenue'}"></router-link>
        </div>
      </div>
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Expenses</h2>
          <a href="" class="btn green">
            <router-link :to="{name: 'Expenses'}">
              <i class="material-icons">zoom_in</i>
            </router-link>
          </a>
        </div>
      </div>
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Receivables</h2>
          <a href="" class="btn green">
            <router-link :to="{name: 'Receivables'}">
              <i class="material-icons">zoom_in</i>
            </router-link>
          </a>
        </div>
      </div>
    </div>
  </div>
 --></template>

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

<style scoped >
.is-ancestor{
padding-right: 75px;
padding-left: 75px;
padding-top: 35px;
}
</style>
