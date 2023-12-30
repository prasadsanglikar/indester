import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  type: string = "password"//type of password
  isText: boolean = false;//text is true or false
  eyeIcon: string = "bi-eye-slash"//feathing icon
  loginForm!: FormGroup;
  title = 'Login to get Started';
  Username: any
  Password: any
  small: any;
  alert!: string;
  constructor(private fb: FormBuilder, private route: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      pasword: ['', Validators.required]
    })

  }


  // This code of line is use hide and show the password
  hideShowPass() {
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "bi-eye" : this.eyeIcon = "bi-eye-slash";
    this.isText ? this.type = "text" : this.type = "password";
  }

 
  onSubmit() {
    if (this.loginForm.valid) {
      if (this.Username == "prasadsanglikar@gmail.com" && this.Password == "Prasad21@") {
        this.alert = "Login Success";
        this.route.navigate(['dashboard'])
      } else {
        this.small = 'Username or password incorrect';
      }


      // send the obj to database
    } else {
      // throw the error using toaster and this with requires files
      this.validateAllFormFileds(this.loginForm);

      alert("Your form is invalid")
    }

  }

  private validateAllFormFileds(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsDirty({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormFileds(control)
      }
    })
  }
}
