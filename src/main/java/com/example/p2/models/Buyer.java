package com.example.p2.models;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name = "Buyers")
public class Buyer extends User{
    private Integer buyerId;
    private Integer familyId;

    public Buyer() {}

    public Buyer(String username, String password, String email, String firstName, String lastName, Date dateOfBirth, String address, String city, String state, Integer zipcode, BigDecimal phone, Integer familyId) {
        super(username,password,email,firstName,lastName,dateOfBirth,address,city,state,zipcode,phone);
        this.familyId = familyId;
    }

    public Integer getBuyerId() {
        return buyerId;
    }

    public void setBuyerId(Integer buyerId) {
        this.buyerId = buyerId;
    }

    public Integer getFamilyId() {
        return familyId;
    }

    public void setFamilyId(Integer familyId) {
        this.familyId = familyId;
    }
}
