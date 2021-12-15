const { Cookbook } = require('../src/cookbook');

describe('Cookbook', () => {
  describe('Adding recipes', () => {
    test('should allow a recipe to be added', () => {
      const deliciousCookBook = new Cookbook();
      deliciousCookBook.addRecipe("Cake",['Flour','Cream','Egg', 'sugar', 'salt']);
      expect(deliciousCookBook.recipes).toEqual({Cake: ['Flour','Cream','Egg', 'sugar', 'salt']});
    });
  });

  describe('Listing recipes', () => {
    test('should allow the recipes to be listed', () => {

    });
  });

  describe('Retrieving a recipe', () => {
    test('should allow the ingredients for a recipe to be retrieved', () => {

    });
  });

  describe('Deleting a recipe', () => {
    test('should allow a recipe to be deleted', () => {

    });
  });
});
