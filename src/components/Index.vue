<template>
  <div class="index container">
    <div class="card">
      <div class="card-content">
        <h2 class="indigo-text">Revenue</h2>
          <a href="" class="btn green">
            <router-link :to="{name: 'Revenue'}">
              <i class="material-icons">zoom_in</i>
            </router-link>
          </a>
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
  //   // fetch data from firestore
  //   db.collection('smoothies').get()
  //   .then(snapshot => {
  //     snapshot.forEach(doc => {
  //       let smoothie = doc.data()
  //       smoothie.id = doc.id
  //       this.smoothies.push(smoothie)
  //     })
  //   })
  // }
}
</script>

<style>
.container{
  width: 90%;
}
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
},
.index h2{
  font-size: 1.8em;
  text-align: left;
  margin-top: 0;
}
</style>
