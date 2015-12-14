# Phase 5: Fleshing out Beers and Users: Summaries and Sidebars

## Rails
### Models
* User
* Beer

### Controllers


### Views
* User/show.json.jbuilder
* Beer/show.json.jbuilder

## Flux
### Views (React Components)
* UserSummary
* UserSidebarIndex
  - UserSidebarIndexItem
* BeerSummary
* BeerSidebarIndex
  - BeerSidebarIndexItem

### Stores
* User
* Beer

### Actions

* ApiActions.receiveAllUsers
* ApiActions.receiveSingleUser

* ApiActions.receiveAllBeers
* ApiActions.receiveSingleBeer

* UserActions.fetchAllUsers
* UserActions.fetchSingleUser
* UserActions.createUser
* UserActions.updateUser

* BeerActions.fetchAllBeers
* BeerActions.fetchSingleBeer
* BeerActions.createBeer

### ApiUtil

* ApiUtil.fetchAllUsers
* ApiUtil.fetchSingleUser
* ApiUtil.createUser
* ApiUtil.updateUser

* ApiUtil.fetchAllBeers
* ApiUtil.fetchSingleBeer
* ApiUtil.createBeer



## Gems/Libraries
