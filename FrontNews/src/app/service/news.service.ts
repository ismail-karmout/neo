import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const BASIC_URL =["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

 postNews(news : any): Observable<any>{
  return this.http.post(BASIC_URL +"/api/news",news); 
 }
 
 getAllNews(): Observable<any>{
  return this.http.get(BASIC_URL +"/api/news"); 
 }

 getNewsById(id: number): Observable<any>{
  return this.http.get(BASIC_URL +"/api/news/"+ id); 
 }

 updateNews(id: number , news: any): Observable<any>{
  return this.http.put(BASIC_URL +"/api/news/"+ id , news); 
 }

 deleteNews(id: number): Observable<any>{
  return this.http.delete(BASIC_URL +"/api/news/"+ id); 
 }

}
