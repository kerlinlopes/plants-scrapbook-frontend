# Project 4 - Plants Scrapbook FRONTEND
#### BY KERLIN
![image](https://{https://i.imgur.com/8v2uy0y.png})

## Project Summary
Creating a frontend Application in React that allows a user to add, edit, create and delete. Have a minimum of 5 Components and be responsive.

## Models
Model:
```
Plant
- name: String
- description: String
- image: String
```

## Route table

| Route Name | URL | HTTP | Description |
|-----------|------|-------|-------------|
| INDEX | / | GET | Render all of our plants 
| SHOW | /post/:id | GET | Render an individual plant page
| NEW | /new | GET | render our Form component for creating a new plant
| EDIT | /edit | GET | Renders our Form to edit our plant
| UPDATE | /post/:id | PUT | Renders our Form to update our plant
| DELETE | /post/:id | DELETE | Deletes a plant
| Zodiac | /zodiac | GET | Renders plants with a button to click and read horoscope 
| Guide | /guide | GET | Renders a carousel and tips on how to take care for your plants

## User Stories
 - User is able to add a new , edit, update or delete a plant
 - User can go to the Zodiac page and see which flower they are based on their astrological sign
 - User is be able to go to Guide page to see how to take care of their plants and see a carousel of plants 

## Challenges
- importing components such as where to put the zodiac page and guide page 
- adding a lot of html
- wireframing

## List of technologies
- JS, Python-Masonite, Heroku, Vercel

## Resources
- Zodiac "https://www.1800flowers.com/blog/flower-facts/zodiac-sign-flowers/"
- Plants "https://www.gardeningwithcharlie.com/" 
- Carousel "https://www.positronx.io/react-responsive-carousel-tutorial/"
- Flexbox "https://flexbox.malven.co/"