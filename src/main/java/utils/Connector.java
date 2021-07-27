package utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

public class Connector {
    public String sendGetReq(String address) throws IOException {
        return sendReq(address, "GET");
    }
    public String sendReq(String address, String method) throws IOException {
        URL url = new URL(address);
        HttpURLConnection con = (HttpURLConnection) url.openConnection();
        con.setRequestProperty("Cookie", "XSRF-TOKEN=7fb0f66a-cab7-4ef9-a6e4-99ea4630d198; ali_apache_id=33.0.189.215.16270426067.368774.2; xman_us_f=x_locale=en_US&x_l=0&last_popup_time=1627042752889&x_user=UA|Stanislav|Vasilina|ifm|2160305220&no_popup_today=n&x_lid=ua561024228cxmae&x_c_chg=1&x_as_i=%7B%22cookieCacheEffectTime%22%3A1627042913010%2C%22isCookieCache%22%3A%22Y%22%2C%22ms%22%3A%220%22%7D&acs_rt=c1f7f981dd3f483d90095cbb5766bea2; acs_usuc_t=x_csrf=6c4vp2b0i5d8&acs_rt=c1f7f981dd3f483d90095cbb5766bea2; xman_t=T/s+smRhqYyY1ZI8ESJlS25j9hrgi…OnsiMTMiOnsiYWNjZXNzVHlwZSI6MSwibWVtYmVySWQiOjEzMzU0MTI5MTY2NCwidGd0SWQiOiIzZE9WWFNJcnpxUlFHWDczQTdVX2NmdyJ9fX19; _hvn_login=13; aep_common_f=GvysOJHdmL6eMqmnZbbIroUwB+btUhjmbkP4iWlSezPZTvel9QSHmA==; xman_us_t=x_lid=ua561024228cxmae&sign=y&rmb_pp=stasvasilin@gmail.com&x_user=onQlU5Y0SLW8FUngROmF31Vx6col/snf3zWm9zCSOsg=&ctoken=5c2h2zvl87v4&need_popup=y&l_source=aliexpress; aep_usuc_t=ber_l=A2; bx_s_t=ZEPtwGu/fmajb+fPIyNBrLEUos8tZvFxnOrL4SGrtHyV1/Fe3CNeMBdWSYs+IMZy8Gijy9xLVwxPpoQk/EP3VuNzysg0NYgfnfu3Xf1rpq8=");
        con.setRequestMethod(method);
        BufferedReader reader = new BufferedReader(new InputStreamReader(con.getInputStream()));
        String line;
        StringBuilder builder = new StringBuilder();
        while ((line = reader.readLine()) != null){
            builder.append(line);
        }
        reader.close();
        con.disconnect();
        return builder.toString();
    }
}
