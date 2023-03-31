export default  {
    actions: {
        offFloatAnimation(ctx){
            ctx.commit('offFloatAnimation')
        }
    },
    mutations: {
        offFloatAnimation(state) {
            setTimeout(() =>  state.float = false, 1500 )

        }
    },
    state: {
        float: true

    },
    getters: {
        getFloatAnim(state){
            return state.float;

        }
    }
}