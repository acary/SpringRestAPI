package com.webapp.restapi.controller;

import com.webapp.restapi.controllers.UserController;
import com.webapp.restapi.repository.UserRepository;
import com.webapp.restapi.models.User;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

/**
 * This class demonstrates how to test a controller using MockMVC with Standalone setup.
 *
 */
@RunWith(MockitoJUnitRunner.class)
public class UserControllerTest {

    private MockMvc mvc;

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserController userController;

    // This object will be magically initialized by the initFields method below.
    private JacksonTester<User> jsonTask;

    @Before
    public void setup() {
        // We would need this line if we would not use MockitoJUnitRunner
        // MockitoAnnotations.initMocks(this);
        // Initializes the JacksonTester
        JacksonTester.initFields(this, new ObjectMapper());
        // MockMvc standalone approach
        mvc = MockMvcBuilders.standaloneSetup(userController)
                .build();
    }

    @Test
    public void headerIsPresent() throws Exception {
        // when
        MockHttpServletResponse response = mvc.perform(
                get("/user")
                        .accept(MediaType.APPLICATION_JSON))
                .andReturn().getResponse();

        // then
        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
    }
}
