package com.mrudula.cookbook.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.mrudula.cookbook.model.Category;
import com.mrudula.cookbook.model.Recipe;
import com.mrudula.cookbook.repository.CookBookReposiory;
import com.mrudula.cookbook.responseWrapper.ResponseWrapper;


@Service
public class CookBookService {
	
	@Autowired
	ResponseWrapper responseWrapper;
	
	@Autowired
	CookBookReposiory cookBookReposiory;
	
	public ResponseEntity<?> getRecipeByFoodName(String foodName){
		Recipe recipeFound = cookBookReposiory.findFirstByFoodNameIgnoreCase(foodName); 
		ResponseWrapper responseWrapper = new ResponseWrapper();
		if (recipeFound != null) { responseWrapper.setMessage("Recipe found"); 
		responseWrapper.setData(recipeFound);
		return new ResponseEntity<>(responseWrapper, HttpStatus.OK); } else
		{ responseWrapper.setMessage("Recipe not found"); 
		return new ResponseEntity<>(responseWrapper, HttpStatus.NOT_FOUND); } } 
	
	public ResponseEntity<?>getRecipeById(int id){
		Recipe recipe_found=cookBookReposiory.findById(id).orElseThrow(
				() ->
				{
					throw new ResponseStatusException
					(HttpStatus.NOT_FOUND,id+"id does not exist");
				}
				);
		responseWrapper.setMessage("following recipe found with id" + id);
		responseWrapper.setData(recipe_found);
		return new ResponseEntity<>(responseWrapper,HttpStatus.FOUND);
	}
	
	public ResponseEntity<?>addRecipe(Recipe recipe){           
	Recipe savedRecipe = cookBookReposiory.save(recipe);
    responseWrapper.setMessage("Recipe added successfully.");
	responseWrapper.setData(savedRecipe);
	return new ResponseEntity<>(responseWrapper, HttpStatus.CREATED);
	}

	public ResponseEntity<?> getAllRecipes(){
	List <Recipe> allRecipes=cookBookReposiory.findAll();
	responseWrapper.setMessage("following recipes found");
	responseWrapper.setData(allRecipes);
	return new ResponseEntity<>(responseWrapper, HttpStatus.FOUND);
	}
	
	public ResponseEntity<?> updateRecipe(int id,Recipe recipe){
	Recipe recipeFound=cookBookReposiory.findById(id).
			orElseThrow(()->{
			throw new ResponseStatusException
			(HttpStatus.NOT_FOUND, id +"id doesn't exist");
	
			});
	recipeFound.setCategory(recipe.getCategory());
	recipeFound.setFoodName(recipe.getFoodName()); 
	recipeFound.setDescription(recipe.getDescription());
    recipeFound.setIngredients(recipe.getIngredients());
    recipeFound.setSteps(recipe.getSteps()); 
    recipeFound.setUpdatedAt(recipe.getCreatedAt());
	Recipe updatedRecipe=cookBookReposiory.save(recipeFound);
	responseWrapper.setMessage("recipe with id" +  id  + "updated");
	responseWrapper.setData(updatedRecipe);	
	return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}
	
	public ResponseEntity<?> deleteById(int id){
	cookBookReposiory.findById(id). 
	orElseThrow(() ->
	{
			throw new ResponseStatusException
			(HttpStatus.NOT_FOUND, id + "id doesn't exist");
	});
		cookBookReposiory.deleteById(id);
		responseWrapper.setMessage("recipe with id" + id + "deleted");
		responseWrapper.setData(null);
		return new ResponseEntity<>(responseWrapper,HttpStatus.OK);
	}
	
	public ResponseEntity<?> getRecipeByCategory(Category category){
		List<Recipe> recipes_Found=cookBookReposiory.findByCategory(category);
		responseWrapper.setMessage("Recipes found for following category");
		responseWrapper.setData(recipes_Found);
		return new ResponseEntity<>(responseWrapper,HttpStatus.FOUND);
	}
	
}
