package com.cs304.internship.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import jakarta.persistence.*;

import java.util.HashSet;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "user")
public class User {
    @Id
    @Column(name = "id", length = 45)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @Column(name = "first_name", length = 256)
    private String firstName;

    @Column(name = "last_name", length = 256)
    private String lastName;

    @Column(name = "email", length = 256)
    private String email;

    @Column(name = "mobile_number", length = 20)
    private String mobileNumber;

    @Column(name = "password", length = 256)
    private String password;

    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY)
    @JsonIgnore
    private Set<Company> company = new HashSet<>();

    public User(String firstName, String lastName, String email, String mobileNumber, String password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
        this.password = password;
    }

    public User(int id, String firstName, String lastName, String email, String mobileNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.mobileNumber = mobileNumber;
    }
}
