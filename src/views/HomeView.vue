<template>

  <div class="row" style="height: 100vh;width: 100vw; overflow: hidden; background: #fff;"> 
    <div class="col-4 scrollable" 
      style="height: 100vh; overflow-y: scroll;border-right: 1px solid silver;">
      <chatListe/>
    </div>
    <div class="col-8">
       <div>
  <sidebar/>
 </div>
<chatBoxe/>

    </div>



  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/sideBar.vue'
import chatBoxe from '@/components/chatBoxe.vue'
import chatListe from '@/components/chatListe.vue'

export default {
  name: 'HomeView',
  components: {
    sidebar,
    chatBoxe,
    chatListe

  },
  
}
</script>

<style scoped>
  @import '@/assets/app.css';
  .scrollable::-webkit-scrollbar
  {
    width: 0 !important;
  }
  .col-8{
    padding: 0;
    margin: 0;
  }
</style>