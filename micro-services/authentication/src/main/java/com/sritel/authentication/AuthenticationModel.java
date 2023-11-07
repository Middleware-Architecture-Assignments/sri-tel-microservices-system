package com.sritel.authentication;

public class AuthenticationModel {
    //Email and Password
    private String Email;
    private String password;

    //getters and setters
    public String getEmail(){ return this.Email; }

    public void setEmail(String Email){ this.Email = Email; }

    public String getPassword(){ return this.password; }

    public void setPassword(String password){ this.password = password; }
}
