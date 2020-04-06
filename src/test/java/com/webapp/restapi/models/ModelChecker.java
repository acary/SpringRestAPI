package com.webapp.restapi.models;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Step;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;
import org.junit.runner.RunWith;

import com.webapp.restapi.models.*;
import com.webapp.restapi.repository.*;

@RunWith(SerenityRunner.class)
@Narrative(text={"Test models"})

public class ModelChecker {

    @Steps
    Hotel hotel;

    @Test
    public void showHotel() {

        // Given
        hotel.getId();

        // When
        hotel.getName();

        // Then
        hotel.getPricePerNight();
    }
}