package com.example.myProjectSoap.repository;

import com.example.myProjectSoap.entity.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository <ProductModel, Long> {
    ProductModel findByName(String name);
}
