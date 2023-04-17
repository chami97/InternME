package com.cs304.internship.Response;

import com.cs304.internship.Dto.UserRespDto;
import com.cs304.internship.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class LoginResponse {
    String message;
    Boolean status;
    UserRespDto user;

}
