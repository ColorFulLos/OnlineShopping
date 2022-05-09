
package com.example.p2.daos;
import com.example.p2.models.Seller;
import com.example.p2.repositories.SellerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/user")
//@CrossOrigin(origins = "*")
public class SellerDao {
    @Autowired
    SellerRepository sellerRepository;

    @PostMapping("/createSeller")
    public Seller createBuyer(@RequestBody Seller seller) {
        return sellerRepository.save(seller);
    }
    @GetMapping("/findAllSeller")
    public List<Seller> findAllSeller() {
        return sellerRepository.findAllSellers();
    }
    @GetMapping("/findByIdSeller/{sellerId}")
    public Seller findSellerById( @PathVariable("sellerId") Integer id) {
        return sellerRepository.findSellerById(id);
    }

    @DeleteMapping("/deleteSeller/{sellerId}")
    public void deleteSeller(@PathVariable("sellerId") Integer id) {
        sellerRepository.deleteById(id);
    }
    @PutMapping("/updateSeller/{sellerId}")
    public Seller updateSeller(@PathVariable("sellerId") Integer id,
                             @RequestBody Seller sellerUpdates) {
        Seller seller = sellerRepository.findSellerById(id);
        seller.setUsername(sellerUpdates.getUsername());
        seller.setPassword(sellerUpdates.getPassword());
        seller.setEmail(sellerUpdates.getEmail());
        seller.setFirstName(sellerUpdates.getFirstName());
        seller.setLastName(sellerUpdates.getLastName());
        seller.setDateOfBirth(sellerUpdates.getDateOfBirth());
        seller.setAddress(sellerUpdates.getAddress());
        seller.setCity(sellerUpdates.getCity());
        seller.setState(sellerUpdates.getState());
        seller.setZipcode(sellerUpdates.getZipcode());
        seller.setPhone(sellerUpdates.getPhone());
        seller.setBusinessName(sellerUpdates.getBusinessName());
        seller.setRating(sellerUpdates.getRating());
        return sellerRepository.save(seller);
    }
}
