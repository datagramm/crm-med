import {request} from "@/api/request";
import router from "@/router";

export default {
    actions: {
        async createUser(ctx, userCredentials){
            console.log(userCredentials)
            const result = await request(`/signUp`, 'POST', userCredentials)

            ctx.commit('createUser', result )
        },
        async loginUser(ctx, userCredentials){
            console.log(userCredentials)
            const result = await request(`/signIn`, 'POST', userCredentials)

            ctx.commit('loginUser', result )
        }
    },
    mutations: {
        createUser(state, result) {
            console.log(result)
            if (result.successSignUp) {
                state.redirect.redirectState = true,
                router.push({path: '/sign-in'})
            }
        },
        loginUser(state, result) {
            if (result.successSignIn) {
                state.userCredentials.password = true,
                    state.userCredentials.email = true,
                    router.push({path: '/dashboard'})

            } else {
                if (result.badEmail) {
                    console.log('bad email')

                    state.userCredentials.email = false,
                        setTimeout(() =>  state.userCredentials.email = true, 3000)

                }

               if (result.badPassword) {
                   console.log('bad password')

                   state.userCredentials.password = false,
                       setTimeout(() =>  state.userCredentials.password = true, 3000)

               }
            }
        }

    },
    state: {
        userCredentials: {
            password: true,
            email: true,
        },
        redirect: {
            redirectState: false
        }




    },
    getters: {
        getUserCredentials(state){
            return state.userCredentials;
        }
    }
}