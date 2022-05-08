<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
                <img src="images/icons/laravel.svg" alt="">
            </span>
            <span class="title">{{ lesson.name }}</span>
            <router-link :to="{name : 'campus.home'}" class="btn laravel">Voltar</router-link>
        </div>
        <iframe v-if="lesson.video"
            width="100%" 
            height="300"           
            :src="'https://www.youtube.com/embed/' + lesson.video" 
            :title="lesson.name" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
        <!-- src="https://www.youtube.com/embed/KuzeyRr74xM"  -->       
    </div>
    <div class="description-lesson" v-show="lesson.video != '' ">
        {{ lesson.description }}
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { computed } from 'vue'

    export default {
        
        // eslint-disable-next-line vue/multi-word-component-names
        name : 'Player',
        setup() {
            const store = useStore()

            const lesson = computed(() => store.state.courses.lessonPlayer)

            return {
                lesson,
            }
        }
    }

</script>