import { Question } from "./question";

export interface Customer{
    code:number;
    id:string;
    firstName:string;
    lastName:string;
    accountNumber:string;
    questions:Question[];
    userName:string;
    password:string;
    imageCode:number;
    isLogged?:boolean;
    isCorrect?:boolean;
}