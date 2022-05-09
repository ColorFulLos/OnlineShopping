package com.example.p2.daos;

import com.example.p2.models.OrderItem;
import com.example.p2.models.Product;
import com.example.p2.repositories.ProductRepository;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/product")
//@CrossOrigin(origins = "*")
public class ProductDao {
  @Autowired
  private ProductRepository productRepository;
  @Autowired
  private OrderItemDao orderItemDao;

  @GetMapping("/findAll")
  public List<Product> findAll(){
    return  (List<Product>) productRepository.findAll();
  }


  @PostMapping("/create")
  public Product create(@RequestBody Product product){
    return productRepository.save(product);
  }
  @GetMapping("/findById/{productId}")
  public Product findProductById(@PathVariable Integer productId) { return productRepository.findById(productId).get(); }


  @PutMapping("/update/{productId}")
  public Product update(@PathVariable Integer productId, @RequestBody Product productUpdates) {
      Product product = productRepository.findById(productId).get();
      product.setProductBrand(productUpdates.getProductBrand());
      product.setProductDate(productUpdates.getProductDate());
      product.setProductDescription(productUpdates.getProductDescription());
      product.setProductPrice(productUpdates.getProductPrice());
      product.setProductName(productUpdates.getProductName());
      product.setProductOrigin(productUpdates.getProductOrigin());
      product.setProductQuantity(productUpdates.getProductQuantity());

    return productRepository.save(product);
  }

  @DeleteMapping("/delete/{productId}")
  public void deleteById(@PathVariable("productId") Integer id){

    productRepository.deleteById(id);
  }

  @GetMapping("/findBySellerId/{sellerid}")
  public List<Product> findProductBySellerId(@PathVariable Integer sellerid) {
    List<Product> list = new ArrayList<>();
    List<Product> ans = new ArrayList<>();
    list = (List<Product>) productRepository.findAll();
    for (Product product:list){
        if (product.getProductSellerId().equals(sellerid)){
          ans.add(product);
        }
      }
      return ans;

  }
  @GetMapping("/findByOrderId/{orderId}")
  public List<Product> findProductByOrderId(@PathVariable Integer orderId) {
    List<Product> ans = new ArrayList<>();
    List<OrderItem> orderItems = new ArrayList<>();
    orderItems = orderItemDao.findOrderItemsByOrderId(orderId);
    for (OrderItem orderItem:orderItems){
      Product product = (findProductById(orderItem.getProductId()));
      product.setProductQuantity(orderItem.getQuantity());
      ans.add(product);
    }
    return ans;
  }

}
