package com.webapp.restapi.controller;

import com.webapp.restapi.models.UserModelTest;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@WebMvcTest(value=RestApiControllerTest.class)
public class RestApiControllerTest {

    @Test
    public void contextLoads() {
    }
}
