package com.webapp.restapi.models;

public class Sale {

    private int total;
    private int tax = 1;

    public Sale(int amount) {
        this.total = amount += tax;
    }

    public void add(int amount) {
        total = total + amount;
    }

    public int getTotal() {
        return total;
    }
}
