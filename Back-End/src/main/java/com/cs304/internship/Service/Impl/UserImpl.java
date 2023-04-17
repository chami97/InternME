package com.cs304.internship.Service.Impl;

import com.cs304.internship.Dto.UserRespDto;
import com.cs304.internship.Service.UserService;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.cs304.internship.Dto.LoginDto;
import com.cs304.internship.Entity.User;
import com.cs304.internship.Dto.UserDto;
import com.cs304.internship.Repo.UserRepo;
import com.cs304.internship.Response.LoginResponse;
import org.springframework.stereotype.Service;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User addUser(UserDto userDto) {
        User user1 = userRepo.findByEmail(userDto.getEmail());
        if (user1 == null) {
            User user = new User(userDto.getFirstName(), userDto.getLastName(), userDto.getEmail(), userDto.getMobileNumber(), this.passwordEncoder.encode(userDto.getPassword()));

            userRepo.save(user);
            return user;
        } else return null;

    }

    @Override
    public LoginResponse loginUser(LoginDto loginDto) {
        String msg = "";
        User user1 = userRepo.findByEmail(loginDto.getEmail());
        if (user1 != null) {
            String userPassword = loginDto.getPassword();
            String encodedUserPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(userPassword, encodedUserPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginDto.getEmail(), encodedUserPassword);
                if (user.isPresent()) {
                    return new LoginResponse("Login Success", true, new UserRespDto(user1.getId(), user1.getFirstName(), user1.getLastName(), user1.getEmail(), user1.getMobileNumber()));
                } else {
                    return new LoginResponse("Login Failed", false, null);
                }
            } else {
                return new LoginResponse("Password Not Match", false, null);
            }
        } else {
            return new LoginResponse("Email not exist", false, null);
        }
    }

    @Override
    public User getUserByEmail(String email) {
        User user = userRepo.findByEmail(email);
        return user;
    }

}
