import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form:UntypedFormGroup;

  constructor(private fb:UntypedFormBuilder,
    private msg:NzMessageService, 
    private readonly service:CustomerService,
    private router:Router){
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      userName:[null,[Validators.required,Validators.minLength(3)]],
      password:[null,[Validators.required,Validators.minLength(3)]]
    });
  }

  login(){
    if(!this.form.valid){
      this.msg.warning('Ingrese la información necesaria');
      return;
    }

    let dataLogin:any = this.form.value;
    let customer:Customer = this.service.login(dataLogin.userName, dataLogin.password);
    if(customer == null){
      this.msg.error('Usuario o contraseña incorrectos');
      return;
    }
    this.service.updateLoggedCustomer(customer.code,true);
    this.router.navigate(['/confirm',customer.id])

  }
}
