<template>
    <h3>{{ titulo }}</h3>
    <div>
        <ul class="listCourses">
            <li>
                <span :class="['card', 'bgLaravel']">
                    <span class="icon">
                        <img :src="[ course.image != '' ? course.image : require('@/assets/images/icons/laravel.svg') ]" alt="">
                    </span>
                    <span class="title">{{ course.name }}</span>
                    <span class="action">
                        <!-- <a href="trainings.html" class="btn laravel">Acessar</a> -->
                        <!-- <router-link to="/campus/modulos" class="btn laravel">Acessar</router-link> -->
                        <a href="#" @click.prevent="SetCourse" class="btn laravel">Acessar</a>
                    </span>
                </span>
                <span class="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </li>  
        </ul>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import router from "@/router"

    export default {

        name: 'CardCourse',
        props: [ 'course', 'bgName'],
        setup(props) {
            const store = useStore()

            const SetCourse = () => {
                store.commit('SET_COURSE_SELECTED', props.course)

                router.push({name: 'campus.modules'})
            }

            return {
                SetCourse
            }
        }
    }

</script>