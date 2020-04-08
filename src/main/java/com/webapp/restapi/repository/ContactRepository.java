package com.webapp.restapi.repository;

import com.webapp.restapi.models.Contact;

import org.springframework.data.repository.CrudRepository;

public interface ContactRepository extends CrudRepository<Contact, String> {
    @Override
    void delete(Contact deleted);
}