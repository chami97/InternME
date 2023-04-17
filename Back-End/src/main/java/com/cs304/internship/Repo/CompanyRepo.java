package com.cs304.internship.Repo;

import com.cs304.internship.Entity.Company;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface CompanyRepo extends JpaRepository<Company, Integer> {

    Company findCompanyByUserId(int userId);
}
