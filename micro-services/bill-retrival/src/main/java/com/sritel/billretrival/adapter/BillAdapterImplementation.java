package com.sritel.billretrival.adapter;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import reactor.core.publisher.Mono;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.HashMap;
import java.util.Map;

public class BillAdapterImplementation implements Bill {

    @Override
    public Mono<Map<String, Object>> fetchPendingBill() {
        WebClient webClient = WebClient.create("http://localhost:8082");

        // Use Mono.fromCallable to perform data retrieval and transformation
        return Mono.fromCallable(() -> {
            String data = webClient
                    .get()
                    .uri(builder -> builder
                            .path("/getBill")
                            .queryParam("userid", "1")
                            .build())
                    .retrieve()
                    .bodyToMono(String.class)
                    .block(); // Block to get the response

            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode jsonNode = objectMapper.readTree(data);

            Map<String, Object> populatedBill1 = new HashMap<>();
            populatedBill1.put("UserId", jsonNode.path("UserID").asText());
            populatedBill1.put("Type", "TopUp");
            populatedBill1.put("Bill", jsonNode.path("Bill").path("TopUp"));
            populatedBill1.put("Date", jsonNode.path("Bill Date").asText());

            Map<String, Object> populatedBill2 = new HashMap<>();
            populatedBill2.put("UserId", jsonNode.path("UserID").asText());
            populatedBill2.put("Type", "Roaming");
            populatedBill2.put("Bill", jsonNode.path("Bill").path("Roaming"));
            populatedBill2.put("Date", jsonNode.path("Bill Date").asText());

            Map<String, Object> populatedBill3 = new HashMap<>();
            populatedBill3.put("UserId", jsonNode.path("UserID").asText());
            populatedBill3.put("Type", "RingingTone");
            populatedBill3.put("Bill", jsonNode.path("Bill").path("RingingTone"));
            populatedBill3.put("Date", jsonNode.path("Bill Date").asText());

            Map<String, Object> populatedMap = new HashMap<>();
            populatedMap.put("Bill01", populatedBill1);
            populatedMap.put("Bill02", populatedBill2);
            populatedMap.put("Bill03", populatedBill3);

            return populatedMap;
        });
    }

    @Override
    public Mono<Map<String,Object>> fetchPaidBill() {
        return null;
    }
}
