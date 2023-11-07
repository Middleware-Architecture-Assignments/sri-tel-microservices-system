package com.sritel.sritelprovisioning.notification;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import com.sritel.sritelprovisioning.notification.NotificationModel;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/userNotification")
@RequiredArgsConstructor
public class notification {

    @GetMapping("/list")
    public List<NotificationModel> getDummyNotifications() {
        // Create a list of dummy notifications
        List<NotificationModel> notifications = new ArrayList<>();
        notifications.add(new NotificationModel(1, "Bill Payment Reminder for Roaming Charges", "2021-11-05", "bills"));
        notifications.add(new NotificationModel(2, "You have new Messages", "2021-11-05", "chat"));
        notifications.add(new NotificationModel(3, "Ringing Tone Subscription Deactivated. Please Renew the Subscription", "2021-11-05","services"));

        return notifications;
    }

}
