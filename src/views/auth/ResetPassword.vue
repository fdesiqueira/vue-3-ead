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
                             <div class="groupForm">
                                <i class="far fa-key"></i>
                                <input :type="typePassword" name="password" placeholder="Senha" v-model="password" required>
                                <i class="far fa-eye buttom" @click="toogleShowPassword()"></i>                               
                            </div>                             
                            <!-- <button class="btn primary" type="submit">Recuperar Senha</button> -->
                             <button :class="[
                                            'btn',
                                            'primary',
                                            'loading' ? 'loading' : ''
                                ]"
                                type="submit" 
                                @click.prevent="resetPassword">
                                <span v-if="loading">Alterando...</span>
                                <span v-else>Alterar Senha</span>
                            </button>
                        </form>
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
    import router from "@/router"
    import ResetPasswordService from "@/services/password.service"
    import { notify } from "@kyvg/vue3-notification";

    export default {
        name: 'ResetPassword',
        props: {
            token : {
                require: true,
            }
        },
        setup(props) {

            const email = ref('email')
            const password = ref('password')
            const loading = ref(false)

            const typePassword = ref('password')
            const toogleShowPassword = () => {
                typePassword.value = typePassword.value == 'password' ? 'text' : 'password'
            }

            const resetPassword = () => {
                loading.value = true

                ResetPasswordService.resetPassword({
                    email: email.value,  //'fdesiqueira.ti@gmail.com',
                    password: password.value, //'admin123',
                    token: props.token,               
                })
                .then(() => {
                    let mensagem = 'Senha atualizada com sucesso!'   
                     notify({ 
                        title: 'Recuperação de Senha',
                        text: mensagem,
                        type: 'success'
                    });
                    router.push({name: 'auth'})
                })
                .catch(error => {   
                    let mensagem = 'Usuário não encontrado para atualização da Senha'   
                    if(error.status === 422) mensagem = 'Credenciais inválidas.'
                    if(error.status === 404) mensagem = 'Usuário não encontrado'
                    notify({ 
                        title: 'Recuperar minha Senha - Erro',
                        text: mensagem,
                        type: 'warn'
                    });
                })
                .finally(() => loading.value = false )                  
            }             

            return {
                resetPassword,
                email,
                password,
                loading, 
                typePassword,     
                toogleShowPassword  
            }
        }
    }

</script>