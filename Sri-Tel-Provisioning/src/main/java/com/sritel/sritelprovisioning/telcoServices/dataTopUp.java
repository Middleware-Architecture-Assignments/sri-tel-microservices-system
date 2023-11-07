package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/telco/dataTopUp")
public class dataTopUp {

    @PostMapping("/sub/{Topupid}")
    public Map<String, Object> subRingTone(@PathVariable String Topupid) {
        HashMap response = new HashMap<>();
        if(Topupid.equals("1"))
            response.put("message","Data top up 1GB Activated for 1 month") ;
        else if(Topupid.equals("2"))
            response.put("message","Data top up 3GB Activated for 1 month") ;
        else if(Topupid.equals("3"))
            response.put("message","Data top up 5GB Activated for 1 month") ;
        else
            response.put("message","Did not subscribe to ant data top up plans") ;

        return response;
    }

    @PostMapping("/unsub/{Topupid}")
    public Map<String, Object> unsubRingTone(@PathVariable String Topupid) {
        HashMap response = new HashMap<>();
        response.put("message","Unsubscribed to data top up plan " + Topupid);
        return response;
    }
}