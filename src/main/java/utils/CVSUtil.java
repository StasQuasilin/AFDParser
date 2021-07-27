package utils;

import com.opencsv.CSVWriter;
import entity.Product;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedList;

public class CVSUtil {
    public void saveList(String fileName, LinkedList<Product> products) throws IOException {
        if (products.size() > 0) {
            File file = new File(fileName);
            CSVWriter writer = new CSVWriter(new FileWriter(file));
            String[] args;
            for (Product product : products) {
                args = new String[7];
                args[0] = product.getTitle();
                args[1] = (product.getMaxPrice());
                args[2] = (product.getMinPrice());
                args[3] = String.valueOf(product.getOrders());
                args[4] = String.valueOf(product.getRate());
                args[5] = product.getImage();
                args[6] = product.getDetailUrl();
                writer.writeNext(args);
            }
            writer.close();
            System.out.println("File \"" + file.getAbsolutePath() + "\" write successful!");
            System.out.println("Items count: " + products.size());
        }
    }
}
