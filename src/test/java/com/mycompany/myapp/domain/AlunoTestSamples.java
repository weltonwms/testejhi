package com.mycompany.myapp.domain;

import java.util.Random;
import java.util.UUID;
import java.util.concurrent.atomic.AtomicLong;

public class AlunoTestSamples {

    private static final Random random = new Random();
    private static final AtomicLong longCount = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    public static Aluno getAlunoSample1() {
        return new Aluno().id(1L).descricao("descricao1").email("email1");
    }

    public static Aluno getAlunoSample2() {
        return new Aluno().id(2L).descricao("descricao2").email("email2");
    }

    public static Aluno getAlunoRandomSampleGenerator() {
        return new Aluno().id(longCount.incrementAndGet()).descricao(UUID.randomUUID().toString()).email(UUID.randomUUID().toString());
    }
}
