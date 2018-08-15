<template>
 <div class="add-revenue container is-fluid">
   <h2 class="title is-2">Add New Revenue Record</h2>
   <form @submit="addRevenue">
  <!--    <b-field label="Date">
       <b-datepicker
         placeholder="Type or select a date..."
         :readonly="falsße">
       </b-datepicker>
     </b-field> -->
     <div v-for="(c, index) in columns" :key="index" class="field">
       <label for="fields">{{c.label}}</label>
       <input class="input" type="text" v-model="c.field" placeholder="Enter data here...">
     </div>
      <button class="button is-success">Add Record</button>
   </form>
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

  //
    // create slug
  //       this.slug = slugify(this.title, {
  //         replacement: '-',
  //         remove: /[$*_+~.()'"!\-:@]/g,
  //         lower: true
  //       })
  //       db.collection('smoothies').add({
  //         title: this.title,
  //         ingredients: this.ingredients,
  //         slug: this.slug
  //       }).then(() => {
  //         this.$router.push({name: 'Index'})
  //       }).catch(err => {
  //         console.log(err)
  //       })
  //   },
  //   addIng() {
  //     if(this.another){
  //       this.ingredients.push(this.another)
  //       this.another = null
  //       this.feedback = null
  //     } else {
  //       this.feedback = "You must enter a value to add an ingredient"
  //     }
  //   },
  //   deleteIng(ing) {
  //     this.ingredients = this.ingredients.filter(ingredient => {
  //       return ingredient != ing
  //       })
  //   }
    }
  }
}
</script>


<style scoped>
.container{
  position: fixed;
  max-width: 500px;
  margin: 50px;
}
</style>
