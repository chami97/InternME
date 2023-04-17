package com.cs304.internship.Service;

import com.cs304.internship.Dto.CompanyDto;
import com.cs304.internship.Entity.Company;


public interface CompanyService {
    Company addCompany(CompanyDto companyDto);

    public Company getCompanyById(int cid);

    Company getCompanyByUserId(int uid);
}
