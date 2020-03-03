package com.webapp.restapi;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.webapp.restapi.models.*;

@RestController
public class RestApiController {

    // Hello
    @GetMapping("/hello")
    public String hello() {
        return "Hello World! This is the first endpoint!";
    }

    // Greeting
    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();

    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "Earthling") String name) {

        return new Greeting(counter.incrementAndGet(), String.format(template, name));
    }

    // Sale

    @GetMapping("/sale")
    public Sale sale() {

        Sale newOrder;
        newOrder = new Sale(100);
        return newOrder;
    }

}
