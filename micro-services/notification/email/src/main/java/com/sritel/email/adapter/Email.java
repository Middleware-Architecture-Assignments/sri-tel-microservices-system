package com.sritel.email.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface Email {
    Mono<Map<String, Object>> sendEmail(String username);
}
