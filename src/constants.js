export const users = [
    {
        name: "Mariana",
        email: "mariana@hotmail.com",
        password: "mariana123",
    },
    {
        name: "Rodrigo Careveo",
        email: "rodri@hotmail.com",
        password: "rodri123"
    },
    {
        name: "Cloe",
        email: "admi@hotmail.com",
        password: "admin"
    },
]

export const categories = [
  {
    category: "Fantasy",
  },
  {
    category: "Terror",
  },
  {
    category: "Drama",
  },
  {
    category: "Fairy tales",
  },
  {
    category: "Classics",
  },
  {
    category: "Romance",
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
    category: "Fantasia",
    price: 322.0,
  },
  "5f4b5f7e8f428c6e8a62d5a2": {
    id: "5f4b5f7e8f428c6e8a62d5a2",
    name: "El señor de los anillos La comunidad del anillo",
    author: "J.R.R Tolkien",
    image: "/img/hary2_book.png",
    details:
      "Frodo Bolsón, un hobbit, hereda un anillo mágico con el poder de controlar el mundo. Junto con un grupo diverso, emprende un viaje para destruir el anillo y derrotar al malvado Sauron.",
    category: "Fantasía Épica",
    price: 229.0,
  },
  "5f4b5f7e8f428c6e8a62d5a3": {
    id: "5f4b5f7e8f428c6e8a62d5a3",
    name: "Los juegos del hambre",
    author: "Suzanne Collins",
    image: "/img/juegos_book.png",
    details:
      "Katniss Everdeen se ofrece como voluntaria para participar en los Juegos del Hambre, un evento televisado en el que jóvenes de diferentes distritos luchan hasta la muerte. Su objetivo es sobrevivir y proteger a su familia.",
    category: "Ciencia Ficción, Distopía",
    price: 119.0,
  },
  "5f4b5f7e8f428c6e8a62d5a4": {
    id: "5f4b5f7e8f428c6e8a62d5a4",
    name: "Harry Potter y el cáliz de fuego",
    author: "J.K Rowling",
    image: "/img/senor_book.png",
    details:
      "Harry es seleccionado para participar en el Torneo de los Tres Magos, una competencia peligrosa que pone a prueba su valentía y habilidades mágicas. Mientras tanto, el regreso de Lord Voldemort se vuelve cada vez más inminente.",
    category: "Fantasía",
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
