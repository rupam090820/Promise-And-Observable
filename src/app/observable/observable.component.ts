import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  public orderstatus: any;

  constructor() { }

  ngOnInit(): void {

    let obs = new Observable((observer) => {
      setTimeout(() => {
        observer.next("In Progress");
      }, 3000);

      setTimeout(() => {
        observer.next("processing");
      }, 8000);

      setTimeout(() => {
        observer.next("completed");
      }, 13000);

    });

    obs.subscribe((val) => {
      this.orderstatus = val;  // 1st subscription

    }, (error) => {
      console.log(error);
    });

    obs.subscribe((value2) => {
      console.log("second subscription");  // 2nd subscription
    });
  }

}
