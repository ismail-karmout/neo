package com.umi.news.news.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="news")
public class News {
 @Id @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;
   @Column(name= "title_")
    private String title;

    @Column(name= "date_")

    private Date date;

    @Column(name= "type_")

    private String type;

    @Column(name= "description_")
    private String description;

    @Column(name= "photo_")
    private String photo;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "update_at")
    private Date updatedAt;
}
