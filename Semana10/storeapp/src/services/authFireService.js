import fire from '../config/Firebase'

//registrar
const registroFire = (email, password) => {
  // return new Promise ((resolve, reject) => {
  //   fire.auth().createUserWithEmailAndPassword(email, password)
  //   .then((u) => {
  //     console.log(u)
  //     resolve("Usuario Creado")
  //   })
  //   .catch((error) => {
  //     reject(`Error al crear nuevo usuario: ${error}`)
  //   })
  // })
  return fire.auth().createUserWithEmailAndPassword(email, password) //resolve/reject firebase
}

//ingresar
const loginFire = (email, password) => {
  return fire.auth().signInWithEmailAndPassword(email, password)
}

//salir - logout
const logoutFire = () => {
  return fire.auth().signOut()
}

export {
  registroFire,
  loginFire,
  logoutFire
}