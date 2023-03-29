package com.bear.whizzle.drink.service;

import com.bear.whizzle.domain.model.entity.Diary;
import com.bear.whizzle.domain.model.entity.Drink;
import com.bear.whizzle.domain.model.entity.Whisky;
import com.bear.whizzle.whisky.repository.WhiskyRepository;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DrinkServiceImpl implements DrinkService {

    private final WhiskyRepository whiskyRepository;

    @Override
    public void writeDrinks(Diary diary, Set<Long> whiskyIds) {
        rewriteDrinks(diary, whiskyIds);

        for (Long whiskyId : whiskyIds) {
            Whisky whisky = whiskyRepository.getReferenceById(whiskyId);
            Drink drink = Drink.builder()
                               .whisky(whisky)
                               .build();

            diary.addDrink(drink);
        }
    }

    @Override
    public void eraseDrinks(Diary diary, Set<Integer> deletedDrinkOrders) {
        for (Integer index : deletedDrinkOrders) {
            diary.deleteDrink(index);
        }
    }

    private void rewriteDrinks(Diary diary, Set<Long> whiskyIds) {
        diary.getDrinks()
             .forEach(drink -> {
                 Long whiskyId = drink.getWhisky().getId();

                 if (whiskyIds.contains(whiskyId)) {
                     drink.markNotDeleted();
                     whiskyIds.remove(whiskyId);
                 }
             });
    }

}