package org.example.webappcrochetpattern.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Pattern {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "pattern_id")
    private Long id;
    private String name;
    private String description;
    @OneToMany(mappedBy = "pattern", cascade = CascadeType.ALL)
    private List<Row> rows = new ArrayList<>();

}
