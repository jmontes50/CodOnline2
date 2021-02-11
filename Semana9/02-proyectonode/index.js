//importo axios, como esta en los node_modules lo importo directamente
const axios = require('axios')

//utilizo el metodo .get que tiene axios para hacer una peticion
//similar a un fetch
axios.get("https://reqres.in/api/users?page=2")
.then(respuesta => {
  console.log(respuesta)
})
.catch(error => console.log(error))