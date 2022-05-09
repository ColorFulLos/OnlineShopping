package com.example.p2.models;

import javax.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="family_plans")
public class FamilyPlan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer familyId;

    private String familyName;

    private Integer primaryAccountId;

    private Integer planLength;
}
