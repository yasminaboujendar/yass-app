import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';
import any = jasmine.any;

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css' ,
  standalone:true
})
export class ProductsComponent  implements OnInit{
products : any;
  private product: any ;
  constructor(private productService : ProductService) {
  }
  ngOnInit(): void{
this.getAllProducts()}

getAllProducts() {
  this.products = this.productService.getAllProducts().subscribe({
    next : resp => {
      this.products = resp;
    },
    error : err => {
      console.log(err);
    },
});
}

  handleDelete(p: any) {
    let v = confirm('etes vous sure de vouloir supprimer?');
    if(v==true){
      this.productService.deleteProduct(this.product).subscribe({
        next : value => {
          this.getAllProducts();
        },
        error : err => {
          console.log(err);
        },
        complete : () => {}
      });
    }
  }
}
