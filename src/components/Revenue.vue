<template>
  <div class="container">
    <h2 class="page-title">Revenue</h2>
    <div class="add-revenue-button">
      <router-link :to="{name: 'AddRevenue'}">
        <sui-button circular size="small" color="green" icon="add" />
      </router-link>
    </div>
    <div>
      <sui-table striped selectable celled>
        <sui-table-header>
          <sui-table-row>
            <sui-table-header-cell v-for="c in columns">{{c.label}}</sui-table-header-cell>
          </sui-table-row>
        </sui-table-header>
        <sui-table-body>
          <sui-table-row v-for="d in data">
            <sui-table-cell>{{d.date}}</sui-table-cell>
            <sui-table-cell>{{d.invoiceId}}</sui-table-cell>
            <sui-table-cell>{{d.clientName}}</sui-table-cell>
            <sui-table-cell>{{d.description}}</sui-table-cell>
            <sui-table-cell>{{d.amount}}</sui-table-cell>
          </sui-table-row>
        </sui-table-body>
      </sui-table>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
export default {
  name: 'Revenue',
  data () {
    return {
      data: [],
      columns: [
        {
          label: 'Date'
        },
        {
          label: 'Invoice ID'
        },
        {
          label: 'Client name'
        },
        {
          label: 'Description'
        },
        {
          label: 'Amount',
          numeric: true
        }
      ]
    }
  },
  created () {
// fetch data from firestore
  db.collection('revenue').get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      let revenue = doc.data()
      revenue.id = doc.id
      this.data.push(revenue)
      })
    })
  }
}
</script>

<style scoped>
.container{
  width: 90%;
  margin: auto;
  margin-top: 35px;
}
.button{
  position: fixed;
  top: 77px;
  right: 65px;
}
</style>
