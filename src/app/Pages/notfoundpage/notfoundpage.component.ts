import { Component, OnInit, Input, Output } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss']
})
export class NotfoundpageComponent implements OnInit {

  ErrorMessage: string;
  success = false;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.getProducts().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  getproduct(){
    this.ErrorMessage = '';

    const id = 'rec6eJSe2Y7Gq3243'
    this.apiservice.getProduct(id).subscribe(
      data => {
        this.success = true;
        this.ErrorMessage = 'Success';
      },
      error => {
        this.success = false;
        this.ErrorMessage = error.message;
      }
    );
  }

  postProduct(){
    const products = [
      {
        fields: {
          Name: "Laptop",
          Harga: 1234567890
        }
      },
      {
        fields: {
          Name: "Gelas",
          Harga: 2000
        }
      }
    ]
    this.apiservice.postProduct(products).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
