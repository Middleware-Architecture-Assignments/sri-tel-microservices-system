package com.sritel.topup;

import com.sritel.topup.adapter.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/topup")
@RequiredArgsConstructor
public class TopupController {
    private final Message activationService;

    @PostMapping("")
    public Map<String, Object> activateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("userid");
        String amount = (String) requestData.get("amount");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> activationResponse = activationService.topUpUser(username,amount).block();

        // Return the response from the activation service
        return activationResponse;
    }
}
