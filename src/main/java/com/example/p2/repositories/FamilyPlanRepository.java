package com.example.p2.repositories;

import com.example.p2.models.Buyer;
import com.example.p2.models.FamilyPlan;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FamilyPlanRepository  extends CrudRepository<FamilyPlan, Integer> {
    @Query(value = "SELECT * FROM family_plans",
            nativeQuery = true)
    public List<FamilyPlan> findAllFamilyPlan();
    @Query(value = "SELECT * FROM family_plans INNER JOIN buyers ON buyers.family_id = family_plans.family_id WHERE buyers.user_id=:buyerId",
            nativeQuery = true)
    public FamilyPlan findFamilyPlanByUserId(@Param("buyerId") Integer buyerId);
}
