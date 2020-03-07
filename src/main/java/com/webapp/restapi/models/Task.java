package com.webapp.restapi.models;

public class Task {

    public final String data;
    public final int num;

    public Task(String data, int num) {
        this.data = data;
        this.num = num;
    }

    public static class Builder {
        private String data;
        private int num;

        public Builder data(String data) {
            this.data = data;
            return this;
        }

        public Builder num(int num) {
            this.num = num;
            return this;
        }

        public Task build() {
            return new Task(data, num); // etc
        }
    }
}
