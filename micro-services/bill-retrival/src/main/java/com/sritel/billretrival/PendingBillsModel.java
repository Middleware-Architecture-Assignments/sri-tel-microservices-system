package com.sritel.billretrival;

public class PendingBillsModel {
    private String billNumber;
    private String billName;
    private Double billAmount;
    private String billDueDate;

    public PendingBillsModel(String billNumber, String billName, Double billAmount, String billDueDate) {
        this.billNumber = billNumber;
        this.billName = billName;
        this.billAmount = billAmount;
        this.billDueDate = billDueDate;
    }

}
