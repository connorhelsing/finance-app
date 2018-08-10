<template>
  <div class="revenue container">
      <h2>Revenue</h2>
        <span class="btn-floating btn-large halfway-fab green">
          <router-link :to="{name: 'AddRevenue'}">
            <i class="material-icons">add</i>
          </router-link>
        </span>
      <ul class="revenueRecord">
        <li v-for="(revenueRecord, index) in revenueRecords" :key="revenueRecord.id">
          <span class="chip">{{}}</span>
        </li>
      </ul>
    </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Revenue',
  data () {
    return {
      revenueRecords:[]
    }
  },
  created () {
// fetch data from firestore
  db.collection('revenue').get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      let revenue = doc.data()
      revenue.id = doc.id
      this.revenueRecords.push(revenue)
      })
    })
  }
}
</script>

<style scoped>
.container{
  width: 90%;
}
.btn-floating.btn-large.halfway-fab{
  top: 110px;
  right: 67px;
}

</style>
