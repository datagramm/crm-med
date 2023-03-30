import {request} from "@/api/request";
import router from "@/router";

export default {
    actions: {
        async createUser(ctx, userCredentials){
            console.log(userCredentials)
            const result = await request(`/signUp`, 'POST', userCredentials)

            ctx.commit('createUser', result )
        }
    },
    mutations: {
        createUser(state, result) {
            console.log(result)
            if (result.successSignUp) {
                state.redirect.redirectState = true,
                router.push({path: '/sign-in'})
            }
        }

    },
    state: {
        redirect: {
            redirectState: false,

        }

    },
    getters: {

    }
}