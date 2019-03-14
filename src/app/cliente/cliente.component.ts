import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor() { }

  ngOnInit() {
  }

}
