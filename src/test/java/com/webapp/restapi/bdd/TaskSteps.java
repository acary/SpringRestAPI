package com.webapp.restapi.bdd;

import com.webapp.restapi.models.Task;
import net.thucydides.core.annotations.Step;
import static org.assertj.core.api.Assertions.assertThat;

public class TaskSteps {

    Task task;

    @Step
    public void checkExists() {

        task.check();
    }

    @Step
    public void isAdded() {

        task.check();
    }

    @Step
    public void isCompleted() {

        task.check();
    }

    @Step
    public void isEdited() {

        task.check();
    }

    @Step
    public void isDeleted() {

        task.check();
    }
}
