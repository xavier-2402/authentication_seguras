import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Customer } from 'src/app/models/customer';
import { Image } from 'src/app/models/image';
import { Question } from 'src/app/models/question';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  customerId:string;
  customer:Customer;
  question:Question;
  images:Image[];
  imageSelected: number | null = null;
  form:UntypedFormGroup;

  constructor(private route:ActivatedRoute, private router:Router, private customerService:CustomerService, 
    private fb:UntypedFormBuilder, private msg:NzMessageService){
    this.buildForm();
  }

  buildForm(){
    this.form = this.fb.group({
      answer:[null,[Validators.required,Validators.minLength(3)]]
    })
  }
  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    this.getCustomerData();
    this.getQuestion();
    this.getImages();
  }

  getCustomerData(){
    if(!this.customerId) this.router.navigate(['/login'])
    this.customer = this.customerService.getById(this.customerId);
    if(!this.customer || !this.customer.isLogged) this.router.navigate(['/login'])
  }

  getQuestion(){
    this.question = this.customerService.getQuestion(this.customer.code, this.question?.code ?? 0);
  }
  getImages(){
    this.images = this.customerService.getImages(10);
  }

  selectImage(id: number): void {
    this.imageSelected = id;
  }

  isImageSelected(id: number): boolean {
    return this.imageSelected === id;
  }

  validateData(){
    if(!this.imageSelected){
      this.msg.warning('Seleccione una imagen');
      return;
    }

    if(!this.form.valid){
      this.msg.warning('Responda la pregunta');
      return;
    }
    let answer = this.form.get('answer').value;
    let isValid = this.customerService.validateAnswers(this.customerId,this.question.title,answer,this.imageSelected);
    if(!isValid){
      this.msg.error('Información incorrecta');
      this.getQuestion();
      this.getImages();
      this.form.reset();
      this.imageSelected = 0;
    }else{
      this.customerService.updatecorrectCustomer(this.customer.code,true);
      this.router.navigate(['detail/',this.customerId])
    }
  }
}
