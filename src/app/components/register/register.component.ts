import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  public user = {
    email: "",
    password: ""
  }
  public error = ""

  constructor(private authService: AuthService, private router: Router) { }

  registerUser () {
    if(this.user.email && this.user.password) {
      this.error = "";
      this.authService.register(this.user.email, this.user.password).then((data) => {
        console.log(data);
        this.router.navigate(['/login']);
      }, (err) => {
        console.log(err);
        this.error = err.message;
      });
    }
  }

}
