import lodash from "lodash";

export default  {
    actions: {
        computeCoordinatesOfPoints(ctx){
            ctx.commit('mutateCoordinatesOfPoints')
        },
       dragAndDrop(ctx, payload) {
            console.log(payload)
            ctx.commit('dragAndDrop', payload)
       },



    },
    mutations: {



        dragAndDrop(state, payload) {
            let closestBlock = payload.event.target.closest('.block')
                borderEffect(payload.cardId)

               function addBlock(){
                   state.cards.push({id: Math.floor(Math.random() * 10000) , dropped: false, border: false, colorStatus: 'yellow', tittleText: 'This will be a text'})
                   console.log(state.cards)
               }

               function borderEffect(id){
                state.currentCardId = id;
                state.cards.forEach(card => {
                    card.border = card.id === id;
                })

               }


               function filterCard(id){
                   state.cards.forEach(card => {if (card.id === id) card.dropped = true})
                   addBlock();
               }


            const onmousedown = (event) => {

                let startPositionX = closestBlock.getBoundingClientRect().left
                let startPositionY = closestBlock.getBoundingClientRect().top


                let board = document.querySelector('.container-dashboard')
                let boardX =  board.getBoundingClientRect().left
                let boardY = board.getBoundingClientRect().top
                let boardBottom = board.getBoundingClientRect().bottom
                let boardRight = board.getBoundingClientRect().right





                let shiftX = event.clientX - closestBlock.getBoundingClientRect().left;
                let shiftY = event.clientY - closestBlock.getBoundingClientRect().top;

                closestBlock.style.position = 'absolute';

                document.querySelector('.container-dashboard').append(closestBlock);

                moveAt(event.pageX, event.pageY);

                function checkPositionOfBlock() {
                    let currentPosX = closestBlock.getBoundingClientRect().left
                    let currentPosY = closestBlock.getBoundingClientRect().top
                    let currentBottomX = closestBlock.getBoundingClientRect().bottom
                    let currentRightY = closestBlock.getBoundingClientRect().right

                    if (boardX > currentPosX || boardY > currentPosY || currentBottomX > boardBottom ||
                    boardRight < currentRightY
                    ) {
                        closestBlock.style.left = startPositionX + 'px'
                        closestBlock.style.top = startPositionY + 'px'

                    } else {
                        closestBlock.classList.add('dropped');
                       if (!payload.cardDropped) filterCard(payload.cardId)
                    }
                }



                function moveAt(pageX, pageY) {
                    closestBlock.style.left = pageX - shiftX + 'px';
                    closestBlock.style.top = pageY - shiftY + 'px';
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }


                document.addEventListener('mousemove', onMouseMove);


                closestBlock.onmouseup = function() {
                    closestBlock.removeEventListener('mousedown', onmousedown)
                    document.removeEventListener('mousemove', onMouseMove);
                    closestBlock.onmouseup = null;
                   checkPositionOfBlock()

                };
            }


            const trigger = (eventTrigger) => {

                if (eventTrigger.target.classList.contains('block')) {

                        closestBlock.removeEventListener('mousedown', trigger)
                    if (state.currentCardId === payload.cardId)   onmousedown(eventTrigger)

                }
                else {
                    closestBlock.removeEventListener('mousedown', trigger)
                    changeWidth(eventTrigger)
                }


            }


            const minimum_size = 20;
            let original_width = 0;
            let original_x = 0;
            let original_mouse_x = 0;

            const changeWidth = (e) => {



                original_width = parseFloat(getComputedStyle(closestBlock, null).getPropertyValue('width').replace('px', ''));
                original_x = closestBlock.getBoundingClientRect().left;
                original_mouse_x = e.pageX;

                const resize = (event) => {
                    if (e.target.className === 'block-arrow-right') {
                        closestBlock.style.width = event.pageX - closestBlock.getBoundingClientRect().left + 'px'
                    }
                    if (e.target.className === 'block-arrow-left') {

                        const width = original_width - (event.pageX - original_mouse_x)
                        if (width > minimum_size) {
                            closestBlock.style.width = width + 'px'
                            closestBlock.style.left = original_x + (event.pageX - original_mouse_x) + 'px'
                        }
                    }
                }

                document.addEventListener('mousemove', resize)

                document.onmouseup = () => {
                    document.removeEventListener('mousemove', resize)
                    closestBlock.onmouseup = null

                }
                closestBlock.onmouseup = () => {
                    document.removeEventListener('mousemove', resize)
                    closestBlock.onmouseup = null


                }
            }

                closestBlock.addEventListener('mousedown', trigger)


        },

        mutateCoordinatesOfPoints(state){
          let arrayOfAllPoints = []
          function getCoords(elem) {
              let box = elem.getBoundingClientRect();

              return {
                  top: box.top + window.pageYOffset,
                  right: box.right + window.pageXOffset,
                  bottom: box.bottom + window.pageYOffset,
                  left: box.left + window.pageXOffset
              };
          }

          let allPoints = document.querySelectorAll('.point');
          allPoints.forEach(point => {
              arrayOfAllPoints.push({x: getCoords(point).left, y: getCoords(point).top })
          })
           state.points = lodash.chunk(arrayOfAllPoints, 18)

      }


    },

    state: {
      doctors: [
          {name: 'Ivan', surname: 'Noname'},
          {name: 'Petro', surname: 'Noname'},
          {name: 'Vasiliy', surname: 'Noname'},
          {name: 'Ivan', surname: 'Noname'},
          {name: 'Petro', surname: 'Noname'},
          {name: 'Vasiliy', surname: 'Noname'},
      ],
        points: [],
        cards: [{id: 1, dropped: false, border: false, colorStatus: 'yellow', tittleText: 'Some text for card'}],
        currentCardId: null,

    },
    getters: {
        getDoctors(state) {
            return state.doctors
        },
        getAllPoints(state){
            return state.points
        },
        getCards(state) {
            return state.cards
        }

    }
}