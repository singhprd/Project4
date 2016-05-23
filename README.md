# Project4
ScranShare Food App

Day One
Decision made to put API (supplier, demand), interactivity with database in Ruby on Rails, and use React for the separate app controlled by the admin (linking to Googlemaps).
Design ideas discussed.
Trello board setup.
Peter and Erik set up startpoint for node and rails - git rep created.

First disagreement occurs: (Erik "Sorry for disagreeing so fervently when you might be right.") but group powers through.


Day Two

- Discussed in depth the user story and the different types of user. We came to an agreement that there is two types. One being the Courier and the other a 'user' which could be either supply or demand but this can be specified by selecting what type they are. 

-Discussed what are data stucture will be. From having 5 different object this has now became two. The Company and the Job. The job be it those giving food or recieving food, is the same. 

- We set up React authorisation and realised we are going to have to deal with CORS. so before lanuching into it, we discussed exactly how it is going to be design. We also have planned for Monday for Jay to go over React authorisation as it is doing a lot of magic that we are unsure of. 

Day Three

-Alison and Claire took on the challenge of CORS and in an a hour (*yes we are that good*)are victorious. The next step is to have rails connected to a database.

-Things we had to install
rack-cors
react-addons-linked-state-mixin 

- By the end of the day users can sign up/out in both react and rails. 
- User data is persisted after sign up.
- Created new welcome page views.

We now need to create models for companies and courrier so that users can have a foreign key linking them to a company or courrier.

