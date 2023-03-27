package com.bear.whizzle.cache.local;

import com.bear.whizzle.domain.model.type.CacheType;
import com.bear.whizzle.whisky.repository.projection.dto.FlavorSummary;
import com.bear.whizzle.whisky.service.query.WhiskyQueryService;
import java.util.Map;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.cache.CacheManager;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class LocalCacheWarmUp {

    private final CacheManager cacheManager;
    private final WhiskyQueryService whiskyQueryService;
    @Value("${app.cache.flavor-key}")
    private String flavorKey;
    @Value("${app.cache.price-key}")
    private String priceKey;

    @EventListener(ApplicationReadyEvent.class)
    public void warmUp() {
        log.debug("===============Caching Whisky Flavor Min Max Data================");
        FlavorSummary flavorMinMax = whiskyQueryService.findFlavorMinMax();
        cacheManager.getCache(CacheType.FLAVOR_MINMAX.getCacheName()).put(flavorKey, flavorMinMax);

        log.debug("===============Caching Whisky Price Tier Data================");
        Map<Long, Integer> whiskyPriceTier = whiskyQueryService.findWhiskyPriceTier();
        cacheManager.getCache(CacheType.WHISKY_PRICE_TIER.getCacheName()).put(priceKey, whiskyPriceTier);
    }

}
