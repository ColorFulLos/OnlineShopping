package com.example.p2.repositories;

import com.example.p2.models.Order;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface OrderRepository
    extends JpaRepository<Order, Integer> {
  @Query(value = "SELECT * FROM orders WHERE orders.user_id = :userId",
      nativeQuery = true)
  List<Order> findOrdersByUserId(@Param("userId") Integer userId);
}
