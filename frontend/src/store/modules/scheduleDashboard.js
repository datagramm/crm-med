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



            const onmousedown = (event) => {
                console.log(event.target)
                let shiftX = event.clientX - event.target.getBoundingClientRect().left;
                let shiftY = event.clientY - event.target.getBoundingClientRect().top;

                event.target.style.position = 'absolute';
                // event.target.style.zIndex = 1000;
                document.body.append(event.target);

                moveAt(event.pageX, event.pageY);

                // переносит мяч на координаты (pageX, pageY),
                // дополнительно учитывая изначальный сдвиг относительно указателя мыши
                function moveAt(pageX, pageY) {
                    event.target.style.left = pageX - shiftX + 'px';
                    event.target.style.top = pageY - shiftY + 'px';
                }

                function onMouseMove(event) {
                    moveAt(event.pageX, event.pageY);
                }

                // передвигаем мяч при событии mousemove
                document.addEventListener('mousemove', onMouseMove);

                // отпустить мяч, удалить ненужные обработчики
                event.target.onmouseup = function() {
                    event.target.removeEventListener('mousedown', onmousedown)
                    document.removeEventListener('mousemove', onMouseMove);
                    event.target.onmouseup = null;


                };
            }

            if (event.target.className === 'block') {
                console.log('its working')
                event.target.addEventListener('mousedown', onmousedown)
            }



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