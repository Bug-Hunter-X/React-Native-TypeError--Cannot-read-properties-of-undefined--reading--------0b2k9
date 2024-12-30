# React Native: Handling TypeError: Cannot read properties of undefined (reading '...')

This repository demonstrates a common error in React Native: `TypeError: Cannot read properties of undefined (reading '...')`. This occurs when attempting to access a property of an object or array that is currently `null` or `undefined`.  The example showcases the error and provides a solution using optional chaining and nullish coalescing.

## Problem

The `bug.js` file illustrates how accessing properties of null or undefined values results in the error.  The example focuses on accessing properties of potentially null or undefined objects returned from asynchronous functions and accessing elements of an array that might be empty.

## Solution

The `bugSolution.js` file demonstrates how to prevent this error using optional chaining (`?.`) and the nullish coalescing operator (`??`).  Optional chaining safely accesses properties, returning `undefined` if any intermediate property is `null` or `undefined`.  The nullish coalescing operator provides a default value if a value is `null` or `undefined`.