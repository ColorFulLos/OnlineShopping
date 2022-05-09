package com.example.p2.repositories;

import com.example.p2.models.Seller;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SellerRepository
        extends CrudRepository<Seller, Integer> {
    @Query(value = "SELECT * FROM sellers INNER JOIN users ON sellers.user_id = users.user_id",
            nativeQuery = true)
    public List<Seller> findAllSellers();
    @Query(value = "SELECT * FROM sellers INNER JOIN users ON sellers.user_id = users.user_id WHERE users.user_id=:sellerId",
            nativeQuery = true)
    public Seller findSellerById(@Param("sellerId") Integer sellerId);
}