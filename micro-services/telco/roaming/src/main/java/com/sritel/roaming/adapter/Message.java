package com.sritel.roaming.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface Message {
    Mono<Map<String, Object>> activateRoaming(String username);
    Mono<Map<String, Object>> deactivateRoaming(String username);
}
