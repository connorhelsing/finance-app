<template>
  <div class="container">
    <sui-card-group :items-per-row="3">
      <sui-card class="raised">
        <sui-card-content>
          <sui-card-header>
            Revenue
          </sui-card-header>
        </sui-card-content>
        <sui-card-content>

        </sui-card-content>
        <sui-card-content extra>
          <router-link :to="{name: 'Revenue'}">
            <sui-button>
              View Detail
            </sui-button>
          </router-link>
        </sui-card-content>
      </sui-card>
      <sui-card class="raised">
        <sui-card-content>
          <sui-card-header>
            Expenses
          </sui-card-header>
        </sui-card-content>
        <sui-card-content>

        </sui-card-content>
        <sui-card-content extra>
          <sui-button>View Detail</sui-button>
        </sui-card-content>
      </sui-card>
      <sui-card class="raised">
        <sui-card-content>
          <sui-card-header>
            Receivables
          </sui-card-header>
        </sui-card-content>
        <sui-card-content>

        </sui-card-content>
        <sui-card-content extra>
          <sui-button>View Detail</sui-button>
        </sui-card-content>
      </sui-card>
    </sui-card-group>
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

<style scoped>
.container{
  margin: auto;
  margin-top: 35px;
  width: 90%;
}

</style>
