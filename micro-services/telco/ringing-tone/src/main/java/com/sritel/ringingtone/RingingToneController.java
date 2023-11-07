package com.sritel.ringingtone;

import com.sritel.ringingtone.adapter.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/ringing-tone")
@RequiredArgsConstructor
public class RingingToneController {
    private final Message activationService;  // Assuming you have a service/adapter

    @PostMapping("/activate-ringing-tone")
    public Map<String, Object> activateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("userid");
        String ringingToneId = (String) requestData.get("toneid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> activationResponse = activationService.activateRingingTone(username, ringingToneId).block();

        // Return the response from the activation service
        return activationResponse;
    }

    @PostMapping("/deactivate-ringing-tone")
    public Map<String, Object> deactivateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("userid");
        String ringingToneId = (String) requestData.get("toneid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> activationResponse = activationService.deactivateRingingTone(username, ringingToneId).block();

        // Return the response from the activation service
        return activationResponse;
    }
}
