import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(data => this.productsList = data);
    console.log(this.productsList);
  }
  deleteProduct(pid:number) {
    this.productService.deleteProduct(pid).subscribe(data => console.log('Product deleted'));
    this.ngOnInit();
  }
}
