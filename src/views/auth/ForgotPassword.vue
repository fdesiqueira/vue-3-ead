<template>
    <section id="loginPage" 
        style="backgroundImage: url('./assets/images/bgLogin.jpg');">
        <div class="loginContent">
            <div class="loginCard">
                <div class="decor" style="background-image: url('./assests/images/building.jpg');">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTi">
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            <p>
                                Os melhores e mais completos cursos de Laravel do Brasil, cursos com projetos reais. Do zero ao profissional.
                            </p>
                        </span>
                        <span class="copyright fontSmall">
                            Todos os Direitos reservados - <b>Especializati</b>
                        </span>
                    </div>
                </div>
                <div class="login">
                    <div class="content">
                        <span class="logo">
                            <img :src="require('@/assets/images/logoDark.svg')" alt="">
                        </span>
                        <span>
                            <p>Seja muito bem vindo!</p>
                        </span>
                        <span class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                        <span class="description">
                            Acesse nossa plataforma e desfrute de cursos completos para sua especialização.
                        </span>
                        <form action="/dist/index.html" method="">
                            <div class="groupForm">
                                <i class="far fa-envelope"></i>
                                <input type="email" name="email" v-model="email" placeholder="Email" required>
                            </div>                                
                            <!-- <button class="btn primary" type="submit">Recuperar Senha</button> -->
                             <button :class="[
                                            'btn',
                                            'primary',
                                            'loading' ? 'loading' : ''
                                ]"
                                type="submit" 
                                @click.prevent="forgotPassword">
                                <span v-if="loading">Recuperando...</span>
                                <span v-else>Recuperar Senha</span>
                            </button>
                        </form>
                        <span>
                            <p class="fontSmall">Acessar 
                                <!-- <a href="/" class="link primary">Clique aqui</a> -->
                                <router-link :to="{name : 'login'}" class="link primary">Clique aqui</router-link>                            
                            </p>
                        </span>
                    </div>
                    <span class="copyright fontSmall">
                        Todos os Direitos reservados - <b>Especializati</b>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    /* eslint-disable */
    import { ref } from "vue"
    import { useStore } from "vuex"
    import router from "@/router"

    export default {
        name: 'ForgotPassword',
        setup() {
            const store = new useStore()
            const email = ref('email')
            const loading = ref(false)

            const forgotPassword = () => {
                loading.value = true
                store
                    .dispatch('forgetPassword', { email: email.value })
                    .then(() => alert('Verifique seu email.')  )
                    .catch(() => alert('error') )
                    .finally(() => loading.value = false )                  
            }             

            return {
                forgotPassword,
                email,
                loading,  
            }
        }
    }

</script>