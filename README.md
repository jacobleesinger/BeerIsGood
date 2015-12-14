# BeerIsGood

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://beerisgood.herokuapp.com

## Minimum Viable Product

BeerIsGood is a social media web application for craft beer enthusiasts inspired by Untappd and built using Ruby on Rails and React.js. BeerIsGood allows users to:



<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create an account
- [ ] Log in / Log out
- [ ] Create, read, edit, and delete reviews
- [ ] View other users' profiles and reviews
- [ ] Connect with other users by adding them as a friend
- [ ] View a timeline of friends' recent reviews
- [ ] Interact with friends by commenting on and/or "toast"-ing their reviews
- [ ] Search for reviews by beer name or review author username


## Design Docs
* [View Wireframes][view]
* [DB schema][schema]

[view]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Rails Back-End, User Authentication, JSON API (2 days)

In Phase 1 I will create the majority of the application's Rails back end logic. I will implement user signup and authentication (using BCrypt), with a basic landing page and views for signing up and signing in. There will be a main page that will contain the application's root React component. I will then build all of the primary JSON APIs (for Users, Beers, and Reviews).


[Details][phase-one]

### Phase 2: Flux Architecture: Users, Beers, Reviews (2.5 days)

In Phase 2 I will create the Flux Architecture, the React Router, and the React view structure for the main application. I will then set up stores for Users and Beers, with corresponding actions. CRUD functionality for Reviews will live in the Beer to which a Review belongs. Once these are set up I will create React views for Reviews Index, IndexItem, and Form.
At the end of phase 2, Reviews can be created, edited, and destroyed though the browser, and read filtered by reviews created by the current user, the user's friends, or the beer to which it belongs. I will also start using basic bootstrap for styling during this phase.

### Phase 2 alternate: Flux Architecture part 1: Reviews (2.5 days)

In Phase 2 I will begin creating the Flux Architecture, React Router, and React view structure for the main application. I have decided to split this into two phases, as the main application is essentially divided into two layers. The Reviews comprise a significant portion of the application, and only differ slightly between subpages. I will create the Review store, which will filter Reviews to be rendered according to which actions have been dispatched. I will create CRUD functionality for reviews and a React ReviewsIndex that contains ReviewIndexItems which can be filtered by User or Beer, along with a Form for creating new Reviews.
At the end of Phase 2, Reviews can be created, edited,  and destroyed through the browser, and read either as a complete Index or filtered by the User or Beer to which they belong. I will also start using Bootstrap for basic styling during this phase. User and Beer views will only consist of filtered ReviewIndexItems at this point.


[Details][phase-two]

### Phase 3: Friends, comments, toasts (2 days)

In Phase 3 I will add more interactivity between Users and their reviews. I will implement the mechanism for adding/confirming another User as a Friend. I will create the JSON API for Comments and Toasts, allowing Users to interact with their Friends' reviews. I will also implement a simple UserFriendsIndex React view which will enable a User to see a list of all of their friends and link to those friends' user pages. At this point I will have to enforce that Users cannot Update or Destroy profiles other than their own.
At the end of Phase 3, the application's core social features will be in place. Users will be able to 'Friend' each other, see other Users' profiles and reviews, and interact with their Friends by Commenting on and/or Toasting their reviews.  

### Phase 3 alternate: Users and Interactivity (2.5 days)

In Phase 3 I will add significant interactivity between Users and Reviews. I will implement the mechanism for adding/confirming another user as a Friend. I will create the JSON API for Comments and Toasts, allowing users to interact wiht their Friends' Reviews. I will also implement a simple UserFriendsIndex React view which will enable a User to see a list of all their Friends and link to those Friends' user pages. At this point I will have to enforce that most Users cannot Update or Destroy profiles other than their own.
At the end of Phase 3, the application's core social features will be in place. Users will be able to 'Friend' each other, see others Users' profiles and Reviews, and interact with their Friends by Commenting on and/or Toasting their Reviews.



[Details][phase-three]

### Phase 4: Search (1 day)
Phase 4 will implement a multi-use search that will allow Users to search for other Users or for Beers. Search is an extremely important part of this application as it is what in my mind will really make it feel like a single page app. During this phase I will also add a link on Beer pages to the Review Form for that beer.
After Phase 4, Users will be able to get to the views for any Beer/User from their own User view, allowing them to quickly and easily access all of the features implemented in phases 2 and 3 directly from the application. At this point the minimum viable product will be complete, and BeerIsGood will be beginning to look and behave like a real, user-friendly, interactive social media web application.



[Details][phase-four]

### Phase 5: Fleshing out Users and Beers: Sidebars and Summaries (1 day)

In Phase 5 I will begin to work on more visual, less functional aspects of the app. User/User and User/Beer interactions will be more or less fully implemented by this point, but there isn't yet a whole lot to see other than reviews. I will add displays of various information about Users and Beers to their respective React views in the form of Sidebars and Summaries. At this point I will also add more columns to the User and Beer tables in the database in order to store that data. Most of this content will be optional; Users will be able to create their full profile either when they sign up or any time later via links I will add to User views.
After phase 5, there should no longer be large areas of empty space on any of the application's main views. Adding additional informational content for Users and Beers will not significantly alter the app's functionality, but it will make for a more complete and immersive experience.


[Details][phase-five]

### Phase 6: Styling Cleanup and Seeding (1+ day(s))

CSS. So much CSS for everything, until it looks AWESOME.

### Bonus Features (TBD)
- [ ] Beers belong_to a Brewery (Breweries will be searchable)
- [ ] Reviews include a Venue (Venues will be searchable)
- [ ] Google Maps API. Let Users find Venues near them!
- [ ] Beers have Styles (Styles will be searchable)
- [ ] Multiple CSS Themes available. (dark beer/light beer, possibly based on      what styles the user rates highest)
- [ ] Connect with Facebook using some API (sign up using Facebook, allow app to post to Facebook)  -- I have no idea how to do this

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
