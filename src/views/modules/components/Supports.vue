<template>
    <div class="comments">
        <div class="header">
            <span class="title">Dúvidas</span>
            <button class="btn primary">
                <i class="fas fa-plus"></i>
                Enviar nova dúvida
            </button>
        </div>

        <support/>

    </div>
</template>

<script>

    import Support from '@/components/Supports.vue';

    export default {
        
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Supports',
        components: {
            Support,
        }
    }

</script>