import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { CalculServiceService } from 'src/app/Service/calcul-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products!:Product[]
  constructor(private calculServiceService:CalculServiceService) { }

  ngOnInit(): void {
    this.products=[
      {"id": 1, "title": "delectus aut autem","quantity": 6},
      {"id": 5, "title": "quis ut nam facilis et officia qui", "quantity": 5},
      {"id": 55,"title": "delectus dffdfaut autem","quantity": 0},
      {"id": 157, "title": "delectus aut autem","quantity": 6}];
    }

    nbrPrdQtyNull!: number;
        quantityNull(){
     this.nbrPrdQtyNull= this.calculServiceService.getNumberOf(this.products,"quantity", 0)}
  }


