import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

   constructor(private productService:ProductService){ }

   ngOnInit(): void {
       
   }
   saveProduct(data:Products){
    this.productService.saveProduct(data).subscribe(d=>console.log("Product saved"));
   }
}
