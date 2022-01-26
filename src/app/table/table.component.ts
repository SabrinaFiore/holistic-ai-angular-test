import { ApiService } from '../data/api.service';
import { Order } from './../data/order';
import { Customer } from './../data/customer';
import { Product } from './../data/product';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  form!: FormGroup;
  items: any;
  products!: Product[];
  customers!: Customer[];
  customerSupport = [];
  orders!: Order[];
  shoppers: any;
  isSubmitted = false;
  customerSelected = false;

  constructor(private ApiService: ApiService, private http: HttpClient, private formBuilder: FormBuilder) {
    this.items = this.ApiService.products$;
    console.log(this.items);

    this.form = this.formBuilder.group({
      shoppers: ['', [Validators.required]]
    });

    this.shoppers = [];
    this.shoppers = this.getCustomersFromService();
  }

  ngOnInit(): void {
    this.getProductsFromService();
    this.getCustomersFromService();
    this.getOrdersFromService();
  }

  getProductsFromService() {
    this.ApiService.getProducts().subscribe(products =>
      this.products = products
    );
  }

  getCustomersFromService() {
    this.ApiService.getCustomers().subscribe(customers =>
      this.customers = customers
    );

    return this.form.get('shoppers');
  }

  getOrdersFromService() {
    this.ApiService.getOrders().subscribe(orders =>
      this.orders = orders
    );
  }

  onSubmit() {
    this.isSubmitted = true;
    if (!this.form.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.form.value))
      return;
    }
  }

  changeCustomer(e: any) {
    console.log(e);

    this.shoppers.setValue(e.target.value, {
      onlySelf: false
    })

    this.customerSelected = true;
  }
}
