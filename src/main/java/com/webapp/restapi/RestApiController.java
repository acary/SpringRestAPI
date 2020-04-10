package com.webapp.restapi;

import com.querydsl.core.types.dsl.BooleanExpression;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.webapp.restapi.models.*;
import com.webapp.restapi.services.ProductService;

@RestController
public class RestApiController {

    // Index
    @GetMapping("/project")
    public Task project() {

        final Task project = new Task.Builder()
                .data("Automation Test Suite for REST APIs")
                .num(001)
                .build();

        return project;
    }

    // Task
    @GetMapping("/task_all")
    public Task task() {

        final Task task = new Task.Builder()
                .data("First")
                .num(001)
                .build();

        return task;
    }

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

    // Product
    /* Reference: https://www.tutorialspoint.com/spring_boot/spring_boot_service_components.htm */
    @Autowired
    ProductService productService;

    @RequestMapping(value = "/products")
    public ResponseEntity<Object> getProduct() {
        return new ResponseEntity<>(productService.getProducts(), HttpStatus.OK);
    }
    @RequestMapping(value = "/products/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Object>
    updateProduct(@PathVariable("id") String id, @RequestBody Product product) {

        productService.updateProduct(id, product);
        return new ResponseEntity<>("Product is updated successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> delete(@PathVariable("id") String id) {
        productService.deleteProduct(id);
        return new ResponseEntity<>("Product is deleted successfully", HttpStatus.OK);
    }
    @RequestMapping(value = "/products", method = RequestMethod.POST)
    public ResponseEntity<Object> createProduct(@RequestBody Product product) {
        productService.createProduct(product);
        return new ResponseEntity<>("Product is created successfully", HttpStatus.CREATED);

    }
}
