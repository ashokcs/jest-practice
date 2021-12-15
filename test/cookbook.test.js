const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const deliciousCookBook = new Cookbook();
      deliciousCookBook.addRecipe('cake',['flour','cream','egg', 'sugar', 'salt']);
      expect(deliciousCookBook.recipes).toEqual({cake: ['flour','cream','egg', 'sugar', 'salt']});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {
      const deliciousCookBook = new Cookbook();
      deliciousCookBook.addRecipe('cake',['flour','cream','egg', 'sugar', 'salt']);
      deliciousCookBook.addRecipe('pizza',['flour','broccoli','mushroom', 'cheese', 'sauce', 'macaroni', 'flakes']);
      const receipiesList = deliciousCookBook.listRecipes();
      expect(receipiesList).toEqual(['cake','pizza']);
    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {
      const deliciousCookBook = new Cookbook();
      deliciousCookBook.addRecipe('cake',['flour','cream','egg', 'sugar', 'salt']);
      deliciousCookBook.addRecipe('pizza',['flour','broccoli','mushroom', 'cheese', 'sauce', 'macaroni', 'flakes']);
      const pizzaReceipe = myCookbook.getRecipe(['pizza']);
      expect(pizzaReceipe).toEqual(['flour','broccoli','mushroom', 'cheese', 'sauce', 'macaroni', 'flakes']);
    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {
      const deliciousCookBook = new Cookbook();
      deliciousCookBook.addRecipe('cake',['flour','cream','egg', 'sugar', 'salt']);
      deliciousCookBook.addRecipe('pizza',['flour','broccoli','mushroom', 'cheese', 'sauce', 'macaroni', 'flakes']);
      deliciousCookBook.addRecipe('cheeseballs',['cheese','flour', 'coriander', 'sauce']);
      deliciousCookBook.removeRecipe(['pizza']);
      deliciousCookBook.removeRecipe(['cheeseballs']);
      const receipiesList = deliciousCookBook.listRecipes();
      expect(receipiesList).toEqual(['cake']);
    });
  });
});
