import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { NgForm } from '@angular/forms';
import { FoodCategoryModel } from '../models/food-category-model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {

  public title = 'Goodmorning';
  public fromFoodModel: FoodCategoryModel = new FoodCategoryModel();

  private ngUnsubscribe = new Subject<void>();


  constructor(public appService: AppService) {}


  onSubmit(f: NgForm) {
    console.log(f.value);
    this.appService.postForm(f.value).pipe(takeUntil(this.ngUnsubscribe)).subscribe(() => this.fromFoodModel = new FoodCategoryModel()
    );
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
