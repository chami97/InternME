package com.cs304.internship.Service.Impl;

import com.cs304.internship.Dto.CompanyDto;
import com.cs304.internship.Entity.Company;
import com.cs304.internship.Repo.CompanyRepo;
import com.cs304.internship.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CompanyImpl implements CompanyService {

    @Autowired
    private CompanyRepo companyRepo;

    @Override
    public Company addCompany(CompanyDto companyDto) {
        Company cm = new Company(
                companyDto.getName(),
                companyDto.getIndustry(),
                companyDto.getAddress(),
                companyDto.getWebsite(),
                companyDto.getBr(),
                companyDto.getUserId()
        );
        Company res = companyRepo.save(cm);
        return getCompanyById(res.getId());
    }

    @Override
    public Company getCompanyById(int cid) {
        Optional<Company> cm = companyRepo.findById(cid);
        return cm.get();
    }
}
