package com.bear.whizzle.domain.model.entity;

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
@Table(name = "keep")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class Keep {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "member_id")
    @NotNull
    @ToString.Exclude
    private Member member;

    @ManyToOne
    @JoinColumn(name = "whiskey_id")
    @NotNull
    @ToString.Exclude
    private Whiskey whiskey;

    @CreatedDate
    @Column(columnDefinition = "DATETIME", unique = true, updatable = false)
    @NotNull
    private LocalDateTime createdDateTime;

}
