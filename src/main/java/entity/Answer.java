package entity;

import java.util.Collection;
import java.util.LinkedList;

public class Answer {
    private int code;
    private String message;
    private final LinkedList<Product> products = new LinkedList<>();

    public void setCode(int code) {
        this.code = code;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public void addProduct(Product product){
        products.add(product);
    }

    public LinkedList<Product> getProducts() {
        return products;
    }

    public void addProducts(Collection<Product> products) {
        this.products.addAll(products);
    }

    public boolean hasMessage() {
        return message != null;
    }
}
