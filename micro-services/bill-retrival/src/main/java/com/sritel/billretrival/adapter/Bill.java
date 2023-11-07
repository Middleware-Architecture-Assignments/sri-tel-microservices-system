package com.sritel.billretrival.adapter;

import org.springframework.http.ResponseEntity;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

public interface Bill {
    Mono<Map<String,Object>> fetchPendingBill();
    Mono<Map<String,Object>> fetchPaidBill();
}
