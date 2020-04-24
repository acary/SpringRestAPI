package com.webapp.restapi.controllers;

import com.webapp.restapi.models.User;
import com.webapp.restapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @RequestMapping(method=RequestMethod.GET, value="/user")
    public Iterable<User> user() {
        return userRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/user")
    public User save(@RequestBody User user) {
        userRepository.save(user);

        return user;
    }

    @RequestMapping(method=RequestMethod.GET, value="/user/{id}")
    public Optional<User> show(@PathVariable String id) {
        return userRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/user/{id}")
    public User update(@PathVariable String id, @RequestBody User user) {
        Optional<User> opt_user = userRepository.findById(id);
        User c = opt_user.get();
        if(user.getName() != null)
            c.setName(user.getName());
        if(user.getAddress() != null)
            c.setAddress(user.getAddress());
        if(user.getCity() != null)
            c.setCity(user.getCity());
        if(user.getState() != null)
            c.setState(user.getState());
        if(user.getPhone() != null)
            c.setPhone(user.getPhone());
        if(user.getEmail() != null)
            c.setEmail(user.getEmail());
        userRepository.save(c);
        return c;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/user/{id}")
    public String delete(@PathVariable String id) {
        Optional<User> opt_user = userRepository.findById(id);
        User user = opt_user.get();
        userRepository.delete(user);

        return "";
    }
}