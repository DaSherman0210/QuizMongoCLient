# Proyecto Awesome API 🚀

¡Bienvenido a la API del Proyecto Awesome! Aquí encontrarás una breve descripción de los endpoints disponibles y los pasos necesarios para poner en marcha el proyecto.

## Configuración inicial

Antes de comenzar, asegúrate de seguir estos pasos:

1. Clona este repositorio en tu máquina local.

2. Crea un archivo `.env` en la raíz del proyecto y configura las variables de entorno necesarias. Puedes utilizar `.env.example` como referencia.

3. Ejecuta `npm install` en la consola para instalar las dependencias del proyecto.

## Endpoints 🛣️

### GET Endpoints

- 🚶‍♂️ `/endpoint1`: Obtener pacientes alfabeticamente.
- 🚶‍♀️ `/endpoint2`: Obtener citas de uan fecha especifica.
- 🚶‍♂️ `/endpoint3`: Obtener medicos de una especialidad.
- 🚶‍♀️ `/endpoint4`: Encontrar proxima cita de un paciente.
- 🚶‍♂️ `/endpoint6`: Obtener las citas de un dia en especifico.
- 🚶‍♀️ `/endpoint7`: Obtener los medicos con los consultorios.
- 🚶‍♂️ `/endpoint8`: Contar numero de citas de un medico en un dia.
- 🚶‍♂️ `/endpoint9`: Obtener consultorios x paciente.

### POST Endpoints

- ✉️ `/acudientes`: Agregar los 10 acudientes. 
- ✉️ `/citas`: Agregar las 10 citas. 
- ✉️ `/consultorios`: Agregar los 10 consultorios. 
- ✉️ `/especialidad`: Agregar las 10 especialidades. 
- ✉️ `/generos`: Agregar los generos. 
- ✉️ `/medicos`: Agregar los 10 medicos. 
- ✉️ `/tipo_documento`: Agregar los tipos de documentos.  
- ✉️ `/usuarios`: Agregar los 10 usuarios. 

## Ejecución

Una vez que hayas configurado tu archivo `.env` y hayas instalado las dependencias con `npm install`, puedes ejecutar el proyecto usando:

```bash

npm start
