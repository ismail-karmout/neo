package com.umi.news.news.mappers;

import com.umi.news.news.dtos.NewsDto;
import com.umi.news.news.entities.News;

public class NewsMapper {

    public static NewsDto mapToNewsDto(News news){

        return new NewsDto(
                news.getId(),
                news.getTitle(),
                news.getDate(),
                news.getType(),
                news.getDescription(),
                news.getPhoto(),
                news.getCreatedAt(),
                news.getUpdatedAt()
        );

    }

    public static News mapToNews(NewsDto newsDto){

        return new News(
                newsDto.getId(),
                newsDto.getTitle(),
                newsDto.getDate(),
                newsDto.getType(),
                newsDto.getDescription(),
                newsDto.getPhoto(),
                newsDto.getCreatedAt(),
                newsDto.getUpdatedAt()
        );

    }
}
