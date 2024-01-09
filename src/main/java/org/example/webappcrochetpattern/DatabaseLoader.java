package org.example.webappcrochetpattern;

import org.example.webappcrochetpattern.model.Pattern;
import org.example.webappcrochetpattern.model.Row;
import org.example.webappcrochetpattern.repository.PatternRepository;
import org.example.webappcrochetpattern.repository.RowRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public class DatabaseLoader implements CommandLineRunner {

   private final PatternRepository patternRepository;
   private final RowRepository rowRepository;

   @Autowired
   public DatabaseLoader(PatternRepository patternRepository, RowRepository rowRepository) {
       this.patternRepository = patternRepository;
       this.rowRepository = rowRepository;
   }

    @Override
    public void run(String... args) throws Exception {
        Pattern testPattern = Pattern.builder()
                .name("Test pattern")
                .description("Test description")
                .rows(new ArrayList<>())
                .build();

        Row testRow = Row.builder()
                .patternRowNumber(1)
                .description("Test row")
                .pattern(testPattern)
                .build();

        testPattern.getRows().add(testRow);

        patternRepository.save(testPattern);
   }

}
