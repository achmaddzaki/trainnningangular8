import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorialpage',
  templateUrl: './tutorialpage.component.html',
  styleUrls: ['./tutorialpage.component.scss']
})
export class TutorialpageComponent implements OnInit {
  active = false;
  title = 'trainning';
  myarray = [
    {
      Label: "Learn Angular",
      Icon:"M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z",
      Link:"https://angular.io/tutorial"
    },
    {
      Label: "CLI Documentation",
      Icon:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
      Link:"https://angular.io/cli"
    },
    {
      Label: "Angular Blog",
      Icon:"M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z",
      Link:"https://blog.angular.io/"
    }
  ];
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id']) //log the value of id
    });
  }

  toggle(){
    this.active = !this.active;
  }

}
