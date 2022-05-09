package com.example.p2.repositories;

import com.example.p2.models.PaymentMethod;
import java.util.List;
import java.util.function.Supplier;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface PaymentMethodRepository
    extends CrudRepository<PaymentMethod, Integer> {
  @Query(value = "SELECT * FROM paymentmethods WHERE paymentmethods.buyer_id = :buyerId",
      nativeQuery = true)
  List<PaymentMethod> findByBuyerId(@Param("buyerId") Integer id);
}
