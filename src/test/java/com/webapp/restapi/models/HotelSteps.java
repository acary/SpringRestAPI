package com.webapp.restapi.models;

import net.thucydides.core.annotations.Step;

import static org.assertj.core.api.Assertions.assertThat;

import com.webapp.restapi.models.Hotel;

public class HotelSteps {

    String actor;
    Hotel hotel;

    @Step
    public void checkExists() {
        hotel.check();
    }

}
