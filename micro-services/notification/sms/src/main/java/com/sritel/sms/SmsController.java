package com.sritel.sms;

import com.sritel.sms.adapter.SMS;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/sms")
@RequiredArgsConstructor
public class SmsController {
    private final SMS smsService;

    @GetMapping("/send-sms")
    public Map<String, Object> sendNotification(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        System.out.println(requestData);
        String contact = (String) requestData.get("contact");
        String userid = (String) requestData.get("userid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> notificationResponse = smsService.sendMessage(userid).block();
        notificationResponse.put("Contact",contact);

        // Return the response from the activation service
        return notificationResponse;
    }
}
