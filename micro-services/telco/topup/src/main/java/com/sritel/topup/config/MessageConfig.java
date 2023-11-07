package com.sritel.topup.config;

import com.sritel.topup.adapter.MessageAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfig {

    @Bean
    public MessageAdapter messageAdapter(){
        return new MessageAdapter();
    }
}
