```javascript
// bugSolution.js

async function getUser() {
  // Simulate an API call that might fail
  const success = Math.random() < 0.5;
  return success ? { id: 1, name: 'John Doe' } : null;
}

async function displayUserName() {
  const user = await getUser();
  // Use optional chaining and nullish coalescing
  const userName = user?.name ?? 'Guest';
  console.log(`User Name: ${userName}`);
}

displayUserName();

const arr = [];
const firstValue = arr[0]?.value ?? 'No value';
console.log(firstValue);
```