package com.sritel.registartion;

import lombok.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class RegisterModel {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String contactNumber;
}
