package com.webapp.restapi.models;

public class Address {
    private String city;
    private String country;

    protected Address(String city, String country){}

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }
}