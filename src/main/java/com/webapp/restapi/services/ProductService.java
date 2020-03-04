package com.webapp.restapi.services;

import java.util.Collection;
import com.webapp.restapi.models.Product;

public interface ProductService {
    public abstract void createProduct(Product product);
    public abstract void updateProduct(String id, Product product);
    public abstract void deleteProduct(String id);
    public abstract Collection<Product> getProducts();
}