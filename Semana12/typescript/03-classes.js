//1 clase puede implementar una interface
class Producto {
    constructor(codigo, nombre) {
        this._codigo = codigo;
        this.nombre = nombre;
        this.ingredientes = [];
        this.ingrediente_secreto = "Aceite de Ajonjolí";
    }
    //getters - obtenedores
    get codigo() {
        return this._codigo;
    }
    //setters - establecedores
    modificarSecreto(nuevoIngrediente) {
        this.ingrediente_secreto = nuevoIngrediente;
    }
    mostrarInfo() {
    }
}
let Chifa = new Producto(123, "Combinado 1");
//no podemos tocarla directamente
// Chifa.ingrediente_secreto = "Salsa de Soya"
console.log(Chifa.codigo);
