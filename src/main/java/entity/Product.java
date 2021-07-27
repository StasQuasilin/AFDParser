package entity;

import lombok.Data;

@Data
public class Product {
    private String title;
    private String minPrice;
    private String maxPrice;
    private String image;
    private String detailUrl;
    private int orders;
    private float rate;
}
