package com.webapp.restapi.models;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SerenityRunner.class)
@Narrative(text={"Test product"})

public class ProductChecker {

    @Steps
    ProductSteps product;

    @Test
    public void checkProduct() {
        // Given
        product.checkExists();

        // When
        // Then
    }

    @Test
    public void checkProductType() {
        // Given
        product.checkType();

        // When
        // Then
    }
}