interface iProducto {
  codigo:number
  nombre:string
  ingredientes:Array<string>

  mostrarInfo():void
}
//1 clase puede implementar una interface
class Producto implements iProducto {
  private _codigo:number
  public nombre:string
  public ingredientes:Array<string>
  //cuando definimos una propiedad con private, solo es accesible desde la misma clase
  private ingrediente_secreto:string

  constructor(codigo:number,nombre:string){
    this._codigo = codigo
    this.nombre = nombre
    this.ingredientes = []
    this.ingrediente_secreto = "Aceite de Ajonjolí"
  }

  //getters - obtenedores
  get codigo(){
    return this._codigo
  }

  //setters - establecedores
  set codigo(nuevoCodigo:number){
    this._codigo = nuevoCodigo
  }

  modificarSecreto(nuevoIngrediente:string){
    this.ingrediente_secreto = nuevoIngrediente
  }

  mostrarInfo(){
    
  }
}

let Chifa:Producto = new Producto(123, "Combinado 1")

//no podemos tocarla directamente
// Chifa.ingrediente_secreto = "Salsa de Soya"

console.log(Chifa.codigo)


