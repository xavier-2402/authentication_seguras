import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  customer:Customer;
  customerId:string;
  date:Date = new Date();

  constructor(private router:Router, private route:ActivatedRoute, private customerService:CustomerService){

  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.paramMap.get('customerId');
    this.getCustomer();

  }

  getCustomer(){
    if(!this.customerId) this.router.navigate(['/login'])
      this.customer = this.customerService.getById(this.customerId);
      console.log(this.customer)
      if(!this.customer) this.router.navigate(['/login'])
      if(!this.customer.isCorrect) this.router.navigate(['/login'])
      if(!this.customer.isLogged) this.router.navigate(['/login'])
  }

  logout(){
    this.customerService.updateLoggedCustomer(this.customer.code,false);
    this.customerService.updatecorrectCustomer(this.customer.code,false);
    this.router.navigate(['/login'])
  }
}
