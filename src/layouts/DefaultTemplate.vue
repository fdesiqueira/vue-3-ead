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

export default {
    name: 'DefaultTemplate',
    components: {
        HeaderComponent,
        FooterComponent,
    }
}
</script>