export class Usuario {
    _id?: number;
    nombre: string;
    apellido: string;
    edad: number;
    genero: string;
    correo: string;
    telefono: number;

    constructor(nombre: string, apellido: string, edad: number, genero: string, correo: string, telefono: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.genero = genero;
        this.correo = correo;
        this.telefono = telefono;
    }
}