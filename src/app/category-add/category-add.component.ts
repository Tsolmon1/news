import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm: FormGroup;
  category_name:string='';
//  category_id:number=null;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

    ngOnInit() {
      this.categoryForm = this.formBuilder.group({
      //  'category_id' : [null, Validators.required],
        'category_name' : [null, Validators.required]
  
      });
  }
  onFormSubmit(form:NgForm) {
    this.isLoadingResults = true;
    this.api.addCategory(form)
      .subscribe(res => {
          //let id = res['_id'];
          this.isLoadingResults = false;
          this.router.navigate(['/news-list']);
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

}
