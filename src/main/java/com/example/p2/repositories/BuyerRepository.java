package com.example.p2.repositories;

import com.example.p2.models.Buyer;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuyerRepository
        extends CrudRepository<Buyer, Integer> {
    @Query(value = "SELECT * FROM buyers INNER JOIN users ON buyers.user_id = users.user_id",
            nativeQuery = true)
    public List<Buyer> findAllBuyers();
    @Query(value = "SELECT * FROM buyers INNER JOIN users ON buyers.user_id = users.user_id WHERE users.user_id=:buyerId",
            nativeQuery = true)
    public Buyer findBuyerById(@Param("buyerId") Integer buyerId);
//    @Query(value = "SELECT * FROM buyers INNER JOIN users ON buyers.user_id = users.user_id WHERE users.username=:buyerName",
//            nativeQuery = true)
//    public Buyer findBuyerByUsername(@Param("buyerId") String buyerName);
}
