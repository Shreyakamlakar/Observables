import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObsSubscription: Subscription
  constructor() { }

  ngOnInit() {

    //Internal Observable
    // this.firstObsSubscription=interval(1000).subscribe(count =>{
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create(observer => {
      let count=0;
      setInterval(()=>{
        observer.next(count);
        count++;
      },1000);
    });

    this.firstObsSubscription = customIntervalObservable.subscribe(data=>{
      console.log(data);
    });
  }

    ngOnDestroy(): void{
    this.firstObsSubscription.unsubscribe();

    
  }

}
