
// OBJETO LITERAL 
    //instancia del prototipo nativo Object

const natalia = {
  //ATRIBUTOS
    name: "natalia",
    ege: 20,
    cursosAprobados: [
        "Curso definitivo de HTML y CSS",
        "Curso practico de HTML y CSS",
    ],
  //METODOS
    aprobarCurso (nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
};
console.log(natalia);

//hacer que natalia apruebe otro curso

natalia.cursosAprobados.push("Curso basico de JS");
//para actualizar algun valor de un objeto literal,
//usamos objetoliteral. (objeto+punto+llave del valor)
//si es un array, tambien podemos usar su metodo .push

natalia.name = "el pepe";
//para cambiar un valor solo accedemos con la llave
//y le asignamos un nuevo valor

//--------------------------------------------
//PODEMOS USAR SU METODO PARA AÑADIR UN CURSO APROVADO
//natalia.aprobarCurso("css grid"); 
//nombramos al metodo y lo ejecutamos (), pasandole los argumentos






///////////////////////////////////////////////////



   //PROTOTIPO  E INSTANCIA DE PROTOTIPO


//PROTOTIPO (molde)
//este es el prototipo, para crear los atributos
//usamos this.
function Student(name,age, aproved){
    this.name = name;
    this.age = age;
    this.aproved = aproved;
    // this.function (nuevoCurso){
    //     this.cursosAprovados.push(nuevoCurso)
    // }
}

//#Tambien podemos crear los metodos dentro de la función
//con this.funciton(param){...}







//METODOS
//Para añadirle metodos al protoripo Student
//podemos agregarle mas de estos METODOS

//las instancias heredaran estos metodos que les creemos
Student.prototype.aprovarCurso = function (nuevoCurso){
    this.aproved.push(nuevoCurso)
}





//INSTANCIA
//instanciamos objetos con la palabra reservada new
//y el nombre del prototipo

//le mandamos los valores que tendra nuestro objeto
//como argumentos, en orden.
const juanita = new Student(
    "Juanita",
    15,
    [
        "introduccion a los videojuegos",
        "creacion de personajes"
    ]
)





//USANDO LOS METODOS
//ahora podemo hacer uso del metodo que tiene la instancia
//que sirve para hacer push de un curso mas aprovado

juanita.aprovarCurso("Curso de Unreal Engine")

