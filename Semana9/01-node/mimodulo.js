const PI = 3.14159

const areacirculo = (radio) => {
  let area = PI * radio * radio
  return area
}

//EXPORTANDO COSAS PARA IMPORTARLAS EN OTRO ARCHIVO DE JS
exports.areacirculo = areacirculo
exports.pi = PI