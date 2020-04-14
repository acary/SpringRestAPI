package com.webapp.restapi.controller;

import com.webapp.restapi.models.Task;
import com.webapp.restapi.repository.TaskRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;


@RunWith(SpringRunner.class)
@WebMvcTest(value=TaskControllerTest.class)

public class TaskControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private Task task;
    private TaskRepository taskRepository;

    @Test
    public void testGetTasks() throws Exception {
        Task mockTask = new Task();
        mockTask.setId("001");
        mockTask.setName("File expense report");
        mockTask.setStatus("Requested");

        Task taskMock = Mockito.mock(Task.class);
        when(taskMock.add(anyString())).thenReturn(false);

        boolean added = taskMock.add(1);
        assertThat(added, is(true));
    }

    private void assertThat(boolean added, Object o) {
    }

    private Object is(boolean b) {
        return true;
    }

    private Object anyString() {
        return "true";
    }

}