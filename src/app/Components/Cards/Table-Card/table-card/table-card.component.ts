import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Product } from '../../../../../domain/product';
import { ProductService } from '../../../../../service/productservice';
import { TooltipOptions } from 'primeng/api';
@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrl: './table-card.component.css',
})
export class TableCardComponent implements OnInit {
  products!: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProductsLarge().then((data) => {
      console.log(data);

      this.products = data;
    });
  }
  tooltipOptions: TooltipOptions = {
    showDelay: 150,
    tooltipEvent: 'hover',
    tooltipPosition: 'top',
  };
}
