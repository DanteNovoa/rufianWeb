import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(form){
    console.log(form.value)
    console.log(form.touched)
    console.log(form.submitted)
  }

}
