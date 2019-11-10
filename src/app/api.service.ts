import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Models/Product/product';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myheader = {
    'Authorization': 'Bearer ' + environment.ApiKayAirTable
  }
  constructor(private http: HttpClient) { }

  // Product
  getProducts(){
    return this.http.get<Product>( environment.AirTableDomain + '/Product?maxRecords=3&view=Grid%20view', { headers: this.myheader });
  }

  getProduct(id: string){
    return this.http.get<Product>( environment.AirTableDomain + '/Product/' + id, { headers: this.myheader });
  }

  postProduct(product: any[]){
    return this.http.post<Product>( environment.AirTableDomain, {records:product}, { headers: this.myheader });
  }

  deleteProduct(id: string){
    return this.http.delete<Product>( environment.AirTableDomain + '/Product/' + id, { headers: this.myheader });
  }

  //Customer
}
