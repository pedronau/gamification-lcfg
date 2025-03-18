import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { UserNameComponent } from './user-name/user-name.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserNameComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  username: string = '';

}
