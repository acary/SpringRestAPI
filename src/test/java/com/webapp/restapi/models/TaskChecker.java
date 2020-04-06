package com.webapp.restapi.models;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;
import org.junit.runner.RunWith;


@RunWith(SerenityRunner.class)
@Narrative(text={"Test tasks"})

public class TaskChecker {

    @Steps
    TaskSteps task;

    @Test
    public void taskExists() {

        // Given
        task.checkExists();

        // When


        // Then

    }
}