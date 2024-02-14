module.exports = function () {
  var data = {
    authors: [
      {
        id:1,
        nameAuthor: "Luis Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"lperez@gmail.com",
      },
      {
        id:2,
        nameAuthor: "Ana Déz Reyes",
        birthDateAuthor: "1980-10-10",
        emailAuthor:"adiaz@gmail.com",
      },
      {
        id:3,
        nameAuthor: "Gerardo Santillén Reyes",
        birthDateAuthor: "2002-06-05",
        emailAuthor:"gsreyes@gmail.com",
      },
      {
        id:4,
        nameAuthor: "Juana Pérez Reyes",
        birthDateAuthor: "2000-09-10",
        emailAuthor:"jperez@gmail.com",
	}
    ],
    books:[
      {
        id: 1,
        nameBook: "Las leyes",
	   nHojas: "145",
        publicationDateAuthor: "2022-09-09",
        author:
        {
          id:1,
          nameAuthor: "Luis Pérez Reyes",
          birthDateAuthor: "2000-09-10",
          emailAuthor:"lperez@gmail.com",
        }
      },
    ],
    Damnificados:[
      {
        id:1,
        dni: 17643952,
        nombres: "Luisa",
        apellidos: "García González",
        edad: 28,
        peso: 58,
        telefono:  912345678,
        contrasena: "ContraseñaSegura123",
        correo: "luisa.garcia@hotmail.com"
      },
      {
        id:2,
        dni: 24891368,
        nombres: "Carlos",
        apellidos: "Martínez López",
        edad: 42,
        peso: 72,
        telefono: 5512345678,
        contrasena: "qW3rTy5uIop",
        correo: "carlos.martinez@gmail.com"
      },
      {
        id:3,
        dni: 78653290,
        nombres: "Ana",
        apellidos: "Fernández García",
        edad: 19,
        peso: 54,
        telefono:  212345678,
        contrasena: "MiContraseña123",
        correo: "ana.fernandez@upc.edu.pe"
      },
      {
        id:4,
        dni: 72509744,
        nombres: "Michael Andre",
        apellidos: "Cuadros Ccahuana",
        edad:21,
        peso:69,
        telefono:445645,
        contrasena:"HolaQuePex",
        correo:"Eclipse_lunarg@gmail.com"

      },
      {
        id:5,
        dni: 725644,
        nombres: "Franco Enrique",
        apellidos: "Huaman Risco",
        edad:10,
        peso:65,
        telefono:445645,
        contrasena:"codigo_21",
        correo:"peru_chile@hotmail.com"
      }
    ],
    Tipos_de_caso:[
      {
        id: 1,
        nombre: "Grave",
        descripcion: "Este caso es grave, ya que hay personas heridas"
      },
      {
        id: 2,
        nombre: "Urgente",
        descripcion: "Hay personas en el hospital en el área de urgencias"
      },
      {
        id: 3,
        nombre: "Emergencia",
        descripcion: "Hay personas en el hospital en el área de emergencia"
      },
    ],
    ubicaciones:[
      {
        id:1,
        departamento:"Lima",
        distrito:"Rimac",
        direccion:"Puente nuevo av.21"
      },
      {
        id:2,
        departamento:"Lima",
        distrito:"Rimac",
        direccion:"Viru Rio Rimac av.12 cuadra20"
      },
    ],


    Donadores:[{
      id:0,
      dni: 725644,
      nombres: "Franco Enrique",
      apellidos: "Huaman Risco",
      edad:10,
      telefono:445645,
      contrasena:"codigo_21",
      correo:"peru_chile@hotmail.com",
      ong:false
    },
    {
      id:1,
      dni: 45156415,
      nombres: "Tony",
      apellidos: "Montana",
      edad:29,
      telefono:9944564,
      contrasena:"codigo_20",
      correo:"Tony_el_papi_montana@hotmail.com",
      ong:false
    },
  ],

     cuentabancarias:[
      {
      id:0,
      numero: 465465456456455,
      cvv: 455,
      vencimiento: "2000-09-10"
     },
     {
      id:1,
      numero: 445122456456455,
      cvv: 725,
      vencimiento: "2030-05-11"
     }
    ],
    offers:[
      {
     id:0,
     title: "Oferta 1",
    description:"Oferta 1: 1 mes gratis en el gym si te descargas la app",
     points: 5,
     businessId:1
    },
    {
      id:2,
      title: "Oferta 2",
     description:"Oferta 2: Corre por 50 runpoints",
      points: 5,
      businessId:2
     },
  ]

  }
  return data
}
