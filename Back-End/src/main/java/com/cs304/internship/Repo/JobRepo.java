package com.cs304.internship.Repo;

import com.cs304.internship.Entity.Company;
import com.cs304.internship.Entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface JobRepo extends JpaRepository<Job, Integer> {
    List<Job> findJobByCompanyId(int companyId);

}
