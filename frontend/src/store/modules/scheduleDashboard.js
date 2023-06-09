import lodash from "lodash";

export default  {
    actions: {
        computeCoordinatesOfPoints(ctx){
            ctx.commit('mutateCoordinatesOfPoints')
        }

    },
    mutations: {
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