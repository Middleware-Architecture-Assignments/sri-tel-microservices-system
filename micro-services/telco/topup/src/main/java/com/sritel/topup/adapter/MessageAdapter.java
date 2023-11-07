package com.sritel.topup.adapter;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.HashMap;
import java.util.Map;

public class MessageAdapter implements Message {

    @Override
    public Mono<Map<String, Object>> topUpUser(String username, String amount) {
        WebClient webClient = WebClient.create("http://localhost:8082");

        Map<String,String> body = new HashMap<>();
        body.put("userid", username);
        body.put("amount", amount);

        return Mono.fromCallable(() -> {
            String data = webClient
                    .post()
                    .uri("/telco/dataTopUp")
                    .contentType(MediaType.APPLICATION_JSON)
                    .bodyValue(body)
                    .retrieve()
                    .bodyToMono(String.class)
                    .block();

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(data);

            Map<String, Object> populatedMap = new HashMap<>();
            populatedMap.put("reply from adapter",jsonNode.path("Message").asText());
            populatedMap.put("TopUp-Amount from adapter",jsonNode.path("TopUp").asText());

            return populatedMap;
        });
    }

}
