# Schema Information

## reviews
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
rating      | integer   | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users)
beer_id     | integer   | not null, foreign key (references beers)


## beers
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null, indexed


## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, unique
birthday        | date      | not null
password_digest | string    | not null
session_token   | string    | not null


## friendships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
friend_id       | integer   | not null, foreign key (references users)


## comments
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
body            | text      | not null
author_id       | integer   | not null, foreign key (references users)
review_id       | integer   | not null, foreign key (references reviews)


## toasts
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
user_id         | integer   | not null, foreign key (references users)
review_id       | integer   | not null, foreign key (references reviews)
