package com.sritel.email.config;

import com.sritel.email.adapter.EmailAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class EmailConfig {

    @Bean
    public EmailAdapter emailAdapter() {return new EmailAdapter(); }
}
