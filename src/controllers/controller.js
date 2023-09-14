import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_URI7878;
const nombreDB = "Microservicio";

const client = new MongoClient(mongoURI);
await client.connect();
const db = client.db(nombreDB);

//* Seleccion de collecion

const Acudientes = db.collection("Acudientes");
const Citas = db.collection("Citas");
const Consultorios = db.collection("Consultorios");
const Especialidad = db.collection("Especialidad");
const Generos = db.collection("Generos");
const Medicos = db.collection("Medicos");
const Tipo_documentos = db.collection("Tipo_documentos");
const Usuarios = db.collection("Usuarios");

//* Aca empiezan los endpoints

const postAcudientes = async (req, res) => {
   try {
      const query = [
         { codigo: 1, nombreCompleto: "Francisca martinez", telefono: 34773632, direccion: "casa 1" },
         { codigo: 2, nombreCompleto: "Andres Lopez", telefono: 98043278, direccion: "casa 2" },
         { codigo: 3, nombreCompleto: "Amed pinzon", telefono: 4654565654, direccion: "casa 3" },
         { codigo: 4, nombreCompleto: "gerardo diaz", telefono: 2312134356, direccion: "casa 4" },
         { codigo: 5, nombreCompleto: "andres rincon", telefono: 32544733567, direccion: "casa 5" },
         { codigo: 6, nombreCompleto: "yedher pineda", telefono: 2314344325, direccion: "casa 6" },
         { codigo: 7, nombreCompleto: "bernal jurado", telefono: 12443654, direccion: "casa 7" },
         { codigo: 8, nombreCompleto: "karoll rojas", telefono: 54326576, direccion: "casa 8" },
         { codigo: 9, nombreCompleto: "gloria caly", telefono: 5436576687, direccion: "casa 9" },
         { codigo: 10, nombreCompleto: "carlitos flores", telefono: 43754865882, direccion: "casa 10" },
      ]
      await Acudientes.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postCitas = async (req, res) => {
   try {
      const query = [
         { codigo: 1, fecha: "2023-09-14", estadoCita: "en curso", medico: "Maria", usuario: 1 },
         { codigo: 2, fecha: "2022-05-20", estadoCita: "cancelada", medico: "jesus", usuario: 2 },
         { codigo: 3, fecha: "2024-01-15", estadoCita: "programada", medico: "gerardo", usuario: 5 },
         { codigo: 4, fecha: "2021-08-10", estadoCita: "confirmada", medico: "andres", usuario: 1 },
         { codigo: 5, fecha: "2023-09-14", estadoCita: "atendida", medico: "vermen", usuario: 3 },
         { codigo: 6, fecha: "2019-04-05", estadoCita: "atendida", medico: "luis", usuario: 8 },
         { codigo: 7, fecha: "2023-10-25", estadoCita: "en curso", medico: "camilo", usuario: 6 },
         { codigo: 8, fecha: "2023-09-14", estadoCita: "confirmada", medico: "pedro", usuario: 9 },
         { codigo: 9, fecha: "2023-09-01", estadoCita: "atendida", medico: "roberto", usuario: 4 },
         { codigo: 10, fecha: "2023-09-20", estadoCita: "cancelada", medico: "hugo", usuario: 10 },
      ]
      await Citas.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postConsultorios = async (req, res) => {
   try {
      const query = [
         { codigo: 1, nombre: "consultorio 1" },
         { codigo: 2, nombre: "consultorio 2" },
         { codigo: 3, nombre: "consultorio 3" },
         { codigo: 4, nombre: "consultorio 4" },
         { codigo: 5, nombre: "consultorio 5" },
         { codigo: 6, nombre: "consultorio 6" },
         { codigo: 7, nombre: "consultorio 7" },
         { codigo: 8, nombre: "consultorio 8" },
         { codigo: 9, nombre: "consultorio 9" },
         { codigo: 10, nombre: "consultorio 10" },
      ]
      await Consultorios.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postEspecialidad = async (req, res) => {
   try {
      const query = [
         { nombre: "Cardiología" },
         { nombre: "Dermatología" },
         { nombre: "Gastroenterología" },
         { nombre: "Neurología" },
         { nombre: "Obstetricia y Ginecología" },
         { nombre: "Ortopedia" },
         { nombre: "Otorrinolaringología" },
         { nombre: "Pediatría" },
         { nombre: "Psiquiatría" },
         { nombre: "Urología" },
      ]
      await Especialidad.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postGeneros = async (req, res) => {
   try {
      const query = [
         { nombre: "Hombre", abreviatura: "H" },
         { nombre: "Mujer", abreviatura: "M" },
         { nombre: "No binario", abreviatura: "NB" }
      ]
      await Generos.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postMedicos = async (req, res) => {
   try {
      const query = [
         { matriculaProfesional: 930248097, nombreCompleto: "María Pérez", consultorio: "consultorio 1", especialidad: "Neurología" },
         { matriculaProfesional: 3243543543, nombreCompleto: "Juan Martínez", consultorio: "consultorio 2", especialidad: "Obstetricia y Ginecología" },
         { matriculaProfesional: 432232321, nombreCompleto: "Ana García", consultorio: "consultorio 5", especialidad: "Gastroenterología " },
         { matriculaProfesional: 3254364546, nombreCompleto: "Luis Rodríguez", consultorio: "consultorio 8", especialidad: "Cardiología" },
         { matriculaProfesional: 787967009, nombreCompleto: "Carmen López", consultorio: "consultorio 10", especialidad: "Otorrinolaringología" },
         { matriculaProfesional: 412432443254, nombreCompleto: "Pablo Fernández", consultorio: "consultorio 9", especialidad: "Ortopedia" },
         { matriculaProfesional: 465467658, nombreCompleto: "Laura González", consultorio: "consultorio 3", especialidad: "Psiquiatría" },
         { matriculaProfesional: 436576876, nombreCompleto: "Antonio Sánchez", consultorio: "consultorio 6", especialidad: "Urología" },
         { matriculaProfesional: 2341432325, nombreCompleto: "Isabel Ramírez", consultorio: "consultorio 4", especialidad: "Dermatología" },
         { matriculaProfesional: 354365778, nombreCompleto: "Carlos Torres", consultorio: "consultorio 7", especialidad: "Dermatología" },
      ]
      await Medicos.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postTipo_documentos = async (req, res) => {
   try {
      const query = [
         { nombre: "Cedula de Ciudadania", abreviatura: "CC" },
         { nombre: "Tarjeta de Identidad", abreviatura: "TI" },
         { nombre: " Cédula de Extranjería", abreviatura: "CE" },
         { nombre: "Pasaporte", abreviatura: "PP" }
      ]
      await Tipo_documentos.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}
const postUsuarios = async (req, res) => {
   try {
      const query = [
         { codigo: 1, nombre: "camilo", segundoNombre: "andres", primerApellido: "martinez", segundoApellido: "González", telefono: 4854395, direccion: "casa 1", email: "camilo@gmail.com", tipoDocumento: "TI", genero: "H", acudiente: "juan" },
         { codigo: 2, nombre: "juan", segundoNombre: "Alejandro", primerApellido: "duran", segundoApellido: "rodriguez", telefono: 390284328, direccion: "casa 2", email: "juan@gmail.com", tipoDocumento: "CC", genero: "M", acudiente: "andres" },
         { codigo: 3, nombre: "carlos", segundoNombre: "sofia", primerApellido: "cely", segundoApellido: "perez", telefono: 8473953, direccion: "casa 3", email: "carlos@gmail.com", tipoDocumento: "CE", genero: "H", acudiente: "francisco" },
         { codigo: 4, nombre: "andres", segundoNombre: "javier", primerApellido: "rincon", segundoApellido: "fernandez", telefono: 329423074032, direccion: "casa 4", email: "andres@gmail.com", tipoDocumento: "PP", genero: "NB", acudiente: "karoll" },
         { codigo: 5, nombre: "david", segundoNombre: "camila", primerApellido: "diaz", segundoApellido: "garcia", telefono: 84735743859, direccion: "casa 5", email: "david@gmail.com", tipoDocumento: "PP", genero: "H", acudiente: "andres" },
         { codigo: 6, nombre: "camila", segundoNombre: "valentina", primerApellido: "lopez", segundoApellido: "lopez", telefono: 92031421, direccion: "casa 6", email: "camila@gmail.com", tipoDocumento: "CC", genero: "M", acudiente: "josue" },
         { codigo: 7, nombre: "juancho", segundoNombre: "Andres", primerApellido: "fernandez", segundoApellido: "ramirez", telefono: 930245732, direccion: "casa 7", email: "juancho@gmail.com", tipoDocumento: "TI", genero: "M", acudiente: "yisus" },
         { codigo: 8, nombre: "carlitos", segundoNombre: "mateo", primerApellido: "Torres", segundoApellido: "Sanchez", telefono: 579307209, direccion: "casa 8", email: "carlitos@gmail.com", tipoDocumento: "CC", genero: "M", acudiente: "sanchez" },
         { codigo: 9, nombre: "vermen", segundoNombre: "isabella", primerApellido: "Quintero", segundoApellido: "torres", telefono: 3209432, direccion: "casa 9", email: "vermen@gmail.com", tipoDocumento: "CE", genero: "NB", acudiente: "carlitos" },
         { codigo: 10, nombre: "pedro", segundoNombre: "luciana", primerApellido: "Ramírez", segundoApellido: "garcia", telefono: 935943298, direccion: "casa 10", email: "pedro@gmail.com", tipoDocumento: "CE", genero: "H", acudiente: "amed" },
      ]
      await Usuarios.insertMany(query);
      res.json("Insertado con exito")
   } catch (error) {
      console.log(error);
   }
}


//? Obtener pacientes en forma alfabetica

const endpoint1 = async (req,res) =>{
   try {
      const data = await Usuarios.find().sort({nombre: 1}).toArray();
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//? Obtener las citas de una fecha especifica y ordenar los pacientes alfabeticamente

const endpoint2 = async (req,res) => {
   try {
      const query = {fecha: "2023-09-14"};
      const data = await Citas.find(query).sort({usuario: 1}).toArray(); 
      res.json(data);
   } catch (error) {
      console.log(error);
   }
}

//? Obtener todos los medicos de una especialidad

const endpoint3 = async (req,res)=>{
   try {
      const query =  {especialidad: /cardiologia/i}
      const data = await Medicos.find(query).toArray();
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//? Obtener la proxima cita por paciente 

const endpoint4 = async (req,res)=>{
   try {
      const query = {usuario: 1}
      const data = await Citas.find(query).sort({fecha: 1}).toArray();
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//? Encontrar pacientes que tienen con un medico



//? Encpontrar las citas de un dia especifico

const endpoint6 = async (req,res) => {
   try {
      const query = {fecha: "2021-08-10"}
      const data = await Citas.find(query).toArray();
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//? Obtener todos los medicos con sus consultorios

const endpoint7 = async (req,res) =>{
   try {
      const data = await Medicos.aggregate([
         {
           $lookup: {
             from: 'Consultorios',
             localField: 'consultorio',
             foreignField: 'nombre',
             as: 'consultorio',
           },
         },
         {
           $unwind: '$consultorio',
         },
         {
            $project: {
               "_id": 0,
              "nombreCompleto": 1,
              "consultorio.nombre": 1
            }
         },
         {
            $unwind: '$consultorio',
          },
       ]).toArray()
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//? Contar numero de citas  en un dia

const endpoint8 = async (req,res) =>{
   try {
      const medico = "Maria"; 
      const fechaEspecifica = "2023-09-14"; 

    const resultado = await Citas.aggregate([
      {
        $match: {
          medico: medico,
          fecha: fechaEspecifica
        }
      },
      {
        $group: {
          _id: null,
          totalCitas: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          totalCitas: 1
        }
      }
    ]).toArray();

    if (resultado.length > 0) {
      res.json(resultado[0]);
    } else {
      res.json({ totalCitas: 0 });
    }
      res.json(data)
   } catch (error) {
      console.log(error);
   }
}

//?Consultorio donde se realizo la cita de un paciente

const endpoint9 = async (req,res) =>{
   try {
      const data = await Citas.aggregate([
         {
            $lookup: {
              from: "Medicos",
              localField: "nombreCompleto",
              foreignField: "medico",
              as: "medico"
            }
         },
         {
            $unwind: "$medico"
         },
         {
            $lookup: {
              from: "Usuarios",
              localField: "usuario",
              foreignField: "codigo",
              as: "paciente"
            }
         },
         {
            $unwind: "$paciente"
         },
         {
            $match: {
               $expr:{
                  $eq: ["$usuario","$paciente.codigo"]
               }
            }
         },
         {
            $project: {
               "_id": 0,
               "medico.nombreCompleto": 1,
               "medico.consultorio": 1,
               "paciente.nombre": 1
            }
         }
       ]).toArray();
       res.json(data)
   } catch (error) {
      console.log(error);
   }
}

export { postAcudientes, postCitas, postConsultorios, postEspecialidad, postGeneros, postMedicos, postTipo_documentos, postUsuarios , endpoint1,endpoint2, endpoint3 , endpoint4, endpoint6, endpoint7, endpoint8, endpoint9}