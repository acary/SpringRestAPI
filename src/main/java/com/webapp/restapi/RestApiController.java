package com.webapp.restapi;

import com.querydsl.core.types.dsl.BooleanExpression;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.webapp.restapi.models.*;

@RestController
public class RestApiController {

    // Hello
    @GetMapping("/hello")
    public String hello() {
        return "Hello World! This is the first endpoint!";
    }

}
