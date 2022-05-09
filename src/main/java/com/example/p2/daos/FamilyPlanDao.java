package com.example.p2.daos;

import com.example.p2.models.FamilyPlan;
import com.example.p2.repositories.FamilyPlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/familyPlan")

public class FamilyPlanDao {
    @Autowired
    FamilyPlanRepository repository;

    @PostMapping("/create")
    public FamilyPlan createFamilyPlan(@RequestBody FamilyPlan plan) {
        return repository.save(plan);
    }

    @GetMapping("/findById")
    public FamilyPlan findFamilyPlanById(Integer id) {
        return repository.findById(id).get();
    }

    @GetMapping("/findByUserId/{buyerId}")
    public FamilyPlan findFamilyPlanByUserId(@PathVariable("buyerId") Integer id) {
        return repository.findFamilyPlanByUserId(id);
    }
    @GetMapping("/findAll")
    public List<FamilyPlan> findAllFamilyPlan() {
        return repository.findAllFamilyPlan();
    }

    @PostMapping("/delete")
    public void deleteFamilyPlan(Integer id) {
        repository.deleteById(id);
    }


}
