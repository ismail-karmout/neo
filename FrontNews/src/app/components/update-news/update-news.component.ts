import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from 'src/app/service/news.service';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.component.html',
  styleUrls: ['./update-news.component.css']
})
export class UpdateNewsComponent {

  id: number = this.activatedRoute.snapshot.params["id"];
  updateNewsForm!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private service: NewsService , private router: Router, private fb: FormBuilder){}

  ngOnInit(){

    this.updateNewsForm = this.fb.group({
      title: [null, [Validators.required]],
      date: [null, [Validators.required]],
      type: [null, [Validators.required]],
      description: [null, [Validators.required]],
      photo: [null, [Validators.required]],
       

    })
    this.getNewsById();


  }

  getNewsById(){
    this.service.getNewsById(this.id).subscribe((res) => {
      console.log(res);
      this.updateNewsForm.patchValue(res);
    })
  }

  updateNews(){
    this.service.updateNews(this.id, this.updateNewsForm.value).subscribe((res) => {
      console.log(res);
      if(res.id != null){
        this.router.navigateByUrl("");
      }
    })
  }

}
