import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { News } from './news';
import { Category } from './category';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "http://localhost:3000/api/v1/news_list";
const apiUrl1 = "http://localhost:3000/api/v1/news_category";
@Injectable({
  providedIn: 'root'
})



export class ApiService {

  constructor(private http: HttpClient) { }

  getNewsList (): Observable<News[]> {
    return this.http.get<News[]>(apiUrl)
      .pipe(
        tap(news_list => console.log('fetched news')),
        catchError(this.handleError('getNewsList', []))
      );
    
  }
  getCategoryList (): Observable<Category[]> {
    return this.http.get<Category[]>(apiUrl1)
      .pipe(
        tap(category_name => console.log('fetched category')),
        catchError(this.handleError('getCategoryList', []))
      );
  }
  
  getNews(id: number): Observable<News> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<News>(url).pipe(
      tap(news_detail => console.log(`fetched news id=${id}`)),
      catchError(this.handleError<News>(`getNews id=${id}`))
    );
  }
  getCategory(id: number): Observable<Category> {
    const url = `${apiUrl1}/${id}`;
    return this.http.get<Category>(url).pipe(
      tap(_ => console.log(`fetched category id=${id}`)),
      catchError(this.handleError<Category>(`getCategory id=${id}`))
    );
  }
  addNews (news): Observable<News> {
    return this.http.post<News>(apiUrl, news, httpOptions).pipe(
      tap((news: News) => console.log(`added news w/ id=${news._id}`)),
      catchError(this.handleError<News>('addNews'))
    );
  }
  addCategory (category): Observable<Category> {
    return this.http.post<Category>(apiUrl1, category, httpOptions).pipe(
      tap((category: Category) => console.log(`added category w/ id=${category._id}`)),
      catchError(this.handleError<Category>('addNews'))
    );
  }
  updateNews (id, news): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, news, httpOptions).pipe(
      tap(_ => console.log(`updated news id=${id}`)),
      catchError(this.handleError<any>('updateNews'))
    );
  }
  
  deleteNews (id): Observable<News> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<News>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted news id=${id}`)),
      catchError(this.handleError<News>('deleteNews'))
    );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
