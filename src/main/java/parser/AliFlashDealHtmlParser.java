package parser;

import entity.Answer;

public class AliFlashDealHtmlParser implements IAliHtmlParser {

    @Override
    public Answer parse(int limit) {
        Answer answer = new Answer();
        answer.setMessage("...This method is not realized...");
        return answer;
    }
}
