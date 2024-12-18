```javascript
// Incorrect use of $inc operator with a non-numeric value
db.collection.updateOne({name: "John"}, {$inc: {age: "1"}});
```