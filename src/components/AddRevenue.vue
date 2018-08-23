<template>
 <div class="add-revenue container">
  <sui-card class="raised">
    <sui-card-content>
      <sui-card-header>Add New Revenue Record</sui-card-header>
    </sui-card-content>
    <sui-card-content>
      <sui-form @submit="addRevenue">
        <div v-for="(c, index) in columns" :key="index" class="field">
          <label for="fields">{{c.label}}</label>
          <input class="input" type="text" v-model="c.field" placeholder="Enter data here...">
        </div>
        <sui-button color="green">Add Record</sui-button>
      </sui-form>
    </sui-card-content>
  </sui-card>
 </div>
</template>

<script>
import db from '@/firebase/init'
// import slugify from 'slugify'
export default {
  name: 'AddRevenue',
  data () {
    return {
      columns: {
        date: {label: 'Date', field: null},
        invoiceId: {label: 'Invoice ID', field: null},
        clientName: {label: 'Client name', field: null},
        description: {label: 'Description', field: null},
        amount: {label: 'Amount', field: null}
      },
      feedback: null,
    }
  },
  methods: {
    addRevenue() {
      console.log(this.columns)
      db.collection('revenue').add({
        date: this.columns.date.field,
        invoiceId: this.columns.invoiceId.field,
        clientName: this.columns.clientName.field,
        description: this.columns.description.field,
        amount: this.columns.amount.field
      }).then(() => {
        this.$router.push({name: 'Revenue'})
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>


<style scoped>
.container{
  width: 500px;
  margin: auto;
  margin-top: 50px;
}
.container .raised{
  padding: 10px;
}
.field.input{
  width: 500px;
}
</style>
