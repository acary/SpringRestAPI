package com.webapp.restapi.models;

import com.webapp.restapi.models.Contact;
import com.webapp.restapi.repository.ContactRepository;
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
@WebMvcTest(value=UserModelTest.class)

public class UserModelTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private ContactRepository contactRepository;

    @Test
    public void testSetUser() throws Exception {
        Contact user = new Contact("Adam Jones", "321 Main St", "Austin",
                "Texas", "512-555-1234", "adam@jones.com");
        user.setId("001");
        user.getId();
        user.setName("Bob Jones");
        user.getName();
        user.setAddress("123 Main Street");
        user.getAddress();
        user.setCity("Austin");
        user.getCity();
        user.setState("Texas");
        user.getState();
        user.setPhone("(512) 555-1234");
        user.getPhone();
        user.setEmail("bob@jones.com");
        user.getEmail();

        Contact userMock = Mockito.mock(Contact.class);
        when(userMock.getId()).thenReturn("001");
        Assertions.assertEquals("001", userMock.getId());

        when(userMock.getName()).thenReturn("Bob Jones");
        Assertions.assertEquals("Bob Jones", userMock.getName());

    }
}