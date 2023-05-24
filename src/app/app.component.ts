import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productos = [
    { nombre: 'Iphone', precio: 3000000 },
    { nombre: 'Samsung', precio: 2500000 },
    { nombre: 'Huawei', precio: 2450000 },
    { nombre: 'Xiaomi', precio: 1500000 },
    { nombre: 'Motorola', precio: 1100000 }
  ];
}
