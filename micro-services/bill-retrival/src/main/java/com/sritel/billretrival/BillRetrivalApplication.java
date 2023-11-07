package com.sritel.billretrival;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
public class BillRetrivalApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillRetrivalApplication.class, args);
	}

}
