import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsAddComponent } from './news-add/news-add.component';
import { NewsEditComponent } from './news-edit/news-edit.component';
import { CategoryAddComponent } from './category-add/category-add.component';

const routes: Routes = [
  {
    path: 'news-list',
    component: NewsListComponent,
    data: { title: 'List of News' }
  },
  {
    path: 'news-detail/:id',
    component: NewsDetailComponent,
    data: { title: 'News Detail' }
  },
  {
    path: 'news-add',
    component: NewsAddComponent,
    data: { title: 'Add News' }
  },
  {
    path: 'category-add',
    component: CategoryAddComponent,
    data: { title: 'Add Category' }
  },
  {
    path: 'news-edit/:id',
    component: NewsEditComponent,
    data: { title: 'Edit News' }
  },
  { path: '',
    redirectTo: '/news-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}