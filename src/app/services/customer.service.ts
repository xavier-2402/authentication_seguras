import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customers:Customer[] = [
    {
      code:1,
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
      ]
    },
    {
      code:2,
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
  constructor() { }

  public login():boolean{
    return false;
  }

}
