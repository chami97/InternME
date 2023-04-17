package com.cs304.internship.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class UserRespDto {
    private int id;

    private String firstName;

    private String lastName;

    private String email;

    private String mobileNumber;
}
