import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserNameComponent } from './user-name/user-name.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserNameComponent, PreguntasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username: string = '';

}
