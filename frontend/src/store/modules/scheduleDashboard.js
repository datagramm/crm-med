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

            const changeWidth = (event) => {
                let shiftX = event.clientX - closestBlock.getBoundingClientRect().left;


                closestBlock.style.position = 'absolute';
                closestBlock.style.zIndex = 1000;
                document.querySelector('.container-dashboard').append(closestBlock);

                moveAt(event.pageX, event.pageY);

                // переносит мяч на координаты (pageX, pageY),
                // дополнительно учитывая изначальный сдвиг относительно указателя мыши
                function moveAt(pageX) {
                    closestBlock.style.width = pageX - shiftX + 'px';

                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }

                // передвигаем мяч при событии mousemove
                document.addEventListener('mousemove', onMouseMove);

                // отпустить мяч, удалить ненужные обработчики
                closestBlock.onmouseup = function() {
                    closestBlock.removeEventListener('mousedown', changeWidth)
                    document.removeEventListener('mousemove', onMouseMove);
                    closestBlock.removeEventListener('mousemove', onMouseMove);
                    closestBlock.onmouseup = null;


                };

            }

            const trigger = (event) => {
                if (event.target.className === 'block' || event.target.className === 'block shake') {
                    closestBlock.removeEventListener('mousedown', trigger)
                    onmousedown(event)
                }
                else {
                    closestBlock.removeEventListener('mousedown', trigger)
                    changeWidth(event)
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