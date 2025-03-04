import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  public name:String="Pratheek"
  private age:String="25 years"
  public dob:any=2000
 
  ngOnInit(): void {
    
console.log(this.name)
console.log(this.getAge())

  }

  getAge(){

    let C_age= new Date().getFullYear()
    return C_age - this.dob 
  }

}
