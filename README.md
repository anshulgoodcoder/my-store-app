## Getting Started

I have created this [Next.js] project using [`create-next-app`]

## Component structure

Then as per the requirement i have made component structure 
in main app/page.js -> code is written for main product listing page
then inside components there are 2 components:
1. CartItem.js
2. ProductCard.js
and there is a cart folder for cart page 

## Logic

Using local storage to persist the cart data of user so that if user can refresh then data still persist in the storage and we can take it and then continue the user from there only.
Also made a parent state to pass it on child component for product information.

## Deploy on Netlify

For deployment i use netlify and push this code to github and then deploy it on netlify