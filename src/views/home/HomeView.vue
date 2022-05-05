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
      <card-course
        class="animate__animated animate__headShake"
        v-for="course in courses"
        :key="course.id"
        :bgName="'laravel'"
        :course="course">
      </card-course>
    </div>    
</template>

<script>

  import { onMounted, computed } from 'vue'
  import { useStore } from 'vuex'
  import CardCourse from './components/CardCourse.vue'

  export default {
    name: 'HomeView',
    setup() {
      const store = useStore()
      
      const courses = computed(() => store.state.courses.myCourses)
      
      onMounted(() => store.dispatch('getCourses'))

      return {
        courses
      }
    },
    components: {
      CardCourse,
    }    
  }

</script>
