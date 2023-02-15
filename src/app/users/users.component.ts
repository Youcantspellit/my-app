import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public title = 'Hi Silviya';
  public cardsForHandset: Array<{title: string, cols: number, rows: number}> = [];
  public cardsForWeb = [];
  private ngUnsubscribe = new Subject<void>();


  constructor(public appService: AppService) {}

  ngOnInit(){
    this.appService.getDeals().pipe(takeUntil(this.ngUnsubscribe)).subscribe(
      response => {
        this.cardsForHandset = response.handsetCards;
        this.cardsForWeb = response.webCards;
      },
      error => {
        alert("there is an error");
      }
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
}
}
