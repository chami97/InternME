package com.cs304.internship.Controller;

import com.cs304.internship.Entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;

import com.cs304.internship.Service.UserService;
import com.cs304.internship.Dto.UserDto;
import com.cs304.internship.Response.LoginResponse;
import com.cs304.internship.Dto.LoginDto;

@RestController
@CrossOrigin
@RequestMapping("api/v1/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping(path = "/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDto userDto) {
        User user = userService.addUser(userDto);
        if(user==null)
            return new ResponseEntity<>("Email already exist", HttpStatus.BAD_REQUEST);
        else
            return ResponseEntity.ok(user);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginDto loginDto) {
        LoginResponse loginResponse = userService.loginUser(loginDto);
        return ResponseEntity.ok(loginResponse);
    }

    @GetMapping(path = "/{email}")
    public ResponseEntity<?> getUser(@PathVariable String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }
}
