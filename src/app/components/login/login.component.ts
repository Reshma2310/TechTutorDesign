import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private router: Router){}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onSubmit() {
    this.submitted = true;
    if(this.loginForm.valid){
      let data = {
        Email: this.loginForm.value.email,
        Password: this.loginForm.value.password
      }
      console.log(data);
      this.user.login(data).subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/adminpage')
      })
    }
  }
}
