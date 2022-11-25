import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    email: "",
    password: ""
  }
  public error = ""

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {

  }

  loginUser () {
    if(this.user.email && this.user.password) {
      this.error = "";
      this.authService.login(this.user.email, this.user.password).then((data) => {
        console.log(data);
        this.router.navigate(['/dashboard']);
      }, (err) => {
        console.log(err);
        this.error = err.message;
      });
    }
  }

  loginWithGoogle() {
    this.error = "";
    this.authService.loginWithGoogle().then((data) => {
      console.log(data);
      this.router.navigate(['/dashboard']);
    }, (err) => {
      console.log(err);
      this.error = err.message;
    });
  }
}
