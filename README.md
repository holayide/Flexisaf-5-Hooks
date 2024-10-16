# Week 5 : Deverables

This week we looked into hooks such as useEffect, useState and useRef

## useRef

useRef is used to persist a value across renders without causing a re-render when the value changes. It’s commonly used to reference DOM elements or store mutable values.

It is typically used when you need to manage a value that should persist across renders but does not need to be part of the rendering process (i.e., it won’t affect what the UI looks like).

## useEffect

useEffect is used to handle side effects in functional components. It runs after the initial render and can be used for tasks like data fetching, subscriptions, or manual DOM updates.

It accepts a dependency array, which controls when the effect should re-run. Additionally, it can return a cleanup function, which is executed when the component is unmounted or before the effect runs again (useful for cleaning up resources like subscriptions or timers).

useEffect(() => {

return () => {
// Cleanup function (optional)
};
}, [dependencyArray]);

## useState

useState is used to add state to functional components. It returns the current state and a function to update that state.

const [x, y] = useState(i);

- x: The current state value.
- y: The function to update the state value
- i: The initial state value.
