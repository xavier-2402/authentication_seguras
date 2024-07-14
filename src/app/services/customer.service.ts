import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Question } from '../models/question';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers:Customer[] = [
    {
      code:1,
      id:'0rEswofruprU',
      firstName:'Xavier',
      lastName: 'Yanza',
      accountNumber:'60283607',
      userName:'0105664',
      password:"58965",
      imageCode:4,
      questions:[
        {
          code:1,
          title:'¿Cuales son los últimos 4 digitos de su cédula?',
          answer:'6987'
        },
        {
          code:2,
          title:'¿Apellido paterno?',
          answer:'Yanza'
        }
      ],
      isLogged:true
    },
    {
      code:2,
      id:'nuVIFa51brac',
      firstName:'Cliente1',
      lastName: 'Clente',
      accountNumber:'91781365',
      userName:'Cl917',
      password:"test-87",
      imageCode:1,
      questions:[
        {
          code:1,
          title:'¿Nombre de su mascota?',
          answer:'Bethoven'
        },
        {
          code:2,
          title:'¿Apellido materno?',
          answer:'Villa'
        }
      ]
    },
    {
      code:3,
      id:'7Ijo2ebrexog',
      firstName:'Cliente',
      lastName: 'Banca',
      accountNumber:'98102367',
      userName:'banca547',
      password:"@Banca587*",
      imageCode:9,
      questions:[
        {
          code:1,
          title:'¿Bebida favorita?',
          answer:'Imperial'
        },
        {
          code:2,
          title:'¿Cuales son los últimos 4 digitos de su cédula?',
          answer:'9354'
        }
      ]
    },
    {
      code:4,
      id:'6Em6phA7HeBr',
      firstName:'Banca',
      lastName: 'Test',
      accountNumber:'9874215436',
      userName:'test451',
      password:"541872",
      imageCode:10,
      questions:[
        {
          code:1,
          title:'¿Ciudad favorita?',
          answer:'Cuenca'
        },
        {
          code:2,
          title:'¿Apellido paterno?',
          answer:'Test'
        }
      ]
    },
    {
      code:5,
      id:'ki9rUT5oxuTR',
      firstName:'Xavier',
      lastName: 'Banza',
      accountNumber:'98720365',
      userName:'xavi7841',
      password:"Bank21*",
      imageCode:7,
      questions:[
        {
          code:1,
          title:'¿A que le tiene miedo?',
          answer:'Alturas'
        },
        {
          code:2,
          title:'¿Nombre de su padre?',
          answer:'Carlos'
        }
      ]
    }
  ]

  images:Image[]=[
    {
      code:1,
      url:'../../assets/ancla.PNG'
    },
    {
      code:2,
      url:'../../assets/bicicleta.PNG'
    },
    {
      code:3,
      url:'../../assets/billete.PNG'
    },
    {
      code:4,
      url:'../../assets/calculadora.PNG'
    },
    {
      code:5,
      url:'../../assets/corazon.PNG'
    },
    {
      code:6,
      url:'../../assets/impresora.PNG'
    },
    {
      code:7,
      url:'../../assets/metro.PNG'
    },
    {
      code:8,
      url:'../../assets/microfono.PNG'
    },
    {
      code:9,
      url:'../../assets/mundo.PNG'
    },
    {
      code:10,
      url:'../../assets/palmera.PNG'
    },
    {
      code:11,
      url:'../../assets/paloma.PNG'
    },
    {
      code:12,
      url:'../../assets/pelota.JPG'
    },
    {
      code:13,
      url:'../../assets/satelite.PNG'
    },
    {
      code:14,
      url:'../../assets/taco.PNG'
    },
    {
      code:15,
      url:'../../assets/telefono.PNG'
    },
    {
      code:16,
      url:'../../assets/televisor.PNG'
    }
  ]
  
  constructor() { }

  login(userName:string, password:string):Customer{
    userName = userName.trim();
    password = password.trim();
    return this.customers.find(x => x.userName == userName && x.password == password);
  }

  getById(id:string):Customer{
    return this.customers.find(x => x.id == id);
  }

  validateAnswers(customerId: string,question:string,answer:string, imageCode:number):boolean{
    var customer = this.getById(customerId);
    if(!customer) return false;
    if(customer.imageCode != imageCode) return false;
    question = question.trim();
    answer = answer.trim();
    if(!customer.questions.find(x => x.title == question && x.answer == answer)) return false;
    return true;

  }

  updateLoggedCustomer(code:number, isLogged:boolean){
    let customer = this.customers.find(x => x.code == code);
    if(customer) customer.isLogged = isLogged;
  }

  updatecorrectCustomer(code:number, isCorrect:boolean){
    let customer = this.customers.find(x => x.code == code);
    if(customer) customer.isCorrect = isCorrect;
  }

  getQuestion(customerCode:number):Question{
    let customer = this.customers.find(x => x.code == customerCode);
    if(!customer) return null;
    let index = Math.floor(Math.random() * customer.questions.length);
    return customer.questions[index];
  }

  getImages(quantity: number): Image[] {
    const records = [...this.images];
    for (let i = records.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [records[i], records[j]] = [records[j], records[i]];
    }
    return records.slice(0, quantity);
  }

}
