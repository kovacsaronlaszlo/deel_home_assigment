# Questions
1. What is the difference between Component and PureComponent? Give an example where it might break my app.
Never used this kind of type before, during the assigment I used functional components nad not class base components


2. Context + ShouldComponentUpdate might be dangerous. Why is that?
shouldComponentUpdate is a lifecycle in the classic react class components (never used it before), my best knowledge in this situation is: shouldComponentUpdate interacts with th context update, potentially leading to components that don't re-render in the response to context change.

3. Describe 3 ways to pass information from a component to its
PARENT.
react context, callback function, (I dont know a third one) 

4. Give 2 ways to prevent components from re-rendering.
React.memo, and shouldComponentUpdate or in functional react the memoization hooks (useMemo, useCallback) which we use  can avoid unnecessary re-renders

5. What is a fragment and why do we need it? Give an example where it might break my app.
with fragment (<Fragment></Fragment> or <></>) we can avoid unnecessary tags, the virtual-Dom can handle mor than one main tag in a component, so if we dont want to give some style, we should giv fragment tag if we want to call mo than one component in the component
I just use one place in App.tsx, but it will work without it.

6. Give 3 examples of the HOC pattern.
authorization, logging, styling

7. What's the difference in handling exceptions in promises, callbacks and async...await?
promise: .catch()
callbacks: first parameter:
someHOF(callback) {
    ...
    callback(error, data);
    ...
}
async ...await: try-catch:
try {
    const something = await fetcSomething();
    ...
} catch(error) {
    console.log("If ythere is some problem: ", error)
}

8. How many arguments does setState take and why is it async.
first part (How many arguments does setState take):
object form, function form, callback

second part (why is it async):
for perfomrance optimalization, minimalizes the number of re-render

9. List the steps needed to migrate a Class to Function
Component.
pass

10. List a few ways styles can be used with components.
inline styles, css file (and import it), module style files (i just used) or use a third part libary (tailwind, bootstrap etc.)

11. How to render an HTML string coming from the server.
dude, I have to solve kind of thing before.
fetch("someurl").then(response => response.text()).then(html => setHtmlContent(html))
