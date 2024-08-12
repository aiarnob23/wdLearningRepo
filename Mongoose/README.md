#MONGODB_CHEAT_SHEET
## $eq:  Specifies equality condition. The $eq operator matches documents where the value of a field equals the specified value . another comparison operators: $gt, $gte, $lt, $lte, $ne


***find({age:{$eq : 25}},{age:1})***

## (,) inside {} after the field name : specifies implicit and(&&) operation  
***find({age:{$gte : 25 , $lt:27}} , {age:1, gender:1}).sort({age:1})***


***find({age : {$gte : 25, $lte:26}} , {gender:"male"} )***

## $in : selects the documents where the value of a field equals any value in the specified array. Its kinda like or(||) operation.


***find({ age: { $in: [24, 25, 32] } } )***


**tags is an arry :**


***find({ tags: { $in: [ fruit" , "sweet" ] } } )***

## $nin : selects the documents where:


**the specified field value is not in the specified array or**


**the specified field does not exist.**


***{ field: { $nin: [ <value1>, <value2> ... <valueN> ] } }***

## $and : performs a logical AND operation on an array of one or more expressions (<expression1>, <expression2>, and so on) and selects the documents that satisfy all the expressions. 


**{ $and: [ { <expression1> }, { <expression2> } , ... , { <expressionN> } ] }**


***find ( { $and : [ { age : 23 } , { gender : "female" } ] } )***


## $not : performs a logical NOT operation on the specified <operator-expression> and selects the documents that do not match the <operator-expression>. This includes documents that do not contain the field.


***find( { price: { $not: { $gt: 1.99 } } } )***


## $nor : performs a logical NOR (not + or) operation on an array of one or more query expression and selects the documents that fail all the query expressions in the array. The $nor has the following syntax:


***find( { $nor: [ { price: 1.99 } , { sale: true } ]  } )***


### another relative operator:


***$or :  { $or: [ { <expression1> }, { <expression2> }, ... , { <expressionN> } ] }**


## $exists : matches documents that contain or do not contain a specified field, including documents where the field value is null.


**{ field: { $exists: <boolean> } }**


***find( { Experience : { $exists : true } } )***

## $type : selects documents where the value of the field is an instance of the specified BSON type(s). Querying by data type is useful when dealing with highly unstructured data where data types are not predictable.


**{ field: { $type: <BSON type> } }**

## $all : selects the documents where the value of a field is an array that contains all the specified elements. Equivalent to $and.


**{ <field>: { $all: [ <value1> , <value2> ... ] } }**


***{ tags: { $all: [ "ssl" , "security" ] } }***


## $elemMatch : matches documents that contain an array field with at least one element that matches all the specified query criteria.


***  { price: { $elemMatch: { $gte: 80, $lt: 85 } } }***

## $size : matches any array with the number of elements specified by the argument.


**find( { field: { $size: 2 } } )**


## Aggregation Pipeline ##
**An aggregation pipeline consists of one or more stages that process documents:**


**Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.**


**The documents that are output from a stage are passed to the next stage.**


**An aggregation pipeline can return results for groups of documents. For example, return the total, average, maximum, and minimum values.**


```StudentModel.aggregate([
        {
            $match : { isActive : true}
        },
        {
            $group : {_id:"$age", totalBalance: {$sum : "$balance"}}
        }
    ]);```
