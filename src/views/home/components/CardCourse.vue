<template>
    <h3>{{ titulo }}</h3>
    <div>
        <ul class="listCourses">
            <li>
                <span :class="['card', 'bgLaravel']">
                    <span class="icon">
                        <img :src="[ image != '' ? image : require('@/assets/images/icons/laravel.svg') ]" alt="">
                    </span>
                    <span class="title">{{ title }}</span>
                    <span class="action">
                        <!-- <a href="trainings.html" class="btn laravel">Acessar</a> -->
                        <router-link to="/campus/modulos" class="btn laravel">Acessar</router-link>
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
    export default {
        name: 'CardCourse',
        props: [ 'title', 'image', 'bgName']
    }
</script>