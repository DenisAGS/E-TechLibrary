import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-lista-usuario',
  templateUrl: './mi-lista-usuario.component.html',
  styleUrls: ['./mi-lista-usuario.component.css']
})
export class MiListaUsuarioComponent implements OnInit {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular para Principiantes',
      autor: 'Juan Pérez',
      tipo: 'Ebook',
      categoria: 'Programación',
      adquisicionDate: new Date(2023, 0, 1),
      finalizacionDate: new Date(2023, 1, 1),
      devueltaDate: new Date(),
      status: 'Activo'
    },
    {
      isbn: '987654321',
      titulo: 'React en Acción',
      autor: 'Ana Gómez',
      tipo: 'Libro físico',
      categoria: 'Juvenil',
      adquisicionDate: new Date(2023, 2, 15),
      finalizacionDate: new Date(2023, 4, 1),
      devueltaDate: new Date(),
      status: 'Devuelto'
    },
    {
      isbn: '567890123',
      titulo: 'Programación en Python',
      autor: 'María Rodríguez',
      tipo: 'Ebook',
      categoria: 'Historia',
      adquisicionDate: new Date(2023, 3, 10),
      finalizacionDate: new Date(2023, 5, 20),
      devueltaDate: new Date(),
      status: 'Vencido'
    },
    {
      isbn: '345678901',
      titulo: 'JavaScript Esencial',
      autor: 'Carlos Ramírez',
      tipo: 'Libro físico',
      categoria: 'Fantasía',
      adquisicionDate: new Date(2023, 6, 5),
      finalizacionDate: new Date(2023, 8, 15),
      devueltaDate: new Date(),
      status: 'Activo'
    },
    {
      isbn: '789012345',
      titulo: 'Fundamentos de Ciencia de Datos',
      autor: 'Sofía Johnson',
      tipo: 'Ebook',
      categoria: 'Educación',
      adquisicionDate: new Date(2023, 9, 3),
      finalizacionDate: new Date(2024, 0, 10),
      devueltaDate: new Date(),
      status: 'Devuelto'
    },
    {
      isbn: '111222333',
      titulo: 'Diseño Web Moderno',
      autor: 'Luis Torres',
      tipo: 'Libro físico',
      categoria: 'Juvenil',
      adquisicionDate: new Date(2023, 7, 12),
      finalizacionDate: new Date(2023, 9, 30),
      devueltaDate: new Date(),
      status: 'Activo'
    },
    {
      isbn: '444555666',
      titulo: 'Introducción a la Inteligencia Artificial',
      autor: 'Elena Morales',
      tipo: 'Ebook',
      categoria: 'Historia',
      adquisicionDate: new Date(2023, 4, 20),
      finalizacionDate: new Date(2023, 6, 5),
      devueltaDate: new Date(),
      status: 'Devuelto'
    },
    {
      isbn: '777888999',
      titulo: 'Aventuras en el Espacio Exterior',
      autor: 'Pedro Castillo',
      tipo: 'Libro físico',
      categoria: 'Fantasía',
      adquisicionDate: new Date(2023, 2, 8),
      finalizacionDate: new Date(2023, 3, 25),
      devueltaDate: new Date(),
      status: 'Vencido'
    },
    {
      isbn: '101112131',
      titulo: 'Machine Learning para Todos',
      autor: 'Ana Martínez',
      tipo: 'Ebook',
      categoria: 'Educación',
      adquisicionDate: new Date(2023, 10, 1),
      finalizacionDate: new Date(2023, 11, 15),
      devueltaDate: new Date(),
      status: 'Activo'
    }
];

getStatusColor(status: string): string {
    switch (status) {
      case 'Activo':
        return 'text-green';
      case 'Devuelto':
        return 'text-blue';
      case 'Vencido':
        return 'text-red';
      default:
        return '';
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
