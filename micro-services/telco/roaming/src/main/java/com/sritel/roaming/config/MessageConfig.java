package com.sritel.roaming.config;

import com.sritel.roaming.adapter.MessageAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfig {

    @Bean
    public MessageAdapter messageAdapter(){
        return new MessageAdapter();
    }
}
