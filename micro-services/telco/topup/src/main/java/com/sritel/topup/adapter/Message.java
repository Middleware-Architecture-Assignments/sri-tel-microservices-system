package com.sritel.topup.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface Message {
    Mono<Map<String, Object>> topUpUser(String username, String amount);
}
