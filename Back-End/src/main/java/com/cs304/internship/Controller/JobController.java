package com.cs304.internship.Controller;

import com.cs304.internship.Dto.CompanyDto;
import com.cs304.internship.Entity.Company;
import com.cs304.internship.Entity.Job;
import com.cs304.internship.Repo.JobRepo;
import com.cs304.internship.Service.CompanyService;
import com.cs304.internship.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/job")
public class JobController {

    @Autowired
    private JobService jobService;

    @PostMapping(path = "/save")
    public Job saveCompany(@RequestBody Job job) {
        Job j = jobService.addJob(job);
        return j;
    }

    @GetMapping(path = "/all")
    public List<Job> getAllJobs() {
        return jobService.getAllJobs();
    }

    @GetMapping(path = "/{id}")
    public Job getJobById(@PathVariable int id) {
        return jobService.getJobById(id);
    }

    @GetMapping(path = "/company/{cid}")
    public List<Job> getJobsByCompany(@PathVariable int cid) {
        return jobService.getJobsByCompanyId(cid);
    }

    @PutMapping(path = "/update")
    public Job updateJob(@RequestBody Job job) {
        return jobService.updateJob(job);
    }

    @DeleteMapping(path = "/delete/{id}")
    public void deleteJob(@PathVariable int id) {
        jobService.deleteJob(id);
    }
}
