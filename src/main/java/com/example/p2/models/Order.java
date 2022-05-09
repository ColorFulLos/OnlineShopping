package com.example.p2.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import java.util.List;
import lombok.Data;

  @Entity
  @Data
  @Table(name="orders")
  public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private Integer userId;
    @Enumerated(EnumType.STRING)
    private OrderStatus orderStatus;
    private Integer paymentmethodId;
    private String comment;
    private String trackingNumber;

  }

