import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo-usuario',
  templateUrl: './catalogo-usuario.component.html',
  styleUrls: ['./catalogo-usuario.component.css']
})
export class CatalogoUsuarioComponent implements OnInit {

  categoriaSeleccionada: string = 'todos';

  libros = [
    { titulo: 'Atlas de mexico', autor: 'Gobierno', categoria: 'historia', imagen: 'assets/images/Libros/atlas de  mexico.jpg' },
    { titulo: 'Atlas geografia universal', autor: 'Gobierno', categoria: 'historia', imagen: 'assets/images/Libros/atlas geografia general universal.jpg'},
    { titulo: 'Calvino', autor: 'Italo', categoria: 'juvenil', imagen: 'assets/images/Libros/calvino.jpg' },
    { titulo: '¿Como nos arreglamos?', autor: 'Ernesto canales santos', categoria: 'juvenil', imagen: 'assets/images/Libros/como nos arreglamos.jpg' },
    { titulo: 'Mi portada del libro', autor: 'Gobierno', categoria: 'juvenil', imagen: 'assets/images/Libros/el caballero astado.jpg' },
    { titulo: 'El codigo de Da vinci', autor: 'Dan Brown', categoria: 'educacion', imagen: 'assets/images/Libros/el codigo da vinci.jpg'},
    { titulo: 'La era digital', autor: 'Manuel Calvo', categoria: 'educacion', imagen: 'assets/images/Libros/la era digital.png' },
    { titulo: 'La revolucion', autor: 'Erick', categoria: 'historia', imagen: 'assets/images/Libros/la revolucion.png' },
    { titulo: 'Las palabras vuelven', autor: 'Luis Rogelio Nogueras', categoria: 'juvenil', imagen: 'assets/images/Libros/las palabras vuelven.jpg' },
    { titulo: 'Libro integrado', autor: 'Gobierno', categoria: 'educacion', imagen: 'assets/images/Libros/libro integrado.jpg'},
    { titulo: 'Red queen', autor: 'Victoria Aveyard', categoria: 'fantasia', imagen: 'assets/images/Libros/red queen.jpg' },
    { titulo: 'Todas las hadas del reino', autor: 'Laura Gallego', categoria: 'fantasia', imagen: 'assets/images/Libros/todas las hadas del reino.jpg' },
    { titulo: 'Yo soy malala', autor: 'Malala Yousafzai', categoria: 'historia', imagen: 'assets/images/Libros/yo soy malala.jpg' },
  ];

  filtrarPorCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
