package com.umi.news.news.web;

import com.umi.news.news.dtos.NewsDto;
import com.umi.news.news.entities.News;
import com.umi.news.news.service.NewsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/api/news")
@CrossOrigin
public class NewsController {

    private NewsService newsService;
    @PostMapping

    public ResponseEntity<NewsDto> createNews(@RequestBody NewsDto newsDto){
        NewsDto savedNews = newsService.createNews(newsDto);
        return new ResponseEntity<>(savedNews, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<NewsDto> getNewsById(@PathVariable("id") Long newsId){

        NewsDto newsDto = newsService.getNewsById(newsId);
        return ResponseEntity.ok(newsDto);
    }
    @GetMapping
    public ResponseEntity<List<NewsDto>> getAllNews(){
        List<NewsDto> news = newsService.getAllNews();
        return ResponseEntity.ok(news);

    }


    @PutMapping("{id}")

    public ResponseEntity<NewsDto> updateNews(@PathVariable("id") Long newsId ,@RequestBody NewsDto updatedNews ){

        NewsDto newsDto = newsService.updateNews(newsId , updatedNews);
        return ResponseEntity.ok(newsDto);

    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteNews( @PathVariable("id") Long newsId ){

        newsService.deleteNews(newsId);

        return ResponseEntity.ok("News deleted successfully  !");
    }

    @GetMapping("/find")
    public List<News> FindNewsByTitre(@RequestParam String titre) {
        return newsService.FindNewsByTitre(titre);
    }



}
