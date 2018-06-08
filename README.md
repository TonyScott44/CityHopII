# Project1
CityHop - AJ, SK &amp; TS

https://github.com/TonyScott44/CityHopII

# Team CityHop
============
Georgia Tech Coding Bootcamp
Fullstack Web Development
Project 2

# Our Team
* Angela Johnson
* Sasidhar "Sasi" Koramutla
* Anthony "Tony" Scott

# What is this? (problem)

City Hop is a dynamic travel resource that assists spontaneous travelers with updated and essential travel info, suited event and activity packages, and global city tour subscriptions. Whether you want, or need, to plan a last minute trip, City Hop is here to assist with those “spur-of-the-moment” arrangements.



See it in action: 

# Project Sketches
* [Initial Layout](app/public/assets/planning_files/City_Hop_II_Flow_Chart.png)

* [Presentation Outline Draft](app/public/assets/planning_files/pres-outline-draft.docx)

* [Landing page](app/public/assets/planning_files/cityhopII_landing_page.png)

* [Explore/City Search](app/public/assets/planning_files/cityhopII_explore.png)

* [Login Page](app/public/assets/planning_files/cityhopII_login_page.png)

* [City Page](app/public/assets/planning_files/cityhopII_city_page-no_map.png)


#III.	What steps did you take to build the app?
Node and Express Web Server
•	Implemented into a server environment in which we set up an Express server and created html routes and API routes based on that server.

GET and POST routes for retrieving and adding new data
•	Within the controller file, we have defined GET & POST routes that allow us to GET data from the custom API and POST data from that custom API.
•	Must have folder structure that meets MVC Paradigm
o	The html and routing javascript files are located within the controllers folder in the MVC file structure. 


Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)	
•	We used Passport.js and Auth2 to authenticate through Facebook and Google.

Deployed using Heroku (with Data)


	

#Polished frontend / UI
Still using materialize as the CSS framework. Before, we were only using responsive layout, but this time we have use materialize forms and submit buttons, and the collapse feature (hops on city page).

Must be backed by a MySQL Database with a Sequelize ORM  
	Originally Firebase – moved to MySQL

IV.	Show the app running and solving the problem that began your story. 
A.	Also, talk about the features you’d like to add in an update to your app.

o	Go deep into the itinerary bundles that will be available for purchase.
o	Add the ability to add flights to the itinerary bundles, using data gathered from a travel API.
o	Use crypto currency to 
o	Jet lounge – summary page
o	Purchases
o	Instagram feed (add back in)
o	Crypto currency widget that displays user’s preferred crypto currency that they input when they sign up
o	Provide links to hotel/AirBnB/accommodations




# Who is doing what?
Angela is taking on:
* HTML/CSS design
* Presentation design
* Project management (GitHub Issues)
* Page(s): login.html, api-CityHop.js, ReadMe.md

Sasi will be doing:
* APIs - Google
* MYSQL set up
* Page(s): city.html, city.css, logic.js

Tony is handling:
* HTML/CSS design
* Overall layout design
* Server set up
* Custom API design template
* Heroku deployment
* Project management (GitHub Issues)
* Page(s): Landing page redesign, config, controllers
