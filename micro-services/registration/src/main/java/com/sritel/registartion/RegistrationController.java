package com.sritel.registartion;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/register")
public class RegistrationController {

//    @PostMapping("/register")
//    public String Register(@RequestBody RegisterModel formData) {
//        String firstName = formData.getFirstName();
//        String lastName = formData.getLastName();
//        String email = formData.getEmail();
//        String password = formData.getPassword();
//        String contactNumber = formData.getContactNumber();
//
//        if (firstName == null || lastName == null || email == null || password == null || contactNumber == null) {
//            return "Error";
//        } else {
//            return "Success";
//        }
//
//    }

    @PostMapping("/register/{firstname}/{lastname}/{email}/{password}/{contactNumber}")
    public String login(@PathVariable String firstname, @PathVariable String lastname, @PathVariable String email, @PathVariable String password, @PathVariable String contactNumber) {

        System.out.println("firstname: " + firstname);
        System.out.println("lastname: " + lastname);
        System.out.println("email: " + email);
        System.out.println("password: " + password);
        System.out.println("contactNumber: " + contactNumber);

        if (firstname == null || lastname == null || email == null || password == null || contactNumber == null) {
            return "Error";
        } else {
            return "Success";
        }

    }
}
