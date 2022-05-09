# OnlineShopping
Project of spring and react


## Problem statement
Our project tried to solve the problem of letting people shop and sell goods online. They should be able to get access to all sorts of goods or sell their goods online in a convenient and efficient way.
## Solution statement
Thus, we implemented an online shopping website. All users can either sell or buy goods on our website. Buyers can browse through the available goods and place their orders. Sellers can submit the goods they want to sell and manage their orders.
## User
All kinds of users are welcomed. As long as they obey the specific laws of what can be sold or bought online in their country or state, they can either be a seller or a buyer on our website.
## Domain objects
We implemented three domain objects in total:
- Products: the goods that are selling on our website.
- Orders: the orders that buyers placed and can be managed by both sellers and buyers.
- Payment Methods: Buyers can add a new way or choose an existing way to pay for their orders.

## Data Model
In our repo, we have the data model for Users, Buyers, Sellers, Products,  Orders, OrdersItem, FamilyPlan, PaymentMethod . 

## User Interface
Currently,  our user interface components are connected . 

The following components should suffice the requirements .

1. The first page is the Landing page. It will show the users' list like log in. If you want to see the selected user's page, you can press the view button. You can also press the createBuyer button to create a new buyer, **after signup, please refresh the page** and you can can see a new buyer in the list

2. For the buyer you selected, you can see the buyer's page. At the top pf the page, you can choose to see the product page or the order page.

   For the product page, when you want to buy something, you can input the quantity you want, and then you can select a account and submit the order. Also you can edit and create the new payment method. Notice: please only press one time of paymentmethod
   
   After submit the order, you can see a new order in order page, and if you want to cancel the order, you can press the cancel button, if you want to see the detail of the order, you can press the view button.

   At the right top of the buyer's page, you can update the user's personal info and delete the buyer. In the user's personal info, you can see a family plan, it will show you the existing family plan's name , you can choose to join in the family plan.

   When you want to return the  users' list, please press the YaMaZon button and **refresh** the page.

3. For the seller you selected,in the product page, you can edit or delete the product. In the order page, you can see the orders which include the products you are selling. You can cancel, edit, and view the details of the order. By the way, when editing the status, please input one of 

   ```
   CANCELLED  DELIVERED   IN DELIVERY   PROCESSING   SUBMITTED
   ```

   you can also create a new product, when input the seller_id in create page, **please input 2 when you select the  Yiran Wang, 3 when selecting steven Durant**. At the right top of the seller's page, you can update the seller's personal info. 

   When you want to return the  users' list, please press the YaMaZon button and **refresh the page.**

Our shopping website does not support the feature of deleting an order, although it is in the requirement of P2. Since in our shopping mall, all of the previous orders should be kept in the database as reference. 
Thus, deleting an order is not reasonable to have for our business logic. However, we do allow users to change the status of the order as `CANCELLED`.

## Ways to start our program.
1) Data import the sql files in the folder `p3/database` into your local database. We use MySQL workbench while developing.
2) Maven install. You may want to change the username and password in the `p3/src/main/resources/application.properties` file. Then run the `p3/src/main/java/com/example/p2/DemoApplication.java`. Make sure your port 8080 is not occupied before running the program. And we used Java 14 while developing the backend.
3) Make sure you install `Node.js` (https://nodejs.dev/learn/how-to-install-nodejs). Go to directory `webapp` and run `npm install` and `npm start`. It would automatically connects to port 3000. If you want to check all the available screens we have in React, please refer to the instructions in the previous section.

Be aware: when you see errors, please return to the http://localhost:3000/ and start again, then you can see the update.
