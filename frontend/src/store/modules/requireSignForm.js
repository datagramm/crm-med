

export default  {
    actions: {
            addNewTooltip(ctx, name){
                ctx.commit('addTooltip', name)
            }
    },
    mutations : {
        addTooltip(state, name){
            state.tooltips[`${name}`] = false;
        }
    },
    state: {
        tooltips: {}

    },
    getters: {
        getTooltips(state){
            return state.tooltips;
        }

    }
}