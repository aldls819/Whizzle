package com.bear.whizzle.review.service;

import com.bear.whizzle.domain.model.entity.Review;
import com.bear.whizzle.review.controller.dto.ReviewWriteRequestDto;

public interface ReviewService {

    long getReviewCountByMemberId(Long memberId);

    Review findByReviewId(long reviewId);

    void writeReview(long memberId, ReviewWriteRequestDto requestDto);

}
