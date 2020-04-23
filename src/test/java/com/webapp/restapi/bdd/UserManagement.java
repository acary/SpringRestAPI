package com.webapp.restapi.bdd;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SerenityRunner.class)
@Narrative(text={"User tests"})

public class UserManagement {

    @Steps
    private UserSteps user;

    @Test
    @Title("Create User")
    public void createUser() {

        // Given

        // When
        user.createUser();

        // Then
        user.userDetails();

    }

    @Test
    @Title("View User")
    public void viewUser() {

        // Given

        // When
        user.viewUsers();

        // Then
    }

    @Test
    @Title("User Details")
    public void userDetails() {

        // Given
        user.viewUsers();

        // When

        // Then
        user.userDetails();
    }

    @Test
    @Title("Edit User")
    public void editUser() {

        // Given
        user.userDetails(); // Name is "Adam"

        // When
        user.editUser();    // Change user attributes

        // Then
        user.updatedUser(); // Name is "Zulu"

    }

    @Test
    @Title("Delete User")
    public void deleteUser() {

        // Given
        user.viewUsers();

        // When
        user.deleteUser();

        // Then

    }
}