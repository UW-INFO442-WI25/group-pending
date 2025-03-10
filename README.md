# Dealicious
The final website can be viewed here: 

# Our Mission
Eating healthily on a budget is a big challenge for many students. Our project will address the lack of a centralized platform combining healthy recipes with local discounts and sales, to specifically target university students on a limited budget. We hope to close the gap between students' convenience, cost, and affordable healthy eating by developing a web-based application.

# Features
- Weekly meal plans catered to individual dietary requirements and budgets
- An ideal meal plan featuring breakfast, lunch, and dinner, complete with recipes, step-by-step instructions, and detailed nutrition information.
- A grocery page where users can filter and view specific on-sale items with ease.


# Group Members
- Alex Zhang
- Ji Min Sung
- Irene Jo
- Yaqi Lu
- Nikki Suneel

# Development
- Dealicious developed with:
  - HTML
  - CSS
  - JavaScript

# User Persona
- Our testing protocol document can be viewed here: [User Persona](https://github.com/UW-INFO442-WI25/group-pending/blob/app-setup/User%20Persona.pdf)

# Testing Protocol

| Test Description       | Pre-conditions | Test Steps                                      | Expected Result                             | Expected Deficiency                          |
|------------------------|----------------|------------------------------------------------|---------------------------------------------|---------------------------------------------|
| Meal Plan Cards  | User is on the meal plan page | 1. Navigate to the meal plan page<br>2. Click through the Day 1-7 buttons | User should see 3 meal cards for 7 days, clicking on the day buttons should change the recipes. | Cards may not load if API credits are used up |
| Meal Plan Filtering | User is on the meal plan page | 1. Click on the Nutrition Option for Gluten Free<br>2. Click on the Cuisine Option for American | The recipes should update to Gluten Free and American recipes | Cards may not load if API credits are used up, using filters may not work if API credits are used up |
| Meal Plan Deals | User is on the meal plan page | 1. Click through the days buttons  | User should see a highlight for discounted ingredients | |
| Grocery Deal Page | User is on the grocery deals page  | 1. Navigate to the grocery deals page                  | User should see grocery deals for 30 ingredients with discount amounts, images, and discount time frames. These ingredients should match with discounted ingredients on the meal plan page     |  |



# Bugs
- Since we're using Render for hosting the backend and the frontend, the backend will spin down after inactivity. When opening the website it might not show grocery items in the grocery deal page or recipes in the meal plan page while the backend is redeploying.
- Some recipes may not have instructions or ingredients, due to limitations in the Spoonacular API.
