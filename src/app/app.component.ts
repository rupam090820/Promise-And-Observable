import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {  // step 1:-- implements OnInit
  title = 'promiseAndObservable';


  // creating promise
  public pr: any = new Promise((resolve, reject) => {
    console.log("promise created successfully........................");
    const x = 10;
    const y = 0;
    const z = (x / y);
    resolve(z);
    reject(z)
  });


  // creating observable.............................
  // public obs = new Observable((observer) => {
  //   console.log("observable is created................................");
  //   const x = 10;
  //   const y = 5;
  //   const z = (x / y);
  //   observer.next(z);
  // });

  ngOnInit(): void {

    // call promise............
    this.pr.then((res: any) => {
      console.log(res);
    })
      .catch((error: any) => {
        console.log(error);
      })
      .finally(() => {
        console.log("finally block called successfully....")
      });

    // call observable........................
    // this.obs.subscribe((res: any) => {
    //   console.log(res);
    // }), (error: any) => {
    //   console.log(error);
    // }
  }
}
