
package com.example.p2.daos;
import com.example.p2.models.Buyer;
import com.example.p2.repositories.BuyerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user")
//@CrossOrigin(origins = "*")
public class BuyerDao {
    @Autowired
    BuyerRepository buyerRepository;

    @PostMapping("/createBuyer")
    public Buyer createBuyer(@RequestBody Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @GetMapping("/findAllBuyer")
    public List<Buyer> findAllBuyer() {
        return buyerRepository.findAllBuyers();
    }

    @GetMapping("/findByIdBuyer/{buyerId}")
    public Buyer findBuyerById( @PathVariable("buyerId") Integer id) {
        return buyerRepository.findBuyerById(id);
    }
//    @GetMapping("/findByName/buyer/{buyerName}")
//    public Buyer findBuyerByUsername( @PathVariable("buyerName") String name) {
//        return buyerRepository.findBuyerByUsername(name);
//    }
    @DeleteMapping("/deleteBuyer/{buyerId}")
    public void deleteBuyer(@PathVariable("buyerId") Integer id) {
        buyerRepository.deleteById(id);
    }

    @PutMapping("/updateBuyer/{buyerId}")
    public Buyer updateBuyer(@PathVariable("buyerId") Integer id,
                             @RequestBody Buyer buyerUpdates) {
        Buyer buyer = buyerRepository.findBuyerById(id);
        if (buyerUpdates.getUsername() != null) buyer.setUsername(buyerUpdates.getUsername());
        if (buyerUpdates.getPassword() != null) buyer.setPassword(buyerUpdates.getPassword());
        if (buyerUpdates.getEmail() != null) buyer.setEmail(buyerUpdates.getEmail());
        if (buyerUpdates.getFirstName() != null) buyer.setFirstName(buyerUpdates.getFirstName());
        if (buyerUpdates.getLastName() != null) buyer.setLastName(buyerUpdates.getLastName());
        if (buyerUpdates.getDateOfBirth() != null) buyer.setDateOfBirth(buyerUpdates.getDateOfBirth());
        if (buyerUpdates.getAddress() != null) buyer.setAddress(buyerUpdates.getAddress());
        if (buyerUpdates.getCity() != null) buyer.setCity(buyerUpdates.getCity());
        if (buyerUpdates.getState() != null) buyer.setState(buyerUpdates.getState());
        if (buyerUpdates.getZipcode() != null) buyer.setZipcode(buyerUpdates.getZipcode());
        if (buyerUpdates.getPhone() != null) buyer.setPhone(buyerUpdates.getPhone());
        if (buyerUpdates.getFamilyId() != null) buyer.setFamilyId(buyerUpdates.getFamilyId());
        return buyerRepository.save(buyer);
    }
}
