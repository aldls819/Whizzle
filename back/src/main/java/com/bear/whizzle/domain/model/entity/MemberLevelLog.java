package com.bear.whizzle.domain.model.entity;

import com.bear.whizzle.domain.model.type.Action;
import java.time.LocalDateTime;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table(name = "member_level_log")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class MemberLevelLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    @NotNull
    @ToString.Exclude
    private Member member;

    @NotNull
    private Float level; // 로그를 찍는 시점의 level, 점수 반영 전

    @NotNull
    private Action action; // 점수를 주는 이유

    @CreatedDate
    @Column(columnDefinition = "DATETIME", updatable = false)
    @NotNull
    private LocalDateTime createdDateTime;

}
