package com.cs304.internship.Service;
import com.cs304.internship.Dto.UserDto;
import com.cs304.internship.Entity.User;
import com.cs304.internship.Response.LoginResponse;
import com.cs304.internship.Dto.LoginDto;


public interface UserService {
    User addUser(UserDto userDto);

    LoginResponse loginUser(LoginDto loginDto);

    User getUserByEmail(String email);
}
