import { Component } from '@angular/core';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

form:ContactForm ={
  name:'',
  email:'',
  message:''
}


  send(){
 console.log(this.form)
 emailjs.send('service_hf3515b','template_432untd',{...this.form},{
  publicKey: 'Usd2MWqU1gnM6IT-O'
 }).then(() => {
  console.log("Sent!");
 })
  }
  
}
