<template>
    <div>
        <header-component/>

        <section>
            <router-view></router-view>
        </section>

        <footer-component/>
    </div>
</template>

<script>

    import HeaderComponent from '@/layouts/components/HeaderComponent'
    import FooterComponent from '@/layouts/components/FooterComponent.vue'
    import { onBeforeMount } from '@vue/runtime-core'

    export default {
        name: 'DefaultTemplate',
        setup() {
            onBeforeMount(() => {
                document.body.classList.add('page')
                document.body.classList.add('dark')

                document.title = "Escola EAD de Desenvolvimento de Software "
            }) 
        },
        components: {
            HeaderComponent,
            FooterComponent,
        }
    }

</script>