package com.bear.whizzle.common.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.codec.LoggingCodecSupport;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class WebClientConfig {

    @Value("${webclient.baseurl}")
    private String baseUrl;
    @Value("${webclient.port}")
    private String port;

    @Bean
    public WebClient webClient() {
        // Max-Memory-Size, Logging setting 위한 Strategies
        ExchangeStrategies exchangeStrategies = ExchangeStrategies.builder().build();
        exchangeStrategies.messageWriters()
                          .stream()
                          .filter(LoggingCodecSupport.class::isInstance)
                          .forEach(writer -> ((LoggingCodecSupport) writer).setEnableLoggingRequestDetails(true));
        // WebClient 생성
        return WebClient.builder()
                        .exchangeStrategies(exchangeStrategies)
                        .baseUrl(String.format("%s:%s", baseUrl, port))
                        .build();
    }

}
