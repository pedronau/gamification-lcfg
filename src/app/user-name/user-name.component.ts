import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-name',
  imports: [FormsModule],
  templateUrl: './user-name.component.html',
  styleUrl: './user-name.component.css'
})
export class UserNameComponent {

  @Output() userName = new EventEmitter<string>();

  usuario: string = '';

  onSubmit() {
    this.userName.emit(this.usuario);
  }

}
