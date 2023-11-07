package com.sritel.pushalert.config;

import com.sritel.pushalert.adapter.PushAlertAdapter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AlertConfig {
    @Bean
    public PushAlertAdapter pushAlertAdapter() {return new PushAlertAdapter();}
}
