package com.webapp.restapi.bdd;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import net.thucydides.core.annotations.Title;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SerenityRunner.class)
@Narrative(text={"Task tests"})

public class TaskManagement {

    @Steps
    TaskSteps task;

    @Test
    @Title("Task Dashboard")
    public void taskDashboard() {

        // Given
        task.checkExists();

        // When
        task.isAdded();

        // Then
        task.checkExists();
    }

    @Test
    @Title("View Tasks")
    public void viewTasks() {

        // Given
        task.checkExists();

        // When
        task.isAdded();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Add Task")
    public void addTask() {

        // Given
        task.checkExists();

        // When
        task.isAdded();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Task Details")
    public void taskDetails() {

        // Given
        task.checkExists();

        // When
        task.isAdded();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Edit Task")
    public void editTask() {

        // Given
        task.checkExists();

        // When
        task.isEdited();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Mark Complete")
    public void markComplete() {

        // Given
        task.checkExists();

        // When
        task.isCompleted();

        // Then
        task.checkExists();
    }

    @Test
    @Title("Delete Task")
    public void taskDeleted() {

        // Given
        task.checkExists();

        // When
        task.isDeleted();

        // Then
        task.checkNotExists();
    }
}