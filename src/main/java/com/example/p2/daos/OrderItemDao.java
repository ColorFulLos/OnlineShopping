package com.example.p2.daos;

import com.example.p2.models.Buyer;
import com.example.p2.models.Order;
import com.example.p2.models.OrderItem;
import com.example.p2.repositories.OrderItemRepository;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/orderItem")
public class OrderItemDao {
  @Autowired
  OrderItemRepository repository;
  // when to create OrderItem should be discussed.
  @PostMapping("/create")
  public OrderItem createOrderItem(@RequestBody OrderItem item) {
//    System.out.println("ORDER_ITEMMMMM: " + item.getOrder());
    return repository.save(item);
  }

  @GetMapping("/findOrderItemsByOrderId/{orderId}")
  public List<OrderItem> findOrderItemsByOrderId(@PathVariable("orderId") Integer id) { return repository.findByOrderId(id); }

  @GetMapping("/findById/{orderItemId}")
  public OrderItem findOrderItemById(@PathVariable("orderItemId") Integer id) { return repository.findById(id).get(); }

  @PostMapping("/delete/{orderItemId}")
  public String deleteOrderItem(@PathVariable("orderItemId") Integer id) {
    try{
      repository.deleteById(id);
      return "Successfully delete an orderItem";
    }
    catch (Exception e) {
      return "Failed to delete an orderItem";
    }
  }

  // I do not think this api is allowed to use in our case anyways
  @PutMapping("/update/{orderItemId}")
  public OrderItem updateOrderItem(@PathVariable("orderItemId") Integer id,
      @RequestBody OrderItem orderItemUpdates) {
    OrderItem item = repository.findById(id).get();
    // Can only change the quantity.
    item.setQuantity(orderItemUpdates.getQuantity());
    return repository.save(item);
  }
}
