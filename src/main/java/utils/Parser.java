package utils;

import entity.Answer;
import org.json.simple.parser.ParseException;
import parser.AliFlashDealsJsonParser;

import java.io.IOException;
import java.util.UUID;

public class Parser {

    public static void main(String[] args) throws IOException, ParseException {
        Answer answer = new Answer();
        new AliFlashDealsJsonParser().parse(answer, 100);

        if (answer.hasMessage()) {
            System.out.println(answer.getMessage());
        } else {
            CVSUtil cvsUtil = new CVSUtil();
            cvsUtil.saveList(UUID.randomUUID().toString(), answer.getProducts());
        }
    }
}
