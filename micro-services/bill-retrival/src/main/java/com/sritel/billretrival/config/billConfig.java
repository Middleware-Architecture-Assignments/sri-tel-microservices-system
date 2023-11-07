package com.sritel.billretrival.config;

import com.sritel.billretrival.adapter.BillAdapterImplementation;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class billConfig {

    @Bean
    public BillAdapterImplementation billAdapterImplementation() {
        return new BillAdapterImplementation(); // Create and return an instance of the implementation class
    }

}
