package com.webapp.restapi.repository;
import com.webapp.restapi.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

public interface UserRepository extends CrudRepository<User, String> {
    @Override
    void delete(User deleted);
}