```javascript
// Correct use of $inc operator with a numeric value
db.collection.updateOne({name: "John"}, {$inc: {age: 1}});
```