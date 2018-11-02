import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { News } from '../news';
import { Category } from '../category';
import {MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions} from '@angular/material';

export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 1000,
  hideDelay: 1000,
  touchendHideDelay: 1000,
};
@Component({
  selector: 'app-news',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css'],
  providers: [
    {provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}
  ],
})

export class NewsListComponent implements OnInit {

  displayedColumns: string[] = ['news_title', 'category_name', 'news_desc'];

  data: News[] = [];
  data1: Category[] = [];
  isLoadingResults = true;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getNewsList()
      .subscribe(res => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });

 /*   this.api.getCategoryList()
    .subscribe(res => {
      this.data1 = res;
      console.log(this.data1);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
*/
  }

}
