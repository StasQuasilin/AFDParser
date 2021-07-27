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
    public void parse(Answer answer, int limit) throws IOException, ParseException {
        int offset = 0;
        while (offset < limit) {
            offset = fillData(answer, offset);
        }
    }

    private int fillData(Answer answer, int offset) throws IOException, ParseException {
        final String msg = connector.sendGetReq(String.format(ADDRESS, offset));
        JSONObject jsonObject;
        jsonObject = (JSONObject) parser.parse(msg);
        if (jsonObject.containsKey(RESULTS)) {
            offset += parseResult(answer, jsonObject);
        } else {
            System.out.println(jsonObject);
            answer.setCode(Integer.parseInt(String.valueOf(jsonObject.get(CODE))));
            answer.setMessage(String.valueOf(jsonObject.get(MESSAGE)));
        }
        return offset;
    }

    private int parseResult(Answer answer, JSONObject jsonObject) {
        int offset = 0;
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
        return offset;
    }
}
