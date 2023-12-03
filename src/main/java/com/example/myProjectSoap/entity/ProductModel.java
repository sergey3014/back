package com.example.myProjectSoap.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "demo_soap_project")
@Data
public class ProductModel {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private String name;
    private double price;
    private String description;
}
