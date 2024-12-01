{
How to handle asynchronous operations using async/await over callback/promise TypeScript.

Async programming is a programming paradigm that allows you to write code that runs asynchronously. In contrast to synchronous programming, which executes code sequentially, async programming allows code to run in the background while the rest of the program continues to execute. This is particularly useful for tasks that may take a long time to complete, such as fetching data from a remote API.

In JavaScript, async programming is essential for creating responsive and efficient applications. TypeScript, a superset of JavaScript, makes it even easier to work with async programming. There are several approaches to async programming in TypeScript, including promises, async/await, and callbacks. we will cover each of these approaches in detail, so that you can choose the best one for your use case.
    Why is Async Programming Important?
Async programming is essential for building modern web applications that are responsive and efficient. By allowing tasks to run in the background while the rest of the program continues to execute, async programming ensures that the user interface remains responsive to user input. Additionally, async programming can improve the overall performance of the application by allowing multiple tasks to run concurrently.
There are many examples of how async programming can be used in real-world applications, such as making HTTP requests, accessing user cameras and microphones, and handling user input events. Even if you don't need to implement your own asynchronous functions very often, it's important to understand how to use them correctly to ensure that your application is reliable and performs well.

How TypeScript Makes Async Programming Easier
TypeScript provides several features that make it easier to work with async programming, including type safety, type inference, type checking, and type annotations. With type safety, you can be sure that your code will work as expected, even when working with asynchronous functions. For example, TypeScript can catch errors related to null and undefined values at compile time, which can save you time and effort in debugging. TypeScript's type inference and checking also reduce the amount of boilerplate code you need to write, which can make your code more concise and easier to read. Additionally, TypeScript's type annotations provide clarity and documentation for your code, which can be especially helpful when working with asynchronous functions that can be difficult to reason about.

Promises in TypeScript
Promises are a powerful tool for working with asynchronous operations in TypeScript. For example, you might use a Promise to fetch data from an external API, or to execute a time-consuming task in the background while your main thread continues to run. To use a Promise, you create a new instance of the Promise class and pass it a function that performs the asynchronous operation. This function should call the resolve method with the eventual result when the operation succeeds, or the reject method with an error when the operation fails. Once the Promise is created, you can attach callbacks to it using the then method. These callbacks will be called when the Promise is fulfilled, with the resolved value passed as a parameter. If the Promise is rejected, you can attach an error handler using the catch method, which will be called with the reason for the rejection.
Using Promises can offer several benefits over traditional callback-based approaches. For example, Promises can help prevent "callback hell", a common problem in asynchronous code where nested callbacks can become difficult to read and maintain. Promises also make it easier to handle errors in asynchronous code, as you can use the catch method to handle errors that occur anywhere in the Promise chain. Finally, Promises can simplify your code by providing a consistent, composable way to handle asynchronous operations, regardless of their underlying implementation.

Creating Promises
The promise syntax

const myPromise = new Promise((resolve, reject) => {
  // Do some asynchronous operation
  // If the operation is successful, call resolve with the result
  // If the operation fails, call reject with an error object
});

myPromise
  .then((result) => {
    // Handle the successful result
  })
  .catch((error) => {
    // Handle the error
  });
// Example 1 on how to create a promise

function myAsyncFunction(): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    // Some asynchronous operation
    setTimeout(() => {
      // Successful operation resolves promiseCheck out my latest blog post on mastering async programming in TypeScript! Learn how to work with Promises, Async/Await, and Callbacks to write efficient and scalable code. Get ready to take your TypeScript skills to the next level!
      const success = true;

      if (success) {
        // Resolve the promise with the operation result if the operation was successful
        resolve(
          `The result is success and your operation result is ${operationResult}`
        );
      } else {
        const rejectCode: number = 404;
        const rejectMessage: string = `The result is failed and your operation result is ${rejectCode}`;
        // Reject the promise with the operation result if the operation failed
        reject(new Error(rejectMessage));
      }
    }, 2000);
  });
}

// Use the promise
myAsyncFunction()
  .then((result) => {
    console.log(result); // output : The result is success and your operation result is 4
  })
  .catch((error) => {
    console.error(error); // output : The result is failed and your operation result is 404
  });
In above example, we have a function called myAsyncFunction() that returns apromise. We use the Promise constructor to create the promise, which takes acallback function with a resolve and reject argument. If the asynchronous operation is successful, we call the resolve function, and if it fails, we call the reject function.

The promise object that's returned by the constructor has a then() method which takes a success and failure callback function. If the promise resolves successfully, the success callback function is called with the result. If the promise rejects, the failure callback function is called with an error message.

Additionally, the promise object also has a catch() method which is used to handle errors that occur during the promise chain. The catch() method takes a callback function which is called if any error occurs in the promise chain.

Now let move how to perform chaining promises in typescript

Chaining Promises
Chaining promises is a way to perform multiple asynchronous operations in a sequence or parallel. This is useful when you need to perform multiple async operations one after the other, or simultaneously. For example, you may need to fetch data asynchronously and then process it asynchronously.
let see example on how to chain promises.

// Example    On how chaining  promises works
// First promise
const promise1 = new Promise((resolve, reject) => {
  const functionOne: string = "This is the first promise function";
  setTimeout(() => {
    resolve(functionOne);
  }, 1000);
});

// Second promise
const promise2 = (data: number) => {
  const functionTwo: string = "This is the second second promise  function";
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(` ${data}  '+'  ${functionTwo} `);
    }, 1000);
  });
};

// Chaining  first and second   promises together
promise1
  .then(promise2)
  .then((result) => {
    console.log(result); // output : This is the first promise function + This is the second second promise  function
  })
  .catch((error) => {
    console.error(error);
  });
In above example, we have two promises:promise1 and promise2. promise1 resolves after 1 second with the string "This is the first promise function". promise2 takes a number as input and returns a promise that resolves after 1 second with a string that concatenates the input number and the string "This is the second promise function".

We then chain the two promises together using the then method. The output of promise1 is passed as input to promise2. Finally, we use the then method again to log the output of promise2 to the console. If either promise1 or promise2 rejects, the error will be caught by the catch method.

Congratulations! You have learned how to create and chain promises in TypeScript. You can now use promises to perform asynchronous operations in TypeScript. so now let Async / Await in TypeScript let see how it works

Async / Await
Async/await is a syntax that was introduced in ES2017 to make working with Promises easier. It provides a way to write asynchronous code that looks and feels like synchronous code. In TypeScript, you can define an asynchronous function using the async keyword. This tells the compiler that the function is asynchronous and will return a Promise.
now let see how to use async / await in typescript

Async / Await Syntax

// Async / Await Syntax in TypeScript
async function functionName(): Promise<ReturnType> {
  try {
    const result = await promise;
    // code to execute after promise resolves
    return result;
  } catch (error) {
    // code to execute if promise rejects
    throw error;
  }
}
In above example above, functionName is an async function that returns a Promise of ReturnType. The await keyword is used to wait for the promise to resolve before continuing with the next line of code.

The try/catch block is used to handle any errors that occur while executing the code inside the async function. If an error occurs, it will be caught by the catch block, where you can handle it appropriately.

Using Arrow Functions with Async / Await

You can also use arrow functions with async/await syntax in TypeScript:

const functionName = async (): Promise<ReturnType> => {
  try {
    const result = await promise;
    // code to execute after promise resolves
    return result;
  } catch (error) {
    // code to execute if promise rejects
    throw error;
  }
};
In above example, the functionName is defined as an arrow function that returns a Promise of ReturnType. The async keyword is used to indicate that this is an asynchronous function, and the await keyword is used to wait for the promise to resolve before continuing with the next line of code.

Async / Await with api call

Now let more then syntax let fetch some api using async / await

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchApi = async (): Promise<void> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(
        `Failed to fetch users (HTTP status code: ${response.status})`
      );
    }

    const data: User[] = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
    throw error;
  }
};

fetchApi();
What we doing is that just fetch api form jsonplaceholder and then convert it to json and then log it to the console. This is real world example on how to use async / await in typescript.

Async/Await with axios api call

// Example 2 on how to use async / await in typescript

const fetchApi = async (): Promise<void> => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    const data = await response.data;
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchApi();
In above example, we define the fetchApi() function using async/await and the axios.get() method to make an HTTP GET request to the specified URL. We use await to wait for the response to be returned, and then extract the data from the response using the data property of the response object. Finally, we log the data to the console using console.log(). Any errors that occur are caught and logged to the console using console.error().

Note ; Before you can try the above code you need to install axios using npm or yarn


npm install axios


yarn add axios

If you don't have any idea on what axios is you can read more about it here axios

You can notice that we just used try and catch block to handle error. Try catch block is a way of handling error in typescript. So anytime you want to make and api calls like what we just did make sure you use try and catch block to handle error.

Now let more advance of using try and catch block in typescript

// Example 3 on how to use async / await in typescript

interface User {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
}

const fetchEmployees = async (): Promise<Array<User> | string> => {
  const api = "http://dummy.retapiexample.com/api/v1/employees";
  try {
    const response = await fetch(api);
    const { data } = await response.json();
    return data;
  } catch (error) {
    if (error) {
      return error.message;
    }
  }
};

fetchEmployees().then((data) => {
  console.log(data);
});
in above example, we define an interface User that describes the shape of the data we expect to receive from the API. We then define the fetchEmployees() function using async/await and the fetch() method to make an HTTP GET request to the specified API endpoint.

We use a try/catch block to handle any errors that might occur during the API request. If the request is successful, we extract the data property from the response using await and return it. If an error occurs, we check if there is an error message, and if so, return it as a string.

Finally, we call the fetchEmployees() function and use.then() to log the returned data to the console. This example demonstrates how to use async/await with try/catch blocks to handle errors in a more advanced scenario, where we need to extract data from a response object and return a custom error message.

Async / Await with Promise.all

Promise.all() is a method that takes an array of promises as an input (an iterable), and returns a single Promise as an output. This Promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.
// Example of using async / await with Promise.all
interface User {
  id: number;
  name: string;
  email: string;
  profilePicture: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}

const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`Network response was not ok for ${url}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error(`Error fetching data from ${url}`);
  }
};

const fetchAllApis = async (): Promise<[User[], Post[], Comment[]]> => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetchApi<User[]>("https://jsonplaceholder.typicode.com/users"),
      fetchApi<Post[]>("https://jsonplaceholder.typicode.com/posts"),
      fetchApi<Comment[]>("https://jsonplaceholder.typicode.com/comments"),
    ]);
    return [users, posts, comments];
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching data from one or more APIs");
  }
};

fetchAllApis()
  .then(([users, posts, comments]) => {
    console.log("Users: ", users);
    console.log("Posts: ", posts);
    console.log("Comments: ", comments);
  })
  .catch((error) => console.error(error));
In the above code we are using Promise.all to fetch multiple api at once. So if you have multiple api to fetch you can use Promise.all to fetch them at once. So you can see that we are using map to loop through the array of api and then we pass it to Promise.all to fetch them at once.

let see how to use Promise.all with axios

// Example of using async / await with axios and Promise.all

const fetchApi = async () => {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/posts",
    ];
    const responses = await Promise.all(urls.map((url) => axios.get(url)));
    const data = await Promise.all(responses.map((response) => response.data));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

fetchApi();
In above example, we're using Promise.all to fetch data from two different URLs simultaneously. We first make an array of the URLs, then use map to create an array of Promises from the axios.get calls. We then pass that array to Promise.all, which returns an array of responses. Finally, we use map again to extract the data from each response, and log it to the console.

Callbacks
A callback is a function that is passed as an argument to another function. The callback function is called (or executed) inside the other function. Callbacks are used to make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors.
// Example of using callbacks in typescript

const add = (a: number, b: number, callback: (result: number) => void) => {
  const result = a + b;
  callback(result);
};

add(10, 20, (result) => {
  console.log(result);
});
let see another example of using callbacks in typescript

// Example of using a callback function in TypeScript

type User = {
  name: string;
  email: string;
};

const fetchUserData = (
  id: number,
  callback: (error: Error | null, user: User | null) => void
) => {
  const api = `https://jsonplaceholder.typicode.com/users/${id}`;
  fetch(api)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .then((data) => {
      const user: User = {
        name: data.name,
        email: data.email,
      };
      callback(null, user);
    })
    .catch((error) => {
      callback(error, null);
    });
};

// Usage of fetchUserData with a callback function
fetchUserData(1, (error, user) => {
  if (error) {
    console.error(error);
  } else {
    console.log(user);
  }
});
In above example, we have a function fetchUserData that takes an id parameter and a callback parameter. The callback parameter is a function that takes two parameters: an error and a user. The function fetchUserData fetches user data from a JSONPlaceholder API endpoint based on the id, and if the fetch is successful, it constructs a User object and passes it to the callback function with a null error. If there's an error during the fetch, it passes the error to the callback function with a null user.

To use the fetchUserData function with a callback, we pass in an id and a callback function as arguments. The callback function checks for errors and logs the user data if there are no errors.
}