package com.cs304.internship.Service;

import com.cs304.internship.Entity.Job;

import java.util.List;

public interface JobService {

    Job addJob(Job job);

    List<Job> getAllJobs();

    List<Job> getJobsByCompanyId(int cid);

    Job getJobById(int jid);

    Job updateJob(Job job);

    void deleteJob(int jid);

}
