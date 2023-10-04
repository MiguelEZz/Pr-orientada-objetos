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


//-------------------------------
//igual como creamos una clase estudiante, vamos a crear una clase
//para instanciar rutas de aprendizaje

class LearningPath {
    constructor({
        profes = [], 
        horasContenido,
        horasPractica,
        cursos = {}, 
    }){
        this.profes = profes;
        this.horasContenido = horasContenido;
        this.horasPractica = horasPractica;
        this.cursos = cursos;
    };
    agregarProfes(profe){
        this.profes.push(profe)
        console.log(this.cursos)
    }
};

const desarrolloWebFrontend = new LearningPath({
    profes: [
        "Diego de Granda",
        "Freddy Vega",
        "juan",
        "stefany",
    ],
    horasContenido: 30,
    horasPractica: 100,
    cursos : {
        Inicial: [
            "principios de la programacion",
            "fundamentos de html y css",
            "js basico"
        ],
        Medio: [
            "programacion orientada a objetos",
            "cdd grid",
            "animaciones con js"
        ],
        Avanzado: [
            "programacion funcional",
            "entorno laboral frontend"
        ]
    }
})

const desarrolloWebBackend = new LearningPath({
    profes: [
        "nicolas",
        "Freddy Vega",
        "juan",
        "stefany",
    ],
    horasContenido: 40,
    horasPractica: 150,
    cursos : {
        Inicial: [
            "principios de la programacion",
            "fundamentos del backend",
            "js basico",
            "python"
        ],
        Medio: [
            "programacion orientada a objetos",
            "librerias y frameworks",
            "base de datos don myEQL",
        ],
        Avanzado: [
            "consultas a una API avanzado",
            "entorno laboral Backend"
        ]
    }
})


