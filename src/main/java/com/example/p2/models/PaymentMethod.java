package com.example.p2.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.util.List;
import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="paymentmethods")
public class PaymentMethod {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer paymentmethodId;

  private Integer buyerId;

  private String accountDetails;

}
