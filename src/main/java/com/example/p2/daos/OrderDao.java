package com.example.p2.daos;

import com.example.p2.models.Order;
import com.example.p2.models.OrderItem;
import com.example.p2.models.OrderStatus;
import com.example.p2.models.Product;
import com.example.p2.repositories.OrderItemRepository;
import com.example.p2.repositories.OrderRepository;
import com.example.p2.repositories.ProductRepository;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
//@CrossOrigin(origins = "*")
public class OrderDao {
  @Autowired
  private OrderRepository orderRepository;
  @Autowired
  private OrderItemDao orderItemDao;
  @Autowired
  private ProductDao productDao;
  @PostMapping("/create")
  public Order createOrder(@RequestBody Order order) {
    return orderRepository.save(order);
  }
  @GetMapping("/findAll")
  public List<Order> findAllOrder() { return (List<Order>) orderRepository.findAll(); }
  @PostMapping("/findById/{orderId}")
  public Order findOrderById(@PathVariable("orderId") Integer id) { return orderRepository.findById(id).get(); }
  @PostMapping("/delete/{orderId}")
  public String deleteOrder(@PathVariable("orderId") Integer id) {
    try {
      orderRepository.deleteById(id);
      return "Successfully delete an order!";
    }
    catch (Exception e){
      return "Failed to delete an order!";
    }
  }
  @PutMapping("/cancel/{orderId}")
  public Order cancelOrder(@PathVariable("orderId") Integer id) {
    Order order = orderRepository.findById(id).get();
       order.setOrderStatus(OrderStatus.CANCELLED);
    return orderRepository.save(order);
  }

  @PutMapping("/update/{orderId}")
  public Order updateOrder(@PathVariable("orderId") Integer id,
      @RequestBody Order orderUpdates) {
    Order order = orderRepository.findById(id).get();
    order.setOrderStatus(orderUpdates.getOrderStatus());
    order.setTrackingNumber(orderUpdates.getTrackingNumber());
    return orderRepository.save(order);
  }



  @GetMapping("/findOrdersByUserId/{userId}")
  public List<Order> findOrdersByUserId(@PathVariable("userId") Integer userId) {
    return orderRepository.findOrdersByUserId(userId);
  }

  @GetMapping("/findOrdersBySellerId/{sellerId}")
  public HashSet<Order> findOrdersBySellerId(@PathVariable Integer sellerId) {
    List<Order> list = new ArrayList<>();
    HashSet<Order> ans = new HashSet<>();
    List<OrderItem> item = new ArrayList<>();
    list = (List<Order>) orderRepository.findAll();
    for (Order order:list) {
      item = orderItemDao.findOrderItemsByOrderId(order.getOrderId());
      for (OrderItem orderItem : item) {
        Product product = productDao.findProductById(orderItem.getProductId());
        if (product.getProductSellerId().equals(sellerId)){
          ans.add(order);
        }
      }
    }
    return ans;
  }
}

