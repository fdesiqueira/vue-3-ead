<template>
    <div class="left">
        <div class="card">
            <div class="title bg-laravel">
                <span class="text">Modulos</span>
                <span class="icon far fa-stream"></span>
            </div>
            <div    v-for="module in modules" :key="module.id" 
                     :class="[
                        'modules',
                        module.id == showModule ? 'active' : ''
                     ]"  
                    @click.prevent="toogleModule(module.id)">
                <div class="name">
                    <span class="text">{{ module.name }}</span>
                    <span class="icon fas fa-sort-down"></span>
                </div>
                <ul class="classes" v-show="module.id == showModule">
                    <li v-for="lesson in module.lessons" 
                        :key="lesson.id"     
                        :class="{'active' : lesson.id === lessonPlayer.id }"
                        @click.prevent="addLessonPlayer(lesson)">
                        <span v-if="lesson.views.length > 0" class="check active fas fa-check"></span>
                        <span class="nameLesson">{{ lesson.name }}</span>
                    </li>
                </ul>
            </div> 
        </div>
    </div>
</template>

<script> 
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue'

    export default {

        // eslint-disable-next-line vue/multi-word-component-names
        name : 'Modules',
         setup() {
            const store = useStore()

            const showModule = ref('0')

            const toogleModule = (moduleId) => {
                showModule.value = moduleId
            }

            const addLessonPlayer = (lesson) => {
                store.commit('SET_LESSON_PLAYER', lesson)
            }

            const course = computed(() => store.state.courses.courseSelected)

            const modules = computed(() => store.state.courses.courseSelected.modules)    
            
            const lessonPlayer = computed(() => store.state.courses.lessonPlayer)

            return {
                course,
                modules,
                lessonPlayer,
                showModule,
                toogleModule,
                addLessonPlayer,
            }
        }
    }
</script>





