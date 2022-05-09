package com.example.p2.models;
import com.fasterxml.jackson.annotation.JsonIgnore;
import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="orderitems")
public class OrderItem {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private Integer orderId;
  private Integer productId;
  private Integer quantity;

}
