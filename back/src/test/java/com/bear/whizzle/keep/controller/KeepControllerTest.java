package com.bear.whizzle.keep.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatCode;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.bear.whizzle.auth.service.PrincipalDetails;
import com.bear.whizzle.common.util.JwtUtil;
import com.bear.whizzle.domain.exception.NotFoundException;
import com.bear.whizzle.domain.model.entity.Keep;
import com.bear.whizzle.keep.repository.KeepRepository;
import java.util.Optional;
import javax.persistence.EntityManager;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@Transactional
class KeepControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private KeepRepository keepRepository;

    @Test
    @DisplayName("위스키 킵 & 취소 테스트")
    void keepAndUnkeepWhisky() throws Exception {
        // given
        final Long TEST_MEMBER_ID = 1L;
        final String TEST_MEMBER_TOKEN = jwtUtil.generateToken(PrincipalDetails.builder().memberId(TEST_MEMBER_ID).build(), 5000);
        final Long TEST_WHISKY_ID = 1L;

        // when 1
        mockMvc.perform(
                post("/api/keeps/" + TEST_WHISKY_ID)
                        .header("Authorization", "Bearer " + TEST_MEMBER_TOKEN)
        ).andExpect(status().isOk());

        // then 1
        assertThat(keepRepository.findByMemberIdAndWhiskyId(TEST_MEMBER_ID, TEST_WHISKY_ID)).isPresent();

        // when 2
        mockMvc.perform(
                post("/api/keeps/" + TEST_WHISKY_ID)
                        .header("Authorization", "Bearer " + TEST_MEMBER_TOKEN)
        ).andExpect(status().isOk());

        // then 2
        assertThat(keepRepository.findByMemberIdAndWhiskyId(TEST_MEMBER_ID, TEST_WHISKY_ID)).isEmpty();
    }

}