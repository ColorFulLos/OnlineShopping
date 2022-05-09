package com.example.p2.repositories;

import com.example.p2.models.Order;
import com.example.p2.models.OrderItem;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface OrderItemRepository extends CrudRepository<OrderItem, Integer> {
  @Query(value = "SELECT * FROM orderItems WHERE orderItems.order_id = :orderId", nativeQuery = true)

  List<OrderItem> findByOrderId(@Param("orderId") Integer orderId);
}
