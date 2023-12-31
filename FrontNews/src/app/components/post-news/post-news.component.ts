import { Component } from '@angular/core';

import { NewsService } from 'src/app/service/news.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-news',
  templateUrl: './post-news.component.html',
  styleUrls: ['./post-news.component.css']
})
export class PostNewsComponent {

  postNewsForm!: FormGroup;
  
  constructor(private newsService: NewsService , private fb: FormBuilder , private router: Router){ }

  ngOnInit(){
    this.postNewsForm = this.fb.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      description: [null, [Validators.required]],
      photo: [null, [Validators.required]],
      updatedAt: [null, [Validators.required]],
       

    })
  }

  postNews(){
    console.log(this.postNewsForm.value);
    this.newsService.postNews(this.postNewsForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigateByUrl("");
    })
  }
    



}
