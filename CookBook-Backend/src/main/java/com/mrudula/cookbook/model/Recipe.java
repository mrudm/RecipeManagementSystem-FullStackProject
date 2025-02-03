package com.mrudula.cookbook.model;

import java.time.Instant;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Data
public class Recipe {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Enumerated(EnumType.STRING)
	@NotNull(message="Please provide category")
	private Category category;
	
	@NotNull(message="please provide foodName")
	private String foodName;
	
	@NotNull
	@Lob
	private String description;
	
	@NotNull
	@Lob
	private String ingredients;
	
	@NotNull
	@Lob
	private String steps;
	
	@Column(nullable=false)
	private String imagepath;
	
	@CreatedDate
	private Instant createdAt;
	
	@LastModifiedDate
	private Instant updatedAt;

}
