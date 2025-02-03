package com.mrudula.cookbook.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.mrudula.cookbook.model.Category;
import com.mrudula.cookbook.model.Recipe;
import com.mrudula.cookbook.service.CookBookService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/recipes")
@CrossOrigin("*")
public class CookbookController {
       
	@Autowired
	CookBookService cookBookService;
	
	@PostMapping("/addrecipe")
	public ResponseEntity<?>addRecipe(@RequestBody @Valid Recipe recipe){
	return cookBookService.addRecipe(recipe);
	}
	
	@GetMapping("/allrecipes")
	public ResponseEntity<?> getAllRecipes(){
	return cookBookService.getAllRecipes();
	}
	
	@PutMapping("/updaterecipe/{id}")
	public ResponseEntity<?> updateRecipe(@PathVariable int id,@RequestBody  Recipe recipe){
		return cookBookService.updateRecipe(id, recipe);
	}
	
	@DeleteMapping("/deleterecipe/{id}")
	public ResponseEntity<?> deleteById(@PathVariable int id){
	return cookBookService.deleteById(id);
	}
	
	@GetMapping("/foodName/{foodName}")
	public ResponseEntity<?> getRecipeByFoodName(@PathVariable String foodName) {
		return cookBookService.getRecipeByFoodName(foodName); } 
		
	@GetMapping("/{id}")
	public ResponseEntity<?> getRecipeById(@PathVariable int id){
    return cookBookService.getRecipeById(id);
	}
	
	@GetMapping("/category/{category}")
	public ResponseEntity<?> getRecipeByCategory(@PathVariable Category category){
	return cookBookService.getRecipeByCategory(category);
	}
		
}
