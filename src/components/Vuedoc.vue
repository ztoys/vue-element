<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <div class="list">
      <a href="https://vuejs.org" target="_blank"><span>Core Docs</span></a>
      <a href="https://forum.vuejs.org" target="_blank"><span>Forum</span></a>
      <a href="https://gitter.im/vuejs/vue" target="_blank"><span>Gitter Chat</span></a>
      <a href="https://twitter.com/vuejs" target="_blank"><span>Twitter</span></a>
      <br>
      <br>
      <a href="http://vuejs-templates.github.io/webpack/" target="_blank"><span>Docs for This Template</span></a>
    </div>

    <h2>生态系统</h2>
    <div class="list sys">
      <a href="http://router.vuejs.org/" target="_blank"><span>vue-router</span></a>
      <a href="http://vuex.vuejs.org/" target="_blank"><span>vuex</span></a>
      <a href="http://vue-loader.vuejs.org/" target="_blank"><span>vue-loader</span></a>
      <a href="https://github.com/vuejs/awesome-vue" target="_blank"><span>awesome-vue</span></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vue 文档'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
  text-decoration: none;
}
h1{
  margin:50px 0;
}
h2:first-child{
  margin-bottom: 30px;
}
h2:not(:first-child){
  margin:30px 0;
}
.list{
  margin:30px 0; 
}
.list span{
  display: inline-block;
  padding:5px 20px;
  background: #44B7AC;
  color: #FFF;
  margin-right: 20px;
}
.sys span{
  background: #4CAF70;
}
</style>
