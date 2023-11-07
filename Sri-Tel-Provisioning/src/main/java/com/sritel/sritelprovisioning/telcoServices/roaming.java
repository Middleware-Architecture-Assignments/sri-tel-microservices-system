package com.sritel.sritelprovisioning.telcoServices;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/telco/roaming")
public class roaming {

    @PostMapping("/sub")
    public Map<String, Object> subRoaming() {
        HashMap response = new HashMap<>();
        response.put("message","Subscribed to Roaming ");
        return response;
    }
    @PostMapping("/unsub")
    public Map<String, Object> unsubRoaming() {
        HashMap response = new HashMap<>();
        response.put("message","Unsubscribed to Roaming ");
        return response;
    }
}
