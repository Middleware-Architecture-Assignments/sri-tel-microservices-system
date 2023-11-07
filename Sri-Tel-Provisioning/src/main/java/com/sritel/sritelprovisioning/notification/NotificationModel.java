package com.sritel.sritelprovisioning.notification;

import java.util.Date;

public class NotificationModel {
    private int id;
    private String notification;

    private String date;

    private String url;

    public NotificationModel(int id, String notification, String date, String url) {
        this.id = id;
        this.notification = notification;
        this.date = date;
        this.url = url;
    }

    //getters and setters
    public int getId() {
        return id;
    }

    public String getNotification() {
        return notification;
    }

    public String getDate() {
        return date;
    }

    public String getUrl() {
        return url;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setNotification(String notification) {
        this.notification = notification;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
