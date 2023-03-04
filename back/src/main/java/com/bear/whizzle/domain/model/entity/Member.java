package com.bear.whizzle.domain.model.entity;

import com.bear.whizzle.domain.model.type.File;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name = "member")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Member {

    @Id
    @GeneratedValue
    private Long id;

    @NotNull
    @NotBlank
    private String nickname;

    @Email
    @NotNull
    private String email;

    @Embedded
    @NotNull
    private File image;

    @NotNull
    @Min(0)
    @Max(100)
    @ColumnDefault("40.0")
    private Float level;

}
