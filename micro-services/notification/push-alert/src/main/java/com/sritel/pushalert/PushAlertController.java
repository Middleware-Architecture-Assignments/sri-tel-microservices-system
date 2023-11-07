package com.sritel.pushalert;

import com.sritel.pushalert.adapter.PushAlert;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/push-alert")
@RequiredArgsConstructor
public class PushAlertController {

    public final PushAlert pushAlert;

    @GetMapping("/send-alert")
    public Map<String, Object> sendNotification(@RequestBody Map<String, Object> requestData) {
        // Extract username and ringingToneId from the request data
        System.out.println(requestData);
        String userid = (String) requestData.get("userid");

        // Call a service or adapter to handle ringing tone activation
        Map<String, Object> notificationResponse = pushAlert.sendAlert(userid).block();

        // Return the response from the activation service
        return notificationResponse;
    }
}
