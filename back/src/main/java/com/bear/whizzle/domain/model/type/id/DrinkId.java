package com.bear.whizzle.domain.model.type.id;

import java.io.Serializable;
import lombok.AccessLevel;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@EqualsAndHashCode
public class DrinkId implements Serializable {

    private Long diary;

    private Long whisky;

}
