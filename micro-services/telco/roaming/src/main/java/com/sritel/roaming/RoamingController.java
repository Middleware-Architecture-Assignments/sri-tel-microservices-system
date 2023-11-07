package com.sritel.roaming;

import com.sritel.roaming.adapter.Message;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/roaming")
@RequiredArgsConstructor
public class RoamingController {
    private final Message activationService;

    @PostMapping("/activate-roaming")
    public Map<String, Object> activateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("userid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> activationResponse = activationService.activateRoaming(username).block();

        // Return the response from the activation service
        return activationResponse;
    }

    @PostMapping("/deactivate-roaming")
    public Map<String, Object> deactivateRingingTone(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        String username = (String) requestData.get("userid");
        String ringingToneId = (String) requestData.get("toneid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> activationResponse = activationService.deactivateRoaming(username).block();

        // Return the response from the activation service
        return activationResponse;
    }
}
