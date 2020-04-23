package com.webapp.restapi.bdd;

import com.webapp.restapi.models.Contact;
import com.webapp.restapi.repository.ContactRepository;
import net.thucydides.core.annotations.Step;
import static org.assertj.core.api.Assertions.assertThat;

import com.webapp.restapi.controllers.ContactController;
import org.assertj.core.api.Assertions;

public class UserSteps {

    // Define the object under test
    Contact user = new Contact(
            "Adam",
            "123 Main",
            "Austin",
            "Texas",
            "512-555-5555",
            "adam@email.com"
    );

    // The @Step annotation marks a method that will be recorded and appear in the test report

    @Step("Create User")
    public void createUser() {
        // Prepare test data

        // Action under test

        // Check the outcome
        assertThat(user.getName()).isEqualTo("Adam");
    }

    @Step("View Users")
    public void viewUsers() {
        // Prepare test data

        // Action under test

        // Check the outcome
        user.check();

    }

    @Step("User Details")
    public void userDetails() {
        // Prepare test data

        // Action under test

        // Check the outcome
        assertThat(user.getName()).isEqualTo("Adam");
    }

    @Step("Edit User")
    public void editUser() {
        // Prepare test data

        // Action under test
        user.setName("Zulu");

        // Check the outcome
        assertThat(user.getName()).isEqualTo("Zulu");
    }

    @Step("Delete User")
    public void deleteUser() {
        // Prepare test data

        // Action under test

        // Check the outcome
        user.check();
    }

    @Step("Updated User")
    public void updatedUser() {
        // Prepare test data

        // Action under test

        // Check the outcome
        assertThat(user.getName()).isEqualTo("Zulu");
    }

}