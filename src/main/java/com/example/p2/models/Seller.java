package com.example.p2.models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Sellers")
public class Seller extends User{
    private Integer sellerId;
    private String businessName;
    private Integer rating;


    public Seller() {}

    public Seller(String username, String password, String email, String firstName, String lastName, Date dateOfBirth, String address, String city, String state, Integer zipcode, BigDecimal phone, String businessName, Integer rating,Integer orderId,Integer productId) {
        super(username,password,email,firstName,lastName,dateOfBirth,address,city,state,zipcode,phone);
        this.businessName = businessName;
        this.rating = rating;

    }

    public Integer getSellerId() {
        return sellerId;
    }

    public void setSellerId(Integer sellerId) {
        this.sellerId = sellerId;
    }

    public String getBusinessName() {
        return businessName;
    }

    public void setBusinessName(String businessName) {
        this.businessName = businessName;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

}