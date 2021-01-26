//1. va a recibir el nombre, dni, fecha, carrito, total para luego enviarlo a mockapi
function enviarBoleta(nombre,dni,fecha,carrito,total){
    //2. necesito crear un objeto con el formato que tiene mockapi pero con los datos que estoy recibiendo en la función
    //necesito que se un objeto para enviarlo
    let objBoleta = {
        //tiene que tener el formato de mockapi
        nombre_pedido:nombre,
        dni_pedido:dni,
        fecha_pedido:fecha,
        platillos_pedido:carrito,
        total_pedido:total
    }
    //3. creamos el asistente que me va a permitir hacer la petición y avisarme cuando ya este listo
    let asistente = new XMLHttpRequest();
    //3.1 este objeto/asistente va a tener un evento que es readystatechange, es como cuando nos dan un codigo de aliexpress y con eso podemos hacer seguimiento del estado
    asistente.addEventListener("readystatechange",function(){
        //3.2 este evento va a cambiar la propiedad de mi asistente readyState que va del 1 al 4, 4 cuando ya tengo la respuesta de la petición hecha a mockapi
        console.log(asistente.readyState)
        if(asistente.readyState === 4){
            //3.3 la propiedad responseText es la que tiene la respuesta de mockapi
            console.log(asistente.responseText)
        }
    })

     //4. configurar el request a mockapi, el metodo HTTP y hacia donde voy a enviar mi petición .open(METODO,URL)
     asistente.open("POST", "https://600f6a6c6c21e1001704eaf0.mockapi.io/pedidos")
     //4.1 configurar mis headers (guia de remision)
     //vamos a indicar que estamos enviando, en este caso un JSON
     asistente.setRequestHeader("Content-type","application/json")
     //4.2 al mandar ya mandamos nustro objBoleta, pero como tenemos que mandarlo en un formato JSON, lo transformaremos de objeto a texto con JSON.stringify
     let objAJSON = JSON.stringify(objBoleta)
     //Ya transformado lo enviamos
     asistente.send(objAJSON)
}