package com.webapp.restapi.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.webapp.restapi.models.Task;
import com.webapp.restapi.repository.TaskRepository;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;


@RestController
public class TaskController {

    @Autowired
    TaskRepository taskRepository;

    @RequestMapping(method= RequestMethod.GET, value="/tasks")
    public Iterable<Task> task() {
        return taskRepository.findAll();
    }

    @RequestMapping(method=RequestMethod.POST, value="/tasks")
    public Task save(@RequestBody Task task) {
        taskRepository.save(task);

        return task;
    }

    @RequestMapping(method=RequestMethod.GET, value="/tasks/{id}")
    public Optional<Task> show(@PathVariable String id) {
        return taskRepository.findById(id);
    }

    @RequestMapping(method=RequestMethod.PUT, value="/tasks/{id}")
    public Task update(@PathVariable String id, @RequestBody Task task) {
        Optional<Task> opttask = taskRepository.findById(id);
        Task t = opttask.get();
        if(task.getName() != null)
            t.setName(task.getName());
        if(task.getStatus() != null)
            t.setStatus(task.getStatus());
        taskRepository.save(t);
        return t;
    }

    @RequestMapping(method=RequestMethod.DELETE, value="/tasks/{id}")
    public String delete(@PathVariable String id) {
        Optional<Task> opttask = taskRepository.findById(id);
        Task task = opttask.get();
        taskRepository.delete(task);

        return "";
    }
}