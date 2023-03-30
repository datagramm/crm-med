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
            console.log(result)
            if (result.successSignIn) {
                state.redirect.redirectState = true,
                    router.push({path: '/dashboard'})
            }
        }

    },
    state: {
        redirect: {
            redirectState: false,

        },


    },
    getters: {
        getRedirectState(state){
            return state.redirect.redirectState;
        }
    }
}