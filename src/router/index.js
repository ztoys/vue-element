import Vue from 'vue'
import Router from 'vue-router'
import Vuedoc from '@/components/Vuedoc'
import Home from '@/components/Home'
import Table from '@/components/Table'
import Form from '@/components/Form'
import Elementdoc from '@/components/Elementdoc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children:[
      	{ path:'/',name:'table',component:Table },
        { path:'vuedoc',name:'vue',component:Vuedoc },
        { path:'elementdoc',name:'element',component:Elementdoc },
      	{ path:'form',name:'form',component:Form },
      ]
    }
  ]
})
