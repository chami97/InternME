package com.cs304.internship.Service.Impl;

import com.cs304.internship.Entity.Job;
import com.cs304.internship.Repo.JobRepo;
import com.cs304.internship.Service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobImpl implements JobService {

    @Autowired
    JobRepo jobRepo;

    @Override
    public Job addJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public List<Job> getAllJobs() {
        return jobRepo.findAll();
    }

    @Override
    public List<Job> getJobsByCompanyId(int cid) {
        return null;
    }

    @Override
    public Job getJobById(int jid) {
        return jobRepo.findById(jid).get();
    }

    @Override
    public Job updateJob(Job job) {
        return jobRepo.save(job);
    }

    @Override
    public void deleteJob(int jid) {
        jobRepo.deleteById(jid);
    }
}
