package org.example.webappcrochetpattern.repository;

import org.example.webappcrochetpattern.model.Pattern;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PatternRepository extends JpaRepository<Pattern, Long> {
}
