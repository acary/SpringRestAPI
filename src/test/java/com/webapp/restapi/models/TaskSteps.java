package com.webapp.restapi.models;

import net.thucydides.core.annotations.Step;
import static org.assertj.core.api.Assertions.assertThat;

public class TaskSteps {

    Task task;

    @Step
    public void checkExists() {

        task.check();
    }

}
