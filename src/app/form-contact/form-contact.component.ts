import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message';

@Component({
  selector: 'app-form-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-contact.component.html',
  styleUrl: './form-contact.component.scss'
})
export class FormContactComponent {
  newMessage: Message = {
    firstname: '',
    lastname: '',
    email: ''
  }
  submitted = false;

  handleSubmit() {
    console.log(this.newMessage);
  }
}
