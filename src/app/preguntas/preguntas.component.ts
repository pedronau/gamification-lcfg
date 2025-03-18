import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-preguntas',
  imports: [],
  templateUrl: './preguntas.component.html',
  styleUrl: './preguntas.component.css'
})
export class PreguntasComponent {

  @Input() nombre?: string;

  numeroPregunta: number = 0;

  siguientePregunta() {
    this.numeroPregunta++;
  }

}
