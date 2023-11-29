import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras-usuario',
  templateUrl: './compras-usuario.component.html',
  styleUrls: ['./compras-usuario.component.css']
})
export class ComprasUsuarioComponent implements OnInit {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular para Principiantes',
      autor: 'Juan Pérez',
      tipo: 'Ebook',
      precio: '$200',
      categoria: 'Programación',
      compraDate: new Date(2023, 0, 1),

    },
    {
      isbn: '987654321',
      titulo: 'React en Acción',
      autor: 'Ana Gómez',
      tipo: 'Libro físico',
      categoria: 'Juvenil',
      precio: '$200',
      compraDate: new Date(2023, 2, 15),
    },
    {
      isbn: '567890123',
      titulo: 'Programación en Python',
      autor: 'María Rodríguez',
      tipo: 'Ebook',
      categoria: 'Historia',
      precio: '$200',
      compraDate: new Date(2023, 3, 10),
    },
    {
      isbn: '345678901',
      titulo: 'JavaScript Esencial',
      autor: 'Carlos Ramírez',
      tipo: 'Libro físico',
      categoria: 'Fantasía',
      precio: '$200',
      compraDate: new Date(2023, 6, 5),
    },
    {
      isbn: '789012345',
      titulo: 'Fundamentos de Ciencia de Datos',
      autor: 'Sofía Johnson',
      tipo: 'Ebook',
      precio: '$200',
      categoria: 'Educación',
      compraDate: new Date(2023, 9, 3),
    },
    {
      isbn: '111222333',
      titulo: 'Diseño Web Moderno',
      autor: 'Luis Torres',
      tipo: 'Libro físico',
      precio: '$200',
      categoria: 'Juvenil',
      compraDate: new Date(2023, 7, 12),
    }
];


mostrarCompra = false;
nuevoItem = {
  isbn: '',
  titulo: '',
  autor: '',
  tipo: '',
  precio: '',
  categoria: '',
  compraDate: new Date(),
};

  constructor() { }

  ngOnInit(): void {
  }

  toggleCompra(): void {
    this.mostrarCompra = !this.mostrarCompra;
    if (!this.mostrarCompra) {
      this.nuevoItem = {
        isbn: '',
        titulo: '',
        autor: '',
        tipo: '',
        precio: '',
        categoria: '',
        compraDate: new Date(),
      };
    }
  }
  
  compraItem(): void {
    this.listas.push({ ...this.nuevoItem });
    this.toggleCompra();
  }

}
