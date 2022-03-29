<template>
    <div class="pageTitle">
        <span class="title">Meus Cursos</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>

    <div class="content">
        <card-course :title="'Curso de Laravel com Vue.js'"
                     :image="''"
                     :bgName="'bgLaravel'"
                     :titulo="'Listagem de Cursos'">        
        </card-course>
    </div>    
</template>

<script>
  import CardCourse from './components/CardCourse.vue'
  export default {
    name: 'HomeView',
    components: {
      CardCourse,
    }
    
  }
</script>
