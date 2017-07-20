import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Table from '@/components/main/Table'
import Example from '@/components/main/Example'
import Form from '@/components/main/Form'
import Form2 from '@/components/main/Form2'
import Elementdoc from '@/components/doc/Elementdoc'
import Vuedoc from '@/components/doc/Vuedoc'
import Echart from '@/components/info/Echart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'login',
      name:'Login',
      component:Login,
      hidden:true
    },
    {
      path:'/',
      name:'主页',
      component:Home,
      icon:'el-icon-menu',
      children:[
        {path:'/',name:'表格',component:Table},
        {path:'/example',name:'实例',component:Example},
        {path:'/form',name:'Form',component:Form},
        {path:'/form2',name:'选择器',component:Form2}
      ]
    },
    {
      path:'/',
      name:'文档',
      component:Home,
      icon:'el-icon-document',
      children:[
        {path:'/vuedoc',name:'Vue文档',component:Vuedoc},
        {path:'/elementdoc',name:'Element文档',component:Elementdoc}
      ]
    },
    {
      path:'/',
      name:'信息',
      component:Home,
      icon:'el-icon-information',
      children:[
        {path:'/echart',name:'图表',component:Echart}
      ]
    }
  ]
})
