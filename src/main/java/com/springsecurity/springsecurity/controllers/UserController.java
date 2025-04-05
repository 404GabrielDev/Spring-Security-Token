package com.springsecurity.springsecurity.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/user")
public class UserController {
    @GetMapping
    public ResponseEntity<Map<String, String>> getUser() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Sucesso!");
        return ResponseEntity.ok(response);
    }

}
