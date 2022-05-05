<template>

    <div>
        <div class="pageTitle">
            <span class="title">{{ course.name }}</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">

                <modules/>

                <div class="right">
                    <div class="content">
                     
                        <player/>

                        <supports/>

                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

    import Modules from '@/views/modules/components/Modules.vue'
    import Player from '@/views/modules/components/Player.vue'
    import Supports from '@/views/modules/components/Supports.vue'
    import { useStore } from 'vuex'
    import { computed } from 'vue'

    export default {

        name : 'ModulesAndLessons',
        setup() {
            const store = useStore()

            const course = computed(() => store.state.courses.courseSelected)

            return {
                course
            }
        },
        components: {            
            Modules,
            Player,
            Supports
        }
    }

</script>
