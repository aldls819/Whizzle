package com.bear.whizzle.member.converter;

import com.bear.whizzle.domain.model.entity.Member;
import com.bear.whizzle.domain.model.type.Image;
import com.bear.whizzle.member.controller.dto.MemberBaseInfoDto;
import com.bear.whizzle.member.controller.dto.MemberBaseInfoDto.MemberBaseImageDto;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PRIVATE)
public class MemberConverter {

    public static MemberBaseInfoDto toMemberBaseInfoDto(Member member) {
        final Image image = member.getImage();
        final MemberBaseImageDto baseImageDto = MemberBaseImageDto.builder()
                                                                  .url(image.getUrl())
                                                                  .originName(image.getOriginalName())
                                                                  .build();

        return MemberBaseInfoDto.builder()
                                .nickname(member.getNickname())
                                .email(member.getEmail())
                                .provider(member.getProvider())
                                .level(member.getLevel())
                                .image(baseImageDto)
                                .build();
    }

}