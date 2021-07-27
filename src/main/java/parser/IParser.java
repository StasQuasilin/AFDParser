package parser;

import entity.Answer;

public interface IParser {
    void parse(Answer answer, int limit) throws Exception;
}
