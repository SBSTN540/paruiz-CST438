import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-item-list',
  templateUrl: './product-item-list.component.html',
  styleUrls: ['./product-item-list.component.scss']
})
export class ProductItemListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  descriptionRequest(){
    this.router.navigate(['product-details'])
  }

}
