import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mycard',
  templateUrl: './mycard.component.html',
  styleUrls: ['./mycard.component.scss']
})
export class MycardComponent implements OnInit {
  @Input("Label") Label= 'No Label';
  @Input("Icon") Icon: string;
  @Input("Link") Link: string;
  Name: string;

  constructor() { }

  ngOnInit() {
  }

}
