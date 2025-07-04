import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      // You can add your authentication logic here
      alert(`Logging in with username: ${this.username} and password: ${this.password}`);
    }
  }
}
