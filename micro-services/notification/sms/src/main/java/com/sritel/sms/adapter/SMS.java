package com.sritel.sms.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface SMS {
    Mono<Map<String, Object>> sendMessage(String userid);
}
