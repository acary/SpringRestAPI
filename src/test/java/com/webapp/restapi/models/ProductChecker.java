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
    Product product;

    @Test
    public void showProduct() {
        // Given
        product.getId();

        // When
        product.setId("007");

        // Then
        product.getId();
    }
}