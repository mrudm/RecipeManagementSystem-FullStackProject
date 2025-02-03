package com.mrudula.cookbook.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.mrudula.cookbook.model.Category;
import com.mrudula.cookbook.model.Recipe;

@Repository
public interface CookBookReposiory extends JpaRepository<Recipe, Integer> {
	
	Recipe findFirstByFoodNameIgnoreCase(String foodName);
	
	List<Recipe> findByCategory(Category category);
}
