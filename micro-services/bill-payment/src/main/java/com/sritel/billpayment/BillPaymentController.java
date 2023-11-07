package com.sritel.billpayment;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/bill-payment")
@RequiredArgsConstructor
public class BillPaymentController {

    private final String sampleCardNumber = "1234567812345678";
    private final String sampleCardHolderName = "Ravindu Wegiriya";
    private final String sampleCardExpiryMonth = "12";
    private final String sampleCardExpiryYear = "25";
    private final String sampleCardCVV = "123";

    @PostMapping("/initiate-payment")
    public String initiatePayment(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        int paymentValue = Integer.parseInt(request.get("payment_value"));

        return "User " + username + " is making a payment of Rs. " + paymentValue;
    }

    @PostMapping("/verify-card/{cardNumber}/{cardHolderName}/{cardExpiryMonth}/{cardExpiryYear}/{cardCVV}")
    public String verifyCard(@PathVariable String cardNumber,
                             @PathVariable String cardHolderName,
                             @PathVariable String cardExpiryMonth,
                             @PathVariable String cardExpiryYear,
                             @PathVariable String cardCVV) {

        // Compare the received card details with the sample card
        if (cardNumber.equals(sampleCardNumber) &&
                cardHolderName.equals(sampleCardHolderName) &&
                cardExpiryMonth.equals(sampleCardExpiryMonth) &&
                cardExpiryYear.equals(sampleCardExpiryYear) &&
                cardCVV.equals(sampleCardCVV)) {
            return "Card Verified, Payment accepted";
        } else {
            return "Invalid Card Details, Payment failed, ";
        }
    }


}
