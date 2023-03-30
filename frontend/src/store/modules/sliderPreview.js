export default {
    actions: {
        prev(ctx){
           ctx.commit('prev')
        },
        next(ctx) {
            ctx.commit('next')
        },
        showCurrentSlide(ctx, slide){
            ctx.commit('showCurrentSlide', slide)
        },
        autoSlide(ctx){
         ctx.commit('autoSlide')

        }

    },
    mutations: {

        prev(state){
            clearInterval(this.interval)
            state.currentText -= 1
            if (state.currentText < 0) state.currentText = state.texts.length-1
            state.transitionEffect = false;
            setTimeout(() => {state.transitionEffect = true}, 1)
            this.interval =  setInterval(() => { this.commit('next', state)}, 7000)

        },
        next(state){
            clearInterval(this.interval)
            state.currentText += 1
            if (state.currentText >= state.texts.length) state.currentText = 0
            state.transitionEffect = false;
            setTimeout(() => {state.transitionEffect = true}, 1)
            this.interval =  setInterval(() => { this.commit('next', state)}, 7000)

        },
        showCurrentSlide(state, slide){
            state.currentText =  slide
            state.transitionEffect = false;
            setTimeout(() => {state.transitionEffect = true}, 1)

        },
        autoSlide(state){
            clearInterval(this.interval)
           this.interval =  setInterval(() => { this.commit('next', state)}, 7000)

        }




    },
    state: {
            texts: [
                {tittle: 'Unlimited Cards', text: 'Give your time. Authoriztion fields is simple'},
                {tittle: 'Unlimited Cards2', text: 'Some text 2'},
                {tittle: 'Unlimited Cards3', text: 'Some text 3'},
                {tittle: 'Unlimited Cards4', text: 'Some text 4'},

            ],
            currentText: 0,
            transitionEffect: true,
            interval: null,

    },

    getters: {
        allTexts(state){
            return state.texts;
        },
        currentText(state){
            return state.texts[state.currentText]
        },
        transition(state){
            return state.transitionEffect;
        },
        currentSlide(state){
            return state.currentText;
        }





    },
}