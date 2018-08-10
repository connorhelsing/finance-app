<template>
 <div class="add-revenue container">
   <h2 class="center-align indigo-text">Add New Revenue Record</h2>
   <form @submit.prevent="AddSmoothie">
     <div class="field" v-for="(value, key) in fields" :key="key">
       <label for="field">{{value.title}}</label>
       <input type="text" name="field" v-model="fields[key].value">
     </div>
     <div class="field center-align">
      <p v-if="feedback" class="red-text">{{feedback}}</p>
       <button class="btn green">Add Record</button>
     </div>
   </form>
 </div>
</template>

<script>
// import db from '@/firebase/init'
// import slugify from 'slugify'
export default {
  name: 'AddRevenue',
  data () {
    return {
      fields: {
      clientName: {title: 'Client name', value: null},
      date: {title: 'Date', value: null},
      invoiceNumber: {title: 'Invoice number', value: null},
      description: {title: 'Description', value: null},
      amount: {title: 'Amount', value: null}
        },
      feedback: null,
      slug: null
    }
  },
  methods: {
  //   EditSmoothie(){
  //     console.log(this.smoothie.title, this.smoothie.ingredients)
  //   },
    AddSmoothie() {
      if (this.title){
        this.feedback = null
  //       // create slug
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
      } else {
        this.feedback = "You must complete all required fields"
      }
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


<style>
/*.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field{
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete{
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
.addRevenue{
  object-position: top;
  object-position: right;
}*/
</style>
