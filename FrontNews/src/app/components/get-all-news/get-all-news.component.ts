import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-get-all-news',
  templateUrl: './get-all-news.component.html',
  styleUrls: ['./get-all-news.component.css']
})
export class GetAllNewsComponent {

  newss: any = [];

  constructor(private newsService: NewsService ){}

  ngOnInit(){
    this.getAllNews();

  }

  getAllNews(){
      this.newsService.getAllNews().subscribe((res) => {
        console.log(res);
        this.newss=res;
      })
  }

  deleteNews(id : number){
    this.newsService.deleteNews(id).subscribe((res) => {
      console.log(res);
      this.getAllNews();
    })

  }

}
