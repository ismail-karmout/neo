package com.umi.news.news.dtos;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class NewsDto {

    private Long id;
    private String title;
    private Date date;

    private String type;
    private String description;
    private String photo;
    private Date createdAt;
    private Date updatedAt;

}
