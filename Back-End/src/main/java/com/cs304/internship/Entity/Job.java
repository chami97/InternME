package com.cs304.internship.Entity;

import com.cs304.internship.Dto.WorkingMode;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.springframework.data.annotation.CreatedDate;

import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "job")
public class Job {

    @Id
    @Column(name = "id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "title", length = 256)
    private String title;

    @Column(name = "description", length = 1000)
    private String description;

    @Column(name = "is_active")
    private Boolean isActive = true;

    @Column(name = "working_mode", length = 20)
    @Enumerated(value = EnumType.STRING)
    private WorkingMode workingMode;

    @CreationTimestamp
    @Column(name = "posted_date")
    private Date postedDate = new Date();

    @Column(name = "company_id")
    private int companyId;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "company_id", nullable = true, insertable=false, updatable=false)
    private Company company;
}
