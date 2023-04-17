package com.cs304.internship.Controller;

import com.cs304.internship.Dto.CompanyDto;
import com.cs304.internship.Entity.Company;
import com.cs304.internship.Repo.CompanyRepo;
import com.cs304.internship.Service.CompanyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("api/v1/company")
public class CompanyController {

    @Autowired
    private CompanyService companyService;

    @Autowired
    private CompanyRepo companyRepo;

    @PostMapping(path = "/save")
    public Company saveCompany(@RequestBody CompanyDto companyDto) {
        Company cm = companyService.addCompany(companyDto);
        return cm;
    }

    @PutMapping(path = "/update")
    public Company updateCompany(@RequestBody Company company) {
        return companyRepo.save(company);
    }

    @GetMapping(path = "/{cid}")
    public ResponseEntity<?> getCompanyById(@PathVariable int cid) {
        return ResponseEntity.ok(companyService.getCompanyById(cid));
    }

    @GetMapping(path = "/user/{uid}")
    public ResponseEntity<?> getCompanyByUserId(@PathVariable int uid) {
        return ResponseEntity.ok(companyService.getCompanyByUserId(uid));
    }
}
