import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Category} from '../category';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-news-add',
  templateUrl: './news-add.component.html',
  styleUrls: ['./news-add.component.css']
})
export class NewsAddComponent implements OnInit {
  newsForm: FormGroup;
  news_title:string='';
  news_desc:string='';
  //category_id:number=null;
  //category_name:string='';
  categories:string='';
  isLoadingResults = false;
  category: Category[] = [];
  constructor(public snackBar: MatSnackBar,private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

    ngOnInit() {
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
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
  
    this.api.addNews(form)
      .subscribe(res => {
          let id = res['_id'];
          this.isLoadingResults = false;
        
          this.isLoadingResults = false;
          this.router.navigate(['/news-detail', id]);
      
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        },
       );
      /* this.api.getCategoryList()
       .subscribe(res => {
         this.categories = res;
         console.log(this.categories);
         this.isLoadingResults = false;
       }, err => {
         console.log(err);
         this.isLoadingResults = false;
       });
*/      
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
