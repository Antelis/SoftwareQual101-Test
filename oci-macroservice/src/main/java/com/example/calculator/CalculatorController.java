package com.example.calculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class CalculatorController {

    @GetMapping("/add")
    public Calculator add(@RequestParam int num1, @RequestParam int num2) {
        int result = num1 + num2;
        return new Calculator(String.valueOf(result));
    }

    @GetMapping("/sub")
    public Calculator subtract(@RequestParam int num1, @RequestParam int num2) {
        int result = num1 - num2;
        return new Calculator(String.valueOf(result));
    }

}