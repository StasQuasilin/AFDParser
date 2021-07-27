package utils;

import entity.Answer;
import entity.Product;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import java.util.LinkedList;

public class HtmlParser {
    private static final String DEALS_ITEM_INNER = "deals-item-inner";
    private static final String ITEM_DETAILS_TITLE = "item-details-title";
    private static final String A = "a";
    private static final String HREF = "href";
    private static final String ITEM_IMAGE = "item-image";
    private static final String IMG = "img";
    private static final String SRC = "src";
    private static final String CURRENT_PRICE = "current-price";

    public LinkedList<Product> parseElements(Elements elements) {
        LinkedList<Product> products = new LinkedList<>();
        for (final Element next : elements) {
            Product product = new Product();
            product.setTitle(next.getElementsByClass(ITEM_DETAILS_TITLE).html());
            product.setDetailUrl(next.getElementsByTag(A).attr(HREF));
            final Element firstImage = next.getElementsByClass(ITEM_IMAGE).first();
            if (firstImage != null){
                product.setImage(firstImage.getElementsByTag(IMG).attr(SRC));
            }
            final Element firstPrice = next.getElementsByClass(CURRENT_PRICE).first();
            if(firstPrice != null){
                product.setMinPrice(firstPrice.html().trim());
            }
            products.add(product);
        }
        return products;
    }

    public void parse(Answer answer, Document doc) {
        answer.addProducts(parseElements(doc.body().getElementsByClass(DEALS_ITEM_INNER)));
    }
}
