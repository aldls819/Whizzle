package com.bear.whizzle.common.util;

import java.util.Random;

public final class RandomDataUtil {

    public final static String ALPHABET_UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    public final static String ALPHABET_LOWER = "abcdefghijklmnopqrstuvwxyz";
    public final static String ALPHABET = ALPHABET_UPPER + ALPHABET_LOWER;
    public final static String NUMERIC = "0123456789";
    public final static String ALPHABET_LOWER_NUMERIC = ALPHABET_LOWER + NUMERIC;
    public final static String ALPHABET_NUMERIC = ALPHABET + NUMERIC;
    public final static String[] PROVIDERS = { "GOOGLE", "KAKAO", "NAVER" };

    private final static Random random = new Random();

    private RandomDataUtil() {
    }

    public static String getNumber(int size) {
        return chooseRandomly(NUMERIC, size);
    }

    public static String getUpperAlphabet(int size) {
        return chooseRandomly(ALPHABET_UPPER, size);
    }

    public static String getLowerAlphabet(int size) {
        return chooseRandomly(ALPHABET_LOWER, size);
    }

    public static String getAlphabet(int size) {
        return chooseRandomly(ALPHABET, size);
    }

    public static String getAlphabetAndNumber(int size) {
        return chooseRandomly(ALPHABET_NUMERIC, size);
    }

    public static String getLowerAlphabetAndNumber(int size) {
        return chooseRandomly(ALPHABET_LOWER_NUMERIC, size);
    }

    public static String getCellPhone() {
        return "010" + getNumber(8);
    }

    public static String getEmail(String provider) {
        String front = getLowerAlphabetAndNumber(10);

        switch (provider) {
            case "GOOGLE":
                return front + "@gmail.com";
            case "KAKAO":
                return front + "@daum.com";
            case "NAVER":
                return front + "@naver.com";
            default:
                throw new RuntimeException("이 코드는 실행될 수 없습니다.");
        }
    }

    public static String getProvider() {
        return PROVIDERS[(int) (3 * Math.random())];
    }

    public static String chooseRandomly(String target, int size) {
        if (size < 1) {
            throw new IllegalArgumentException("랜덤 문자열의 길이는 1보다 커야합니다.");
        }

        StringBuilder chosen = new StringBuilder();

        while (size-- > 0) {
            int random_idx = random.nextInt(target.length());
            chosen.append(target.charAt(random_idx));
        }

        return chosen.toString();
    }

}
