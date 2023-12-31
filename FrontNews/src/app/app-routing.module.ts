import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostNewsComponent } from './components/post-news/post-news.component';
import { GetAllNewsComponent } from './components/get-all-news/get-all-news.component';
import { UpdateNewsComponent } from './components/update-news/update-news.component';

const routes: Routes = [
  { path: 'news' , component: PostNewsComponent },
  { path: "" , component: GetAllNewsComponent },
  { path: "news/:id" , component: UpdateNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
