//ja diferencia de otros lenguajes orientado a objetos 
//que se basan en CLASES
//js está basado en PROTOTIPOS

//en js las clases son una sintaxis mas "amigable"
//para trabajar con prototipos

//las clases son prototipos en js, solo que con una sintaxis
//similar a las clases en otros lenguajes orientado a objetos





//Prototipos con la sintaxis de clases

//el CONSTRUCTOR es el que va a recibir los arguementos
// y va a crear los atributos  de la instancia

//fuera del CONSTRUCTOR vamos a colocar los METODOS que va 
//a heredar cada INSTANCIA.

class Student {
    constructor({
        name,
        age,
        aproved = [],   //podemos dejar valores defauld
        twitter,
        email,
    }){
        this.name = name;
        this.age = age;
        this.aproved = aproved;
        // this.function (nuevoCurso){
        //     this.cursosAprovados.push(nuevoCurso)
        // }
    }

    aprobarCurso(nuevoCursito){
        this.aproved.push(nuevoCursito)
    }
}

//-------------------------------------------
//RECORDAR ROR
//recive objetos retorna objetos
//para mandarle argumentos al constructor vamos a
//usar objetos {}
//ventajas: puedes mandar los argumentos en desorden
//llamando solo a la key 
//--------------------------------------------






//INSTANCIAR
//instanciamos de la misma manera que los prototipos nativos
//mandamos los ATRUBUTOS que tendra nuestro OBJ como argumentos.
const miguelito = new Student(
    {
    email:"elpepe@esotintin.coms",
    name:"pana Miguel",
    age : 3,
    aproved:[
        "analisis de negocios para ciendia de datos",
        "principios de visualizacion de datos para BI"
    ]}
)







//USANDO METODO DE LA INSTANCIA
miguelito.aprobarCurso("Videogames")

//el objeto heredo los metodos,
//ahora podemos pushear un curso mas usando el METODO.