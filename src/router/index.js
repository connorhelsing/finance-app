import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'
import Router from 'vue-router'
import Index from '@/components/Index'
import Revenue from '@/components/Revenue'
import Expenses from '@/components/Expenses'
import Receivables from '@/components/Receivables'
import AddRevenue from '@/components/AddRevenue'

Vue.use(Buefy)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/revenue',
      name: 'Revenue',
      component: Revenue
    },
    {
      path: '/expenses',
      name: 'Expenses',
      component: Expenses
    },
    {
      path: '/receivables',
      name: 'Receivables',
      component: Receivables
    },
    {
      path: '/revenue/add-revenue',
      name: 'AddRevenue',
      component: AddRevenue
    }
  ]
})
