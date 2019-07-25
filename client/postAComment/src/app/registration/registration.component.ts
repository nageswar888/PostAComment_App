import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from "./registration.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  public alert = false
  private formdata: any;

  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private Registration:RegistrationService,
  ) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]], //if we put double quotes then / is not required
      lastName: [null, [Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]],
      phone: [null, [Validators.required, Validators.pattern("^[0-9]{10}$")]],
      email: [null, [Validators.required, Validators.pattern("^\\w+@[a-zA-Z_]+?\\.[a-zA-Z]{2,3}$")]],
      password: [null, [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.registerForm.controls;}

  submit(data) {
    this.submitted = true;
    //console.log(data)
    this.formdata = data
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    else{
      this.post_user(this.formdata)
      this.alert=true
    }
  }
  post_user(formdata){
    //console.log(formdata)
    this.Registration.PostUser(formdata).subscribe( (responce) => {
      //console.log("---------responce in ts",responce)
      this.router.navigate(["/login"])
    })
  }
}
