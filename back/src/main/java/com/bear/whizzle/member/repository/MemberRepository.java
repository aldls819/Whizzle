package com.bear.whizzle.member.repository;

import com.bear.whizzle.domain.model.entity.Member;
import java.time.LocalDateTime;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {

    Optional<Member> findByEmailAndProvider(String email, String provider);

    Optional<Member> findByIdAndCreatedDateTimeBefore(Long memberId, LocalDateTime savedDateTime);

}
