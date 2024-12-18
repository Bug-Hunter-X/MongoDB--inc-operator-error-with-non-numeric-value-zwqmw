# MongoDB $inc Operator Error with Non-Numeric Value

This repository demonstrates a common error encountered when using MongoDB's `$inc` operator. The `$inc` operator is used to increment a numeric field by a specified value, but it will throw an error if the value provided is not a number.

## Bug Description
The bug is in the `updateOne` operation. The value associated with age is a string "1" rather than a number. This will result in an error.