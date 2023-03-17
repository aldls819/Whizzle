package com.bear.whizzle.common.config;

import com.bear.whizzle.auth.service.CustomOAuth2UserService;
import com.bear.whizzle.common.filter.JwtAuthenticationFilter;
import com.bear.whizzle.common.handler.CustomAuthenticationFailureHandler;
import com.bear.whizzle.common.handler.CustomAuthenticationSuccessHandler;
import com.bear.whizzle.common.handler.JwtAccessDeniedHandler;
import com.bear.whizzle.common.handler.JwtAuthenticationEntryPoint;
import com.bear.whizzle.common.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.LogoutFilter;

@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtUtil jwtUtil;
    private final CustomOAuth2UserService customOAuth2UserService;
    private final CustomAuthenticationFailureHandler customAuthenticationFailureHandler;
    private final CustomAuthenticationSuccessHandler customAuthenticationSuccessHandler;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.addFilterAfter(new JwtAuthenticationFilter(jwtUtil), LogoutFilter.class);

        http.exceptionHandling(handle ->
                                       handle
                                               .authenticationEntryPoint(jwtAuthenticationEntryPoint)
                                               .accessDeniedHandler(jwtAccessDeniedHandler));

        http.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);

        http.oauth2Login(oauth2 ->
                                 oauth2
                                         .userInfoEndpoint()
                                         .userService(customOAuth2UserService)
                                         .and()
                                         .successHandler(customAuthenticationSuccessHandler)
                                         .failureHandler(customAuthenticationFailureHandler));

        http.authorizeRequests(request ->
                                       request
                                               .antMatchers("/api/auth/token-check").permitAll() // 테스트를 위해 추가
                                               .antMatchers("/login/**").permitAll()
                                               .antMatchers(HttpMethod.GET).permitAll()
                                               .anyRequest().authenticated());

        http.csrf().disable();

        return http.build();
    }

}
