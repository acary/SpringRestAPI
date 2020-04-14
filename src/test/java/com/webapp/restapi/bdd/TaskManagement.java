package com.webapp.restapi.bdd;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SerenityRunner.class)
@Narrative(text={"Test tasks"})

public class TaskManagement {

    @Steps
    TaskSteps task;

    @Test
    @Title("Adding a task updates the database")
    public void taskAdded() {

        // Given
        task.checkExists();

        // When
        task.isAdded();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Marking a task completed changes status to: completed")
    public void taskCompleted() {

        // Given
        task.checkExists();

        // When
        task.isCompleted();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Editing a task updates the item attributes")
    public void taskEdited() {

        // Given
        task.checkExists();

        // When
        task.isEdited();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Deleting a task removes it from the database")
    public void taskDeleted() {

        // Given
        task.checkExists();

        // When
        task.isDeleted();

        // Then
        task.checkExists();
    }
}