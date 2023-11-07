package com.sritel.billpayment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })

public class BillPaymentApplication {

	public static void main(String[] args) {
		SpringApplication.run(BillPaymentApplication.class, args);
	}

}
