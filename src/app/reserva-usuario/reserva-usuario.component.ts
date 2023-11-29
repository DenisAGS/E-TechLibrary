import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserva-usuario',
  templateUrl: './reserva-usuario.component.html',
  styleUrls: ['./reserva-usuario.component.css']
})
export class ReservaUsuarioComponent implements OnInit {
  listas = [
    {
      isbn: '123456789',
      titulo: 'Angular para Principiantes',
      autor: 'Juan Pérez',
      tipo: 'Ebook',
      categoria: 'Programación',
      reservaDate: new Date(2023, 0, 1),
      status: 'Activo',
      selected: false
    },
    {
      isbn: '987654321',
      titulo: 'React en Acción',
      autor: 'Ana Gómez',
      tipo: 'Libro físico',
      categoria: 'Juvenil',
      reservaDate: new Date(2023, 2, 15),
      status: 'Activo',
      selected: false
    },
    {
      isbn: '567890123',
      titulo: 'Programación en Python',
      autor: 'María Rodríguez',
      tipo: 'Ebook',
      categoria: 'Historia',
      reservaDate: new Date(2023, 3, 10),
      status: 'Activo',
      selected: false
    },
    {
      isbn: '345678901',
      titulo: 'JavaScript Esencial',
      autor: 'Carlos Ramírez',
      tipo: 'Libro físico',
      categoria: 'Fantasía',
      reservaDate: new Date(2023, 6, 5),
      status: 'Activo',
      selected: false
    },
    {
      isbn: '789012345',
      titulo: 'Fundamentos de Ciencia de Datos',
      autor: 'Sofía Johnson',
      tipo: 'Ebook',
      categoria: 'Educación',
      reservaDate: new Date(2023, 9, 3),
      status: 'Activo',
      selected: false
    },
    {
      isbn: '111222333',
      titulo: 'Diseño Web Moderno',
      autor: 'Luis Torres',
      tipo: 'Libro físico',
      categoria: 'Juvenil',
      reservaDate: new Date(2023, 7, 12),
      status: 'Activo',
      selected: false
    }
];


  getStatusColor(status: string): string {
    switch (status) {
      case 'Activo':
        return 'text-green';
      case 'Pendiente':
        return 'text-blue';
      case 'Cancelado':
        return 'text-red';
      default:
        return '';
    }
  }

  reloadTable() {
    console.log('Tabla recargada');
  }
  constructor() { }

  ngOnInit(): void {
  }

}
