import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { News } from '../news';
import {Category } from '../category';
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  news: News = { _id: '', news_title: '', news_desc: '', categories: null, updated_at: null };
  category: Category = { _id: '', category_name: '', updated_at:null};
  isLoadingResults = true;

  getNewsDetails(id) {
    this.api.getNews(id)
      .subscribe(data => {
        this.news = data;
        console.log(this.news);
        this.isLoadingResults = false;
      });
 /*     this.api.getCategory(id)
      .subscribe(data1 => {
        this.category = data1;
        console.log(this.category);
        this.isLoadingResults = false;
      }); */
  }
  deleteNews(id) {
    this.isLoadingResults = true;
    this.api.deleteNews(id)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.router.navigate(['/news-list']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getNewsDetails(this.route.snapshot.params['id']);
  }

}
