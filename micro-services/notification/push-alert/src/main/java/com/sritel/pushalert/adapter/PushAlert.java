package com.sritel.pushalert.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface PushAlert {
    Mono<Map<String, Object>> sendAlert(String userid);
}
