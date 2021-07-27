package parser;

import entity.Answer;
import entity.Product;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import utils.Connector;

import java.io.IOException;

public class AliFlashDealsJsonParser implements IParser {

    private static final String RESULTS = "results";
    private static final String CODE = "code";
    private static final String MESSAGE = "message";

    private Connector connector = new Connector();
    private JSONParser parser = new JSONParser();

    final String ADDRESS = "https://gpsfront.aliexpress.com/getRecommendingResults.do?" +
            "widget_id=5547572&" +
            "limit=12&offset=%s" +
            "&postback=4ea9bc44-d503-4b48-825b-c4a8a346d627" +
            "";

    @Override
    public Answer parse(int limit) {
        int offset = 0;
        Answer answer = new Answer();
        while (offset < limit) {
            try {
                System.out.println("\tGet next consignment, offset:" + offset);
                final String msg = connector.sendGetReq(String.format(ADDRESS, offset));
                JSONObject jsonObject;
                try {
                    jsonObject = (JSONObject) parser.parse(msg);
                    if (jsonObject.containsKey(RESULTS)) {
                        for (Object o : (JSONArray) jsonObject.get(RESULTS)) {
                            JSONObject json = (JSONObject) o;
                            Product product = new Product();
                            product.setTitle(String.valueOf(json.get("productTitle")));
                            product.setMinPrice((String.valueOf(json.get("minPrice"))));
                            product.setMaxPrice((String.valueOf(json.get("maxPrice"))));
                            product.setOrders(Integer.parseInt(String.valueOf(json.get("orders"))));
                            product.setRate(Float.parseFloat(String.valueOf(json.get("productAverageStar"))));
                            product.setImage(String.valueOf(json.get("productImage")));
                            product.setDetailUrl(String.valueOf(json.get("productDetailUrl")));
                            answer.addProduct(product);
                            offset++;
                        }
                    } else {
                        System.out.println(jsonObject);
                        answer.setCode(Integer.parseInt(String.valueOf(jsonObject.get(CODE))));
                        answer.setMessage(String.valueOf(jsonObject.get(MESSAGE)));
                        break;
                    }
                } catch (ParseException e) {
                    e.printStackTrace();
                    System.out.println(msg);
                    break;
                }

            } catch (IOException e) {
                e.printStackTrace();
                answer.setMessage(e.getMessage());
            }
        }

        return answer;
    }
}
