package com.webapp.restapi.math;

import net.serenitybdd.junit.runners.SerenityRunner;
import net.thucydides.core.annotations.Narrative;
import net.thucydides.core.annotations.Steps;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(SerenityRunner.class)
@Narrative(text={"Test arithmetic"})
public class WhenAddingNumbers {

    @Steps
    MathWizSteps calculator;

    @Test
    public void addingSums() {
        // Given
        calculator.startsWith(1);

        // When
        calculator.adds(2);

        // Then
        calculator.shouldHave(3);
    }
}