package com.totobhuto.sbwebsocket;

import com.totobhuto.sbwebsocket.pojo.Greeting;
import com.totobhuto.sbwebsocket.pojo.HelloMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {


    @MessageMapping("/hello")
    @SendTo("/topic/greetings")
    public Greeting greeting(HelloMessage helloMessage) throws Exception{
        Thread.sleep(1000);
        return new Greeting("Hey there !!! Hello "+ HtmlUtils.htmlEscape(helloMessage.getName()));
    }
}
