package com.webapp.restapi.bdd;

import com.webapp.restapi.models.Task;
import net.thucydides.core.annotations.Step;
import static org.assertj.core.api.Assertions.assertThat;

public class TaskSteps {

    // Define the object under test
    private Task task = new Task(
            "Create Service Catalog",
            "Requested");

    // The @Step annotation marks a method that will be recorded and appear in the test report

    @Step("Check that a task does not exist")
    public void checkNotExists() {
        // Prepare test data

        // Action under test

        // Check the outcome
        task.check();
    }

    @Step("Check that a task was added")
    public void isAdded() {
        // Prepare test data
        assertThat(task.getName()).isEqualTo("Create Service Catalog");

        // Action under test

        // Check the outcome
        task.check();
    }

    @Step("Check that a task exists")
    public void checkExists() {
        // Prepare test data

        // Action under test

        // Check the outcome
        task.check();
    }

    @Step("Check that a task is completed")
    public void isCompleted() {
        // Prepare test data
        task.check();

        // Action under test
        task.setStatus("Completed");

        // Check the outcome
        assertThat(task.getStatus()).isEqualTo("Completed");
    }

    @Step("Check that a task is edited")
    public void isEdited() {
        // Prepare test data
        task.check();

        // Action under test
        task.setStatus("In Progress");

        // Check the outcome
        assertThat(task.getStatus()).isEqualTo("In Progress");

    }

    @Step
    public void isDeleted() {
        // Prepare test data
        task.check();

        // Action under test

        // Check the outcome
        task.check();
    }
}
