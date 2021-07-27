package utils;

import entity.Answer;
import parser.AliFlashDealHtmlParser;
import parser.AliFlashDealsJsonParser;
import parser.IParser;

import java.io.IOException;
import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.LinkedList;
import java.util.Scanner;
import java.util.UUID;

public class Parser {

    static final LinkedList<IParser> parsers = new LinkedList<>();
    static {
        parsers.add(new AliFlashDealsJsonParser());
//        parsers.add(new AliFlashDealsFileParser());
        parsers.add(new AliFlashDealHtmlParser());
    }

    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        IParser parser;
        while (true) {
            System.out.println("Choose your parser:");

            for (int i = 0; i < parsers.size(); i++) {
                System.out.println((i + 1) + ". " + parsers.get(i).getClass().getSimpleName());
            }
            if (parsers.size() == 1){
                parser = parsers.get(0);
                break;
            }
            if (scanner.hasNextLine()) {
                final String line = scanner.nextLine();
                try {
                    final int idx = Integer.parseInt(line) - 1;
                    if (idx >= 0 && idx < parsers.size()) {
                        parser = parsers.get(idx);
                        break;
                    }
                } catch (NumberFormatException e) {
                    System.err.println("\"" + line + "\" is not number");
                }
            }
        }
        if (parsers.size() > 1) {
            System.out.print("Your choice is ");
        } else {
            System.out.print("Use parser ");
        }
        System.out.println(parser.getClass().getSimpleName());

        final LocalDateTime startTime = LocalDateTime.now();

        final Answer parse = parser.parse(100);
        final String message = parse.getMessage();
        if (message != null) {
            System.out.println(message);
        } else {
            CVSUtil cvsUtil = new CVSUtil();
            cvsUtil.saveList(UUID.randomUUID().toString(), parse.getProducts());
            final LocalDateTime endTime = LocalDateTime.now();
            final LocalDateTime time = LocalDateTime.ofEpochSecond(endTime.toEpochSecond(ZoneOffset.UTC) - startTime.toEpochSecond(ZoneOffset.UTC), 0, ZoneOffset.UTC);
            final int second = time.getSecond();
            final int minute = time.getMinute();
            System.out.println((minute > 0 ? minute + " min" : "") + (minute > 0 && second > 0 ? ", " : "") + (second > 0 ? second + " sec" : ""));
        }
    }
}
