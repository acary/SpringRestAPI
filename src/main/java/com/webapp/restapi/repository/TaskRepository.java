package com.webapp.restapi.repository;

import com.webapp.restapi.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task, String> {
    @Override
    void delete(Task deleted);
}