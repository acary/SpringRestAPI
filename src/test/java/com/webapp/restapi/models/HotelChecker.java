package com.webapp.restapi.models;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;
import org.junit.runner.RunWith;


@RunWith(SerenityRunner.class)
@Narrative(text={"Test hotel"})

public class HotelChecker {

    @Steps
    HotelSteps hotel;

    @Test
    public void hotelExists() {

        // Given
        hotel.checkExists();

        // When
        hotel.checkExists();

        // Then
        hotel.checkExists();
    }
}