package com.sritel.ringingtone.config;

import com.sritel.ringingtone.adapter.MessageAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfig {

    @Bean
    public MessageAdapter messageAdapter(){
        return new MessageAdapter();
    }
}
