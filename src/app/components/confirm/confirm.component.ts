import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  constructor(private route:ActivatedRoute, private router:Router, private customerService:CustomerService){
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
    this.question = this.customerService.getQuestion(this.customer.code);
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
}
