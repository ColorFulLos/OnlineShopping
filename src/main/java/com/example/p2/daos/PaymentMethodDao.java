package com.example.p2.daos;

import com.example.p2.models.Order;
import com.example.p2.models.PaymentMethod;
import com.example.p2.repositories.PaymentMethodRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/paymentMethod")

public class PaymentMethodDao {
  @Autowired
  PaymentMethodRepository repository;
  @PostMapping("/create")
  public PaymentMethod createPaymentMethod(@RequestBody PaymentMethod method) {
    return repository.save(method);
  }
  @GetMapping("/findById/{id}")
  public PaymentMethod findPaymentMethodById(@PathVariable("id") Integer id) { return repository.findById(id).get(); }

  @GetMapping("/findByBuyerId/{id}")
  public List<PaymentMethod> findPaymentMethodByBuyerId(@PathVariable("id") Integer id) { return repository.findByBuyerId(id); }

  @DeleteMapping("/delete/{id}")
  public void deletePaymentMethod(@PathVariable("id") Integer id) { repository.deleteById(id); }

  @PutMapping("/update/{id}")
  public PaymentMethod updatePaymentMethod(@PathVariable("id") Integer id,
      @RequestBody PaymentMethod methodUpdates) {
    PaymentMethod method = repository.findById(id).get();
    method.setAccountDetails(methodUpdates.getAccountDetails());
    return repository.save(method);
  }
}
