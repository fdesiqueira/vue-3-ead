<template>     
    <div class="comments">
        <div class="content">

            <div class="card" v-for="support in supports.data" :key="support.id">
                <div class="commentContent main">
                    <span class="avatar">
                        <img :src="[ support.user.image ? 
                                     support.user.image :
                                     require('@/assets/images/avatars/user01.svg')]" 
                             :alt="support.user.name" />
                    </span>
                    <div class="comment">
                        <div class="balloon">
                            <span class="fas fa-sort-down"></span>
                            <span class="owner">{{ support.user.name}} - {{ support.dt_updated }}</span>
                            <span class="text">
                                {{ support.description }}
                            </span>
                        </div>
                    </div>
                    <button class="btn primary">
                        <span v-if="showSupport === support.id" @click.prevent="showSupport = '0'">Ocultar respostas</span>  
                        <span v-else                            @click.prevent="showSupport = support.id">Exibir respostas</span>                        
                    </button>
                </div>
                <div class="answersContent" v-show="showSupport === support.id">
                    <div :class="[
                            'commentContent',
                            { 'rightContent' : support.user.id != reply.user.id } 
                        ]"  
                        v-for="reply in support.replies" 
                        :key="reply.id">
                         <span class="avatar" v-if="support.user.id == reply.user.id">
                            <img :src="[ reply.user.image ? 
                                         reply.user.image : 
                                         require('@/assets/images/avatars/user01.svg')]" 
                                 :alt="reply.user.name" />
                        </span>
                        <div class="comment">
                            <div class="balloon">
                                <span class="fas fa-sort-down"></span>
                                <span class="owner">{{ reply.user.name }}} - {{ reply.dt_uptdated }}</span>
                                <span class="text">
                                    {{ reply.description }}
                                </span>
                            </div>
                        </div>
                        <span class="avatar" v-if="support.user.id != reply.user.id">
                            <img :src="[ reply.user.image ? 
                                         reply.user.image : 
                                         require('@/assets/images/avatars/user03.svg')]" 
                                 :alt="reply.user.name" />
                        </span>
                    </div>
                    <div class="commentContent">
                        <span class="avatar">
                             <img   :src="[ support.user.image ? 
                                        support.user.image :
                                        require('@/assets/images/avatars/user01.svg')]" 
                                    :alt="support.user.name" />
                        </span>
                        <div class="comment">
                            <div class="balloon">
                                <span class="fas fa-sort-down"></span>
                                <span class="owner">Fernando - 07/10/2021</span>
                                <span class="text">
                                    In eleifend urna sapien, faucibus pharetra justo luctus quis. Vivamus eleifend fringilla massa
                                </span>
                            </div>
                        </div>
                    </div>
                    <span class="answer">
                        <button class="btn primary" @click.prevent="openModal(support.id)">Responder</button>
                    </span>
                </div>
            </div>
        </div>
    </div>

    <modal-support
      :show-modal="modal.showModal"
      :support-reply="modal.supportReply"
      @closeModal="modal.showModal = false">
    </modal-support>

</template>

<script>
    import { useStore } from 'vuex'
    import { computed, ref } from 'vue'
    import ModalSupport from '@/components/SupportModal.vue'

    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name: 'Supports',
        setup() {
            const store = useStore()

            const supports = computed(() => store.state.supports.supports )

            const showSupport = ref('0')

            const modal = ref({
                showModal: false,
                supportReply: ''
            })

            const openModal = (supportId) => {      
                modal.value = {showModal: true, supportReply: supportId}
            }
         
            return {
                supports,
                showSupport,
                modal,
                openModal
            }
        }, 
        components: {
            ModalSupport
        }      
    }
</script>