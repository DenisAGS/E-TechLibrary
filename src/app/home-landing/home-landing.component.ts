import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

  currentIndex = 0;
  visibleLibros = 2; 

  libros = [
    {
      titulo: 'Filosofía para la era digital',
      autor: 'Calvo, Manuel',
      sinopsis: 'Manuel Calvo nos invita a reflexionar, desde la filosofía, en la idea de encontrar los mecanismos que nos ayuden a orientarnos en esta vorágine de cambios.',
      imagen: '../../assets/images/Libros/la era digital.png'
    },
    {
      titulo: 'La revolución de la esperanza',
      autor: 'Erich Fromm',
      sinopsis: 'Fromm analiza los rasgos esenciales de nuestra sociedad tecnológica y sus efectos sobre el hombre.',
      imagen: '../../assets/images/Libros/la revolucion.png'
    },
    {
      titulo: 'Filosofía para la era digital',
      autor: 'Calvo, Manuel',
      sinopsis: 'Manuel Calvo nos invita a reflexionar, desde la filosofía, en la idea de encontrar los mecanismos que nos ayuden a orientarnos en esta vorágine de cambios.',
      imagen: '../../assets/images/Libros/la era digital.png'
    },
    {
      titulo: 'La revolución de la esperanza',
      autor: 'Erich Fromm',
      sinopsis: 'Fromm analiza los rasgos esenciales de nuestra sociedad tecnológica y sus efectos sobre el hombre.',
      imagen: '../../assets/images/Libros/la revolucion.png'
    },
  ];


  mostrarLibro(index: number): void {
    this.currentIndex = index;
  }

  siguienteLibro(): void {
    const totalLibros = this.libros.length;
    this.currentIndex = (this.currentIndex + 1) % totalLibros;
  }

  libroAnterior(): void {
    const totalLibros = this.libros.length;
    this.currentIndex = (this.currentIndex - 1 + totalLibros) % totalLibros;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
