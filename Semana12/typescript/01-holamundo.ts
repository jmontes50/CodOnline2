let platillo = "Chifa con Wantan"

console.log(platillo)

//tipado

let texto:string = "Sopa Wantan"

// texto = 9000 //no puedo asignar un tipo incorrecto según el tipo de dato que indiquemos

let cantidad:number = 10

let ganasdeestudiar:boolean = true

let misnumeritos:Array<number> = [10,20,50,100,7000]

let random:any = {Nombre:'Luna'}

//FUNCIONES

let sumar = (num1:number, num2:number):number => {
  return num1 + num2
} 

sumar(10, 50)

