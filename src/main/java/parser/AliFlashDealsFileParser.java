package parser;

import entity.Answer;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import utils.HtmlParser;

import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.nio.charset.StandardCharsets;

public class AliFlashDealsFileParser implements IAliHtmlParser {

    private static final String FILE_NAME = "AliExpress.com.htm";

    @Override
    public Answer parse(int limit) {
        final URL resource = getClass().getClassLoader().getResource(FILE_NAME);

        Answer answer = new Answer();
        File file;
        if (resource != null){
            file = new File(resource.getFile());
            System.out.println(resource.getProtocol());
            try {
                final Document document = Jsoup.parse(file, StandardCharsets.UTF_8.name());
                parser.parse(answer, document);
            } catch (IOException e) {
                answer.setMessage(e.getMessage());
            }
        } else {
            answer.setMessage("Resource not found");
        }
        return answer;
    }
}
