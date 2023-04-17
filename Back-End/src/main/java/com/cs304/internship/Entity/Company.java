package com.cs304.internship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "company")
public class Company {
    @Id
    @Column(name = "id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "name", length = 256)
    private String name;

    @Column(name = "industry", length = 256)
    private String industry;

    @Column(name = "address", length = 256, nullable = true)
    private String address;

    @Column(name = "website", length = 20, nullable = true)
    private String website;

    @Column(name = "br", length = 256, nullable = true)
    private String br;

    @Column(name = "user_id", nullable = true)
    private int userId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = true, insertable=false, updatable=false)
    private User user;

    @OneToMany(mappedBy = "company", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Job> jobs = new HashSet<>();

    public Company(String name, String industry, String address, String website, String br, int userId) {
        this.name = name;
        this.industry = industry;
        this.address = address;
        this.website = website;
        this.br = br;
        this.userId = userId;
    }
}
