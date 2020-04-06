package com.webapp.restapi.models;

import net.thucydides.core.annotations.Step;

import static org.assertj.core.api.Assertions.assertThat;

import com.webapp.restapi.models.Product;

public class ProductSteps {

    Product product;

    @Step
    public void checkExists() {
        product.check();
    }

    @Step
    public void checkType() {
        product.check();
    }
}