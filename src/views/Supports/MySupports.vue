<template>

    <div>
        <div class="pageTitle">
            <span class="title">Minhas Duvidas</span>
            <span class="dots">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </div>

        <div class="content">
            <div class="container">
            
              <div class="left">
                <div class="card">
                  <div class="title bg-laravel">
                    <span class="text">Filtros ( {{ status }} )</span>
                  </div>
                  <div class="modules">
                    <ul class="classes">
                      <li :class="{active : status === ''}"  @click.prevent="getMySupportsByStatus('')">Todos</li>
                      <li :class="{active : status === 'A'}" @click.prevent="getMySupportsByStatus('A')">Aguardando Minha Resposta</li>
                      <li :class="{active : status === 'P'}" @click.prevent="getMySupportsByStatus('P')">Aguardando Professor</li>
                      <li :class="{active : status === 'C'}" @click.prevent="getMySupportsByStatus('C')">Finalizados</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="right">
                <div class="content">
                
                    <supports/>

                </div>
              </div>
            </div>
        </div>      
    </div>

</template>

<script>
    import { onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    
    import Supports from '@/components/Supports.vue'

    export default {
        name : 'MySupports',
        components: {                     
            Supports,
        },
      setup() {
        const store = new useStore()

        const status = ref('')

        onMounted(() => {
          store.dispatch('getMySupports', status.value)
        })

        const getMySupportsByStatus = (newStatus) => {
          status.value = newStatus
          store.dispatch('getMySupports', newStatus)
        }

        return {
          getMySupportsByStatus,
          status
        }
      }
    }

</script>
