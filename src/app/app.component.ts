import { Component, OnInit } from "@angular/core";
import { Cart } from "./models/cart.model";

@Component({
  selector: "app-root",
  template: `<app-header></app-header> <router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent implements OnInit {
  cart: Cart = { items: [] };

  constructor() {}

  ngOnInit(): void {}
}
