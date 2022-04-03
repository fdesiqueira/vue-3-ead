<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
                <img src="images/icons/laravel.svg" alt="">
            </span>
            <span class="title">Aula 01 - LaraFood</span>
            <router-link :to="{name : 'campus.home'}" class="btn laravel">Voltar</router-link>
        </div>
        <iframe width="100%" height="auto" src="https://www.youtube.com/embed/KuzeyRr74xM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</template>

<script>

    export default {
        
        // eslint-disable-next-line vue/multi-word-component-names
        name : 'Player'
    }

</script>