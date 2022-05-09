package com.example.p2.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import java.sql.Date;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.MappedSuperclass;

//@MappedSuperclass
@Entity
@Table(name = "product")
public class Product {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer productId;
  private String productName;
  private String productBrand;
  private Float productPrice;
  private Date productDate;
  private String productOrigin;
  private Integer productQuantity;
  private String productDescription;
  private Integer productSellerId;


  public Product(String product_name, String product_brand,
      Float product_price, Date product_date, String product_origin,
      Integer product_quantity, String product_description, Integer product_sellerId) {
    this.productName = product_name;
    this.productBrand = product_brand;
    this.productPrice = product_price;
    this.productDate = product_date;
    this.productOrigin = product_origin;
    this.productQuantity = product_quantity;
    this.productDescription = product_description;
    this.productSellerId = product_sellerId;
  }

  public Product() {

  }
  public Integer getProductId() {
    return productId;
  }

  public void setProductId(Integer productId) {
    this.productId = productId;
  }

  public String getProductName() {
    return productName;
  }

  public void setProductName(String productName) {
    this.productName = productName;
  }

  public String getProductBrand() {
    return productBrand;
  }

  public void setProductBrand(String productBrand) {
    this.productBrand = productBrand;
  }

  public Float getProductPrice() {
    return productPrice;
  }

  public void setProductPrice(Float productPrice) {
    this.productPrice = productPrice;
  }

  public Date getProductDate() {
    return productDate;
  }

  public void setProductDate(Date productDate) {
    this.productDate = productDate;
  }

  public String getProductOrigin() {
    return productOrigin;
  }

  public void setProductOrigin(String productOrigin) {
    this.productOrigin = productOrigin;
  }

  public Integer getProductQuantity() {
    return productQuantity;
  }

  public void setProductQuantity(Integer productQuantity) {
    this.productQuantity = productQuantity;
  }
  public String getProductDescription() {
    return productDescription;
  }

  public void setProductDescription(String productDescription) {
    this.productDescription = productDescription;
  }

  public Integer getProductSellerId() {
    return productSellerId;
  }

  public void setProductSellerId(Integer productSellerId) {
    this.productSellerId = productSellerId;
  }
}
