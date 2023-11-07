package com.sritel.ringingtone.adapter;

import reactor.core.publisher.Mono;

import java.util.Map;

public interface Message {
    Mono<Map<String, Object>> activateRingingTone(String username, String ringingToneId);
    Mono<Map<String, Object>> deactivateRingingTone(String username, String ringingToneId);
}
