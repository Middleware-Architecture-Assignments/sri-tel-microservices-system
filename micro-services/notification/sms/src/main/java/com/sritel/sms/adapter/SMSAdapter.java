package com.sritel.sms.adapter;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

public class SMSAdapter implements SMS{
    @Override
    public Mono<Map<String, Object>> sendMessage(String userid) {
        WebClient webClient = WebClient.create("http://localhost:8082");

        return Mono.fromCallable(() -> {
            String data = webClient
                    .get()
                    .uri("/userNotification?userid={username}",userid)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(data);

            Map<String, Object> populatedMap = new HashMap<>();
            populatedMap.put("Userid from adapter",jsonNode.path("UserId").asText());
            populatedMap.put("reply from adapter",jsonNode.path("Notification").asText());

            return populatedMap;
        });
    }
}
