/*
Quick Start

Welcome to the React documentation!
This page will give you an introduction to the 80% of React concepts that you will use on a daily basis.

You will learn
* How to create and nest components
* How to add markup and styles
* How to display data
* How to render conditions and lists
* How to respond to events and update the screen
* How to share data between components

Creating and nesting components 

React apps are made out of components.
A component is a piece of the UI (user interface) that has its own logic and appearance.
A component can be as small as a button, or as large as an entire page.

> 리액트 컴포넌트란 마크업을 리턴하는 자바스크립트 함수

React components are JavaScript functions that return markup:
 */
function MyButton() {
    return (
        <button>
            I'm a button
        </button>
    );
}
/*
Now that you’ve declared MyButton, you can nest it into another component:
*/
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my App</h1>
            <MyButton />
        </div>
    )
}
/*
Notice that <MyButton /> starts with a capital letter.
That’s how you know it’s a React component.
React component names must always start with a capital letter, while HTML tags must be lowercase.

> 리액트 컴포넌트는 무조건 대문자로 시작해야 되며, HTML은 무조건 소문자여야 한다

The export default keywords specify the main component in the file.
If you’re not familiar with some piece of JavaScript syntax, MDN and javascript.info have great references.

> export default 키워드를 통해 이 파일에서 어느게 메인 컴포너트인지 명시함

Writing markup with JSX 

The markup syntax you’ve seen above is called JSX.
It is optional, but most React projects use JSX for its convenience.
All of the tools we recommend for local development support JSX out of the box.

JSX is stricter than HTML.
You have to close tags like <br />.
Your component also can’t return multiple JSX tags.
You have to wrap them into a shared parent, like a <div>...</div> or an empty <>...</> wrapper:

> JSX는 자바스크립트를 확장한 거시기임 (JavaScript XML) ex : const element = <h1>Hello, world!</h1>;
필수는 아니지만 리액트는 거의 이걸 쓴다고 하네요
하나의 컴포넌트는 여러 JSX태그를 리턴할수 없기에 div나 빈 태그로 랩핑해야 한다
*/
function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <p>Hello there.<br />How do you do?</p>
        </>
    );
}
/*
If you have a lot of HTML to port to JSX, you can use an online converter.
https://transform.tools/html-to-jsx

Adding styles

In React, you specify a CSS class with className.
It works the same way as the HTML class attribute:
*/
<img className="avatar" />
/*
Then you write the CSS rules for it in a separate CSS file:
*/
/* In your CSS */
.avatar {
    border - radius: 50 %;
}
/*
React does not prescribe how you add CSS files.
In the simplest case, you’ll add a <link> tag to your HTML.
If you use a build tool or a framework, consult its documentation to learn how to add a CSS file to your project.

> 리액트에 정해진 CSS 추가 규칙은 없다고하니 다른데 규정하는 룰 따르라고 함 (리액트는 라이브러리라고 함 자기들이)

Displaying data

JSX lets you put markup into JavaScript.
Curly braces let you “escape back” into JavaScript
so that you can embed some variable from your code and display it to the user.
For example, this will display user.name:

> Curly braces : 중괄호
중괄호가 js 템플릿 역할하는듯 함
*/
return (
    <h1>
        {user.name}
    </h1>
);
/*
You can also “escape into JavaScript” from JSX attributes,
but you have to use curly braces instead of quotes.
For example, className="avatar" passes the "avatar" string as the CSS class,
but src={user.imageUrl} reads the JavaScript user.imageUrl variable value,
and then passes that value as the src attribute:

> attribute에도 템플리팅 할수있다는거임 그냥
*/
return (
    <img
        className="avatar"
        src={user.imageUrl}
    />
);
/*
You can put more complex expressions inside the JSX curly braces too, for example, string concatenation:
*/
const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
/*
In the above example, style={{}} is not a special syntax,
but a regular {} object inside the style={ } JSX curly braces.
You can use the style attribute when your styles depend on JavaScript variables.

> style={{}} 이거는 밖에 중괄호는 jsx에서 js로 이스케이핑 하는거고
안에 중괄호는 js Object 를 만드는거임. 그래서 아마 저게 템플릿 돌게되면 style="width:머시기,height:머시기" 이렇게 될듯함

Conditional rendering

In React, there is no special syntax for writing conditions.
Instead, you’ll use the same techniques as you use when writing regular JavaScript code.
For example, you can use an if statement to conditionally include JSX:

> vue의 v-if 같은것 대신 그냥 js코드로 조건부 값넣기를 하는건가봄
*/
let content;
if (isLoggedIn) {
    content = <AdminPanel />;
} else {
    content = <LoginForm />;
}
return (
    <div>
        {content}
    </div>
);
/*
If you prefer more compact code, you can use the conditional ? operator.
Unlike if, it works inside JSX:

> if랑 다르게 삼항연산자 넣을 수 있음 (표현식이라서?)
*/
return (
    <div>
        {isLoggedIn ? (
            <AdminPanel />
        ) : (
            <LoginForm />
        )}
    </div>
);
/*
When you don’t need the else branch, you can also use a shorter logical && syntax:

> && 에 컴포넌트가 오면 그냥 들어가는건가봄 헷갈리는데 이걸 많이 쓰나?
*/
return (
    <div>
        {isLoggedIn && <AdminPanel />}
    </div>
);
/*
All of these approaches also work for conditionally specifying attributes.
If you’re unfamiliar with some of this JavaScript syntax, you can start by always using if...else.

Rendering lists 

You will rely on JavaScript features like for loop and the array map() function to render lists of components.
For example, let’s say you have an array of products:
*/
const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
];
/*
Inside your component, use the map() function to transform an array of products into an array of <li> items:
*/
const listItems = products.map(product =>
    <li key={product.id}>
        {product.title}
    </li>
);

return (
    <ul>{listItems}</ul>
);
/*
Notice how <li> has a key attribute.
For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
Usually, a key should be coming from your data, such as a database ID.
React uses your keys to know what happened if you later insert, delete, or reorder the items.
*/
const products2 = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList() {
    const listItems = products2.map(product =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}
/*
Responding to events 

You can respond to events by declaring event handler functions inside your components:
*/
function MyButton() {
    function handleClick() {
        alert('You clicked me!');
    }

    return (
        <button onClick={handleClick}>
            Click me
        </button>
    );
}
/*
Notice how onClick={handleClick} has no parentheses at the end!
Do not call the event handler function: you only need to pass it down.
React will call your event handler when the user clicks the button.

> handleClick() 을 넣어주면 함수가 전달되는게아니고 저시점에서 실행될거고, return없는 함수라 onClick엔 undefined가 전달되려나 암튼 그러니까 실행하지말고 그냥 함수를 전달

Updating the screen

Often, you’ll want your component to “remember” some information and display it.
For example, maybe you want to count the number of times a button is clicked.
To do this, add state to your component.

First, import useState from React:
*/
import { useState } from 'react';
/*
Now you can declare a state variable inside your component:
*/
function MyButton() {
    const [count, setCount] = useState(0);
}
/*
You’ll get two things from useState:
the current state (count),
and the function that lets you update it (setCount).
You can give them any names, but the convention is to write [something, setSomething].

> useState(값) [값, 함수] 가 전달된다, 이 함수는 이벤트 핸들링하고 함수를 통해 값변경하면되는듯

The first time the button is displayed,
count will be 0 because you passed 0 to useState().
When you want to change state, call setCount() and pass the new value to it.
Clicking this button will increment the counter:
*/
function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
/*
React will call your component function again.
This time, count will be 1. Then it will be 2. And so on.
If you render the same component multiple times, each will get its own state.
Click each button separately:
*/
import { useState } from 'react';

export default function MyApp() {
    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}
/*
Notice how each button “remembers” its own count state and doesn’t affect other buttons.

Using Hooks

Functions starting with use are called Hooks.
useState is a built-in Hook provided by React.
You can find other built-in Hooks in the API reference. (https://react.dev/reference/react)
You can also write your own Hooks by combining the existing ones.

> use로 시작되는건 훅을 부름, useState는 리액트 내장 훅임, 커스텀훅을 기존 훅에 얹어서 추가할 수 있음

Sharing data between components

In the previous example, each MyButton had its own independent count,
and when each button was clicked, only the count for the button clicked changed:

However, often you’ll need components to share data and always update together.
To make both MyButton components display the same count and update together,
you need to move the state from the individual buttons “upwards” to the closest component containing all of them.

In this example, it is MyApp:

Now when you click either button, the count in MyApp will change, which will change both of the counts in MyButton.
Here’s how you can express this in code.

First, move the state up from MyButton into MyApp:
*/
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <MyButton />
            <MyButton />
        </div>
    );
}

function MyButton() {
    // ... we're moving code from here ...
    /*
    > 여기있는 useState 코드를 MyApp으로 이관하는 얘기
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }
    */
}
/*
Then, pass the state down from MyApp to each MyButton, together with the shared click handler.
You can pass information to MyButton using the JSX curly braces, just like you previously did with built-in tags like <img>:
*/
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}
/*
The information you pass down like this is called props.
Now the MyApp component contains the count state and the handleClick event handler,
and passes both of them down as props to each of the buttons.

Finally, change MyButton to read the props you have passed from its parent component:
*/
function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
/*
When you click the button, the onClick handler fires.
Each button’s onClick prop was set to the handleClick function inside MyApp, so the code inside of it runs.
That code calls setCount(count + 1), incrementing the count state variable.
The new count value is passed as a prop to each button, so they all show the new value.
This is called “lifting state up”.
By moving state up, you’ve shared it between components.
*/
import { useState } from 'react';

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update together</h1>
            <MyButton count={count} onClick={handleClick} />
            <MyButton count={count} onClick={handleClick} />
        </div>
    );
}

function MyButton({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}
/*
Next Steps

By now, you know the basics of how to write React code!
Check out the Tutorial to put them into practice and build your first mini-app with React.
*/