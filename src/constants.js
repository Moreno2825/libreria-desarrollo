export const users = [
  {
      id: 1,
      name: "Mariana",
      lastName: "martin",
      email: "mariana@hotmail.com",
      password: "mariana123",
      name: "Marianaaaa",
      libros: 1
  },
  {
      id: 2,
      name: "Rodrigo Careveo",
      lastName: "martin",
      email: "rodri@hotmail.com",
      password: "rodri123",
      libros: 1
  },
  {
      id: 3,
      name: "Cloe",
      lastName: "martin",
      email: "admi@hotmail.com",
      password: "admi",
      libros: 1
  },
]

export const compra = [
//   {
// <<<<<<< HEAD
//       idUser: 1,
//       book: 'Harry potter y el prisionero de Azkaban',
//       price: 322.00
// =======
//     id: '1',
//     category: "Ficción",
// >>>>>>> develop
//   },

//   {
// <<<<<<< HEAD
//       idUser: 2,
//       book: 'Los juegos del hambre',
//       price: 322.00
// =======
//     id: '2',
//     category: "Clásicos",
// >>>>>>> develop
//   },

  {
// <<<<<<< HEAD
//       idUser: 1,
//       book: 'El señor de los anillos La comunidad del anillo',
//       price: 322.00
//   }
// ]


// export const book = {
//   '5f4b5f7e8f428c6e8a62d5a1':{
//       id: '5f4b5f7e8f428c6e8a62d5a1',}}
// =======
    id: '3',
    category: "Thriller",
  },
  {
    id: '4',
    category: "Romance",
  },
  {
    id: '5',
    category: "Ciencia",
  },
  {
    id: '6',
    category: "Infantil",
  },
];

export const book = {
  "5f4b5f7e8f428c6e8a62d5a1": {
    id: "5f4b5f7e8f428c6e8a62d5a1",
    name: "Harry potter y el prisionero de Azkaban",
    author: "J.K Rowling",
    image: "/img/harry_book.png",
    details:
      "El tercer año de estudios de Harry en Hogwarts se ve amenazado por la fuga de Sirius Black de la prisión de Azkaban. Al parecer, se trata de un peligroso mago que fue cómplice de Lord Voldemort y que intentará vengarse de Harry Potter.",
    category: "Ficción",
    price: 322.0,
  },
  "5f4b5f7e8f428c6e8a62d5a2": {
    id: "5f4b5f7e8f428c6e8a62d5a2",
    name: "El señor de los anillos La comunidad del anillo",
    author: "J.R.R Tolkien",
    image: "/img/hary2_book.png",
    details:
      "Frodo Bolsón, un hobbit, hereda un anillo mágico con el poder de controlar el mundo. Junto con un grupo diverso, emprende un viaje para destruir el anillo y derrotar al malvado Sauron.",
    category: "Clásicos",
    price: 229.0,
  },
  "5f4b5f7e8f428c6e8a62d5a3": {
    id: "5f4b5f7e8f428c6e8a62d5a3",
    name: "Los juegos del hambre",
    author: "Suzanne Collins",
    image: "/img/juegos_book.png",
    details:
      "Katniss Everdeen se ofrece como voluntaria para participar en los Juegos del Hambre, un evento televisado en el que jóvenes de diferentes distritos luchan hasta la muerte. Su objetivo es sobrevivir y proteger a su familia.",
    category: "Thriller",
    price: 119.0,
  },
  "5f4b5f7e8f428c6e8a62d5a4": {
    id: "5f4b5f7e8f428c6e8a62d5a4",
    name: "Harry Potter y el cáliz de fuego",
    author: "J.K Rowling",
    image: "/img/senor_book.png",
    details:
      "Harry es seleccionado para participar en el Torneo de los Tres Magos, una competencia peligrosa que pone a prueba su valentía y habilidades mágicas. Mientras tanto, el regreso de Lord Voldemort se vuelve cada vez más inminente.",
    category: "Romance",
    price: 249.0,
  },
};

export const shopping = [
  {
    product: book["5f4b5f7e8f428c6e8a62d5a1"],
    quantity: "2",
    totalPrice: "$ 123.00"
  },
  {
    product: book["5f4b5f7e8f428c6e8a62d5a2"],
    quantity: "3",
    totalPrice: "$ 334.00"
  }
];

export const history = [
  {
    product: book["5f4b5f7e8f428c6e8a62d5a1"],
    date: "21 oct. 2023",
    quantity: "2",
    totalPrice: "$ 123.00"
  },
  {
    product: book["5f4b5f7e8f428c6e8a62d5a2"],
    date: "25 oct. 2023",
    quantity: "3",
    totalPrice: "$ 334.00"
  }
];