package org.example;

import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@RequestMapping()
@CrossOrigin(origins = "http://localhost:4200/", allowCredentials = "true")
public class CookiesController {

    @GetMapping("/HelloWorld")
    public String HelloWorld(HttpServletRequest request, HttpServletResponse response) {
        // create a cookie
        Cookie cookie = new Cookie("testId", "12345");
//        Cookie cookie = null;
        cookie.setDomain("localhost");
        cookie.setHttpOnly(true);

        response.addCookie(cookie);

        Cookie[] cookies = request.getCookies();

        System.out.println("Cookies fetching: " + cookie);

        response.setContentType("text/html");

        if( cookies != null ) {
            System.out.println("cookies found");

            for (int i = 0; i < cookies.length; i++) {
                cookie = cookies[i];
                System.out.println("Name : " + cookie.getName( ) + ",  ");
                System.out.println("Value : " + cookie.getValue( ) + ",  ");
            }
        } else {
            System.out.println("No cookies found");
        }
        return "Hello World";
    }

}
