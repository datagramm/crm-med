import lodash from "lodash";

export default  {
    actions: {
        computeCoordinatesOfPoints(ctx){
            ctx.commit('mutateCoordinatesOfPoints')
        },
       dragAndDrop(ctx, event) {
            ctx.commit('dragAndDrop', event)
       }


    },
    mutations: {
        dragAndDrop(state, event) {
            let closestBlock = event.target.closest('.block')


            const onmousedown = (event) => {


                let shiftX = event.clientX - closestBlock.getBoundingClientRect().left;
                let shiftY = event.clientY - closestBlock.getBoundingClientRect().top;

                closestBlock.style.position = 'absolute';
                closestBlock.style.zIndex = 1000;
                document.querySelector('.container-dashboard').append(closestBlock);

                moveAt(event.pageX, event.pageY);

                // переносит мяч на координаты (pageX, pageY),
                // дополнительно учитывая изначальный сдвиг относительно указателя мыши
                function moveAt(pageX, pageY) {
                    closestBlock.style.left = pageX - shiftX + 'px';
                    closestBlock.style.top = pageY - shiftY + 'px';
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }

                // передвигаем мяч при событии mousemove
                document.addEventListener('mousemove', onMouseMove);

                // отпустить мяч, удалить ненужные обработчики
                closestBlock.onmouseup = function() {
                    closestBlock.removeEventListener('mousedown', onmousedown)
                    document.removeEventListener('mousemove', onMouseMove);
                    closestBlock.onmouseup = null;


                };
            }


            const trigger = (eventTrigger) => {
                if (eventTrigger.target.className === 'block' || eventTrigger.target.className === 'block shake') {
                    closestBlock.removeEventListener('mousedown', trigger)
                    onmousedown(eventTrigger)
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
        points: []
        ,
    },
    getters: {
        getDoctors(state) {
            return state.doctors
        },
        getAllPoints(state){
            return state.points
        }

    }
}