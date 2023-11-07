package com.sritel.chat;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/chat")
public class ChatController {

    @GetMapping("/messages/{questionId}")
    public List<String> getMessages(@PathVariable Integer questionId) {
        if(questionId == 1) {
            return Arrays.asList("Call us on 0778956251 or Email us: sritelhelpdesk@gmail.com" );
        } else if (questionId == 2) {
            return Arrays.asList("We handle all kinds of Services from Mobile, Fixed, Broadband, Data and Enterprise Solutions");
        } else if (questionId == 3){
            return Arrays.asList("In the Home Page click on E-bills tab view your current and past bills");
        } else if (questionId == 4){
            return Arrays.asList("You can make online payments by logging into your account and selecting the payment option. Follow the prompts to complete the transaction.");
        } else if (questionId == 5){
            return Arrays.asList("To view your payment history, log in to your account and navigate to the \"Payment History\" section. There, you'll find a record of your past payments.");
        } else if (questionId == 6){
            return Arrays.asList("We accept various payment methods, including credit cards, debit cards, and online banking. You can choose the one that suits you best during the payment process.");
        } else if (questionId == 7){
            return Arrays.asList("To set up email notifications, go to your account settings and find the \"Notification Preferences\" section. You can customize your notification preferences there.");
        } else if (questionId == 8){
            return Arrays.asList("Our customer care agents are available for live chat support during our business hours, which are typically from 9:00 AM to 6:00 PM, Monday to Friday.");
        } else {
            return Arrays.asList("Sorry, I don't understand your question. Please try again.");
        }
    }

}