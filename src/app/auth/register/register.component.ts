import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: '',
  };
  authService: any;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  submit() {
    console.log(this.form);
    // this.authService.register(this.form);
  }
  
}
