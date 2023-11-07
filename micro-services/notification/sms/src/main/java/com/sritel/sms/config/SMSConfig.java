package com.sritel.sms.config;

import com.sritel.sms.adapter.SMSAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SMSConfig {
    @Bean
    public SMSAdapter smsAdapter() {return new SMSAdapter(); }
}
