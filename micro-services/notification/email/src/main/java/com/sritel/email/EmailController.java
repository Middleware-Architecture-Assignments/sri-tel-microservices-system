package com.sritel.email;

import com.sritel.email.adapter.Email;
import com.sritel.email.adapter.EmailAdapter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/email")
@RequiredArgsConstructor
public class EmailController {
    private final Email activationService;

    @GetMapping("/send-notification")
    public Map<String, Object> sendNotification(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        System.out.println(requestData);
        String email = (String) requestData.get("email");
        String userid = (String) requestData.get("userid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> notificationResponse = activationService.sendEmail(userid).block();
        notificationResponse.put("Email",email);

        // Return the response from the activation service
        return notificationResponse;
    }
}
