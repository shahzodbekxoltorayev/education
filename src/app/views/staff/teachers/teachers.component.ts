
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
 
export class TeachersComponent implements OnInit{
  searchControl: FormControl = new FormControl();
  demo;
  filteredProducts;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.getProduct()
    .subscribe((res: any[]) => {
      this.demo = [...res];
      this.filteredProducts = res;
    });

    this.searchControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      this.filerData(value);
    });
  }

  filerData(val) {
    if (val) {
      val = val.toLowerCase();
    } else {
      return this.filteredProducts = [...this.demo];
    }

    const columns = Object.keys(this.demo[0]);
    if (!columns.length) {
      return;
    }

    const rows = this.demo.filter(function(d) {
      for (let i = 0; i <= columns.length; i++) {
        const column = columns[i];
        // console.log(d[column]);
        if (d[column] && d[column].toString().toLowerCase().indexOf(val) > -1) {
          return true;
        }
      }
    });
    this.filteredProducts = rows;
  }

}


