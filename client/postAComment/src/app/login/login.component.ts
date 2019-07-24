import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {RegistrationService} from "../registration/registration.service";
import { LocalStorage } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  private users: any;

  constructor(    private route:Router,
                  private formBuilder: FormBuilder,
                  private registration: RegistrationService,
                  private localstorage:LocalStorage
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required,Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit(formdata) {
    this.submitted = true;
    if (this.loginForm.invalid) {    // stop here if form is invalid
      return;
    }
    else {
      this.validation(formdata)
    }
  }

  validation(formdata) {
    let email = formdata.email
    this.registration.get_user_email(email).subscribe((responce) => {
        this.users = responce
        this.localstorage.setItem('user',  this.users).subscribe(() => {});

        if (this.users) {
          //console.log("-------------",this.users[0].email,"---",this.users[0].password)
          if ((formdata.email == this.users[0].email) && (formdata.password == this.users[0].password)) {
            this.route.navigate(['/posts', responce])
          }
          else {
            alert("failed")
          }
        }
      }, () => {
      },
      () => {
      });

  }

}
