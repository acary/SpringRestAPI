package com.webapp.restapi.models;

import com.webapp.restapi.models.Task;
import com.webapp.restapi.repository.TaskRepository;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
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
@WebMvcTest(value=TaskModelTest.class)

public class TaskModelTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private Task task;
    private TaskRepository taskRepository;

    @Test
    public void testGetTasks() throws Exception {
        when(task.getId()).thenReturn("001");
    }

    @Test
    public void testSetTasks() throws Exception {
        Task mockTask = new Task("File expense report", "Requested");
        mockTask.setId("001");
        mockTask.getId();
        mockTask.setName("TPS Report");
        mockTask.getName();
        mockTask.setStatus("In Process");
        mockTask.getStatus();
        mockTask.check();

        Task taskMock = Mockito.mock(Task.class);
        when(taskMock.getId()).thenReturn("001");
        Assertions.assertEquals("001", taskMock.getId());

        when(taskMock.getName()).thenReturn("File expense report");
        Assertions.assertEquals("File expense report", taskMock.getName());

        when(taskMock.getStatus()).thenReturn("Requested");
        Assertions.assertEquals("Requested", taskMock.getStatus());
    }
}