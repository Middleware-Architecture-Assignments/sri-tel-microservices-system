package com.sritel.sritelprovisioning.billRet;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/getBill")
public class billRet {

    @GetMapping("")
    public Map<String, Object> getBill(@RequestParam("userid") String userID){
        HashMap response = new HashMap<>();

        Map<String,Object> billamount = new HashMap<>();
        billamount.put("TopUp",100);
        billamount.put("RingingTone",100);
        billamount.put("Roaming",700);

        response.put("UserID", userID);
        response.put("Bill", billamount);
        response.put("Bill Date", "2023-10-20");

        return response;
    }

}
