package org.example.webappcrochetpattern.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "pattern_row")
public class Row {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "row_id")
    private Long id;
    private int patternRowNumber;
    private String description;
    @ManyToOne
    @JoinColumn(name = "pattern_id")
    private Pattern pattern;

}
