import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Category } from '../category';
@Component({
  selector: 'app-news-edit',
  templateUrl: './news-edit.component.html',
  styleUrls: ['./news-edit.component.css']
})
export class NewsEditComponent implements OnInit {

  newsForm: FormGroup;
  _id:string='';
  news_title:string='';
  news_desc:string='';
  categories:string='';
  isLoadingResults = false;
  category: Category[] = [];
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getNews(this.route.snapshot.params['id']);
    this.newsForm = this.formBuilder.group({
      'news_title' : [null, Validators.required],
      'news_desc' : [null, Validators.required],
      'categories' : [null, Validators.required]
    });
    this.api.getCategoryList()
    .subscribe(res => {
      this.category = res;
      console.log(this.category);
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    });
  }
  getNews(id) {
    this.api.getNews(id).subscribe(data => {
      this._id = data._id;
      this.newsForm.setValue({
        news_title: data.news_title,
        news_desc: data.news_desc,
        categories: data.categories
      });
    });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.updateNews(this._id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/news-detail', id]);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }
  newsDetails() {
    this.router.navigate(['/news-detail', this._id]);
  }

}
