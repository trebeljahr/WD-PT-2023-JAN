## Mongo Data Models

#### We want to talk about different ways to model our data 

#### First we need to talk about relationships between our entities

#### Database entity is a thing, person, place, unit, object or any item about which the data should be captured and stored in the form of properties

## Possible Relations:

#### One to one - e.g. one person has one id card  
#### One to many - e.g. one blog post has multiple comments 

### Some Considerations 
- Embed as much as you can to not have the problem of having to go to multiple servers 
(huge problem in relational databases if you have to join)
- Hardest part is the document design because there are no magic rules that you just stick
to
- Most important question is: How often do you read and how often do you write data ?