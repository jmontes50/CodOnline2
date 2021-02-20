//fetch(endpoint)
fetch("https://reqres.in/api/users?page=2")//get
.then((respuesta) => {
  // console.log(respuesta)
  return respuesta.json() //retorno una nueva promesa
})
.then((misUsuarios) => {
  console.log(misUsuarios)
})
