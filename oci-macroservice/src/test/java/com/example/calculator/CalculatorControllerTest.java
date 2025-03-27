package com.example.calculator;  // Changed from test.java.com.example.calculator

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class CalculatorControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void testAdd() {
        ResponseEntity<Calculator> response = restTemplate.getForEntity("/api/add?num1=5&num2=3", Calculator.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("8", response.getBody().result());
    }

    @Test
    public void testSub() {
        ResponseEntity<Calculator> response = restTemplate.getForEntity("/api/sub?num1=5&num2=2", Calculator.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("3", response.getBody().result());
    }
}