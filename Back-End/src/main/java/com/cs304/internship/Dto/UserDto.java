package com.cs304.internship.Dto;

import lombok.Data;

@Data
public class UserDto {
    private int id;

    private String firstName;

    private String lastName;

    private String email;

    private String mobileNumber;

    private String password;
}
