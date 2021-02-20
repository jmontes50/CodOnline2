//import axios from 'axios'
const axios = require('axios')
// //los metodos de axios me devuelven promesas
// axios.get("https://reqres.in/api/users?page=2")
// .then(respuesta => {
//   console.log(respuesta.data)
// })

const hacerPeticion = async () => {
  let response = await axios.get('https://reqres.in/api/users?page=2')
  console.log(response.data)
}

hacerPeticion()