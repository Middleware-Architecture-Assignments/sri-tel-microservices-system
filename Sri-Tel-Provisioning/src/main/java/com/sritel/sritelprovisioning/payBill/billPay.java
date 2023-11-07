package com.sritel.sritelprovisioning.payBill;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/payBill")
public class billPay {

    @PostMapping("")
    public Map<String, Object> payBill(@RequestParam("userid") String userid,
                                       @RequestParam("amount") String payAmount){
        HashMap returnData = new HashMap<>();

        returnData.put("userID",userid);
        returnData.put("Message", "Paid "+payAmount);

        return returnData;

    }
}
