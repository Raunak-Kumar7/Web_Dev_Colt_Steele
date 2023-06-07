- To create new project run this in terminal

```
 npx create-react-app /Users/raunakkumar/Desktop/Web_Development/Web_Dev_Colt_Steele/hotstar_clone --template redux
```

[link](https://www.npmjs.com/package/react-slick)
![ter](terminal.png)

- then open the creater folder in vs code

- in terminal cd to the project folder

- give cmd npm start -> chrome will open

- clear app.js and app.cs

- remove file app.test.js, logo.png

- in app.js remove import logo, import counter

- create components folder in src

![Components](components.png)

1. header
2. slider
3. 
4. movies 

- installed extension ES7+ in vs code

- create  header component in the components folder

- shortcut-> in header.js type 'rfce' and press enter


- run ```npm install styled-components``` in a terminal inside vs code to install styling
- this is done to give style inside of js file

- ```import styled from 'styled-components'``` in Header.js


- replace ```<div>header</div>``` with ```<Container>header</Container>```
so that we can style it
and add
- in the end in js file itself Header.js 
```

const Container = styled.div`
    height: 70px;
    background: #090b13;

`
```

- now we create home component for the home page and import in App.js

![home](home.png)


## First creating the header component

![header](header.png)
1. logo image
2. nav menu
3. profile image


- Container -> Nav

- download images and videos and put those folders in the public folder
[Drive link](https://drive.google.com/drive/folders/13SvUkXPh7ZC1FRtp62VKFi572elZyxi8)


- add the logo

- style Nav and Logo

- for the nav menu we have ```<a>``` tags a logo and span tag

- eg add home-icon image and span HOME
- we want entire text on page to be white --> so update in index.css
color:white;

-  the home icon is coming on top of text HOME, i want HOME to be on the right of the icon
- use diplay:flex


- Using Reacts style components we can target the nested tags like a tree for styling
- like img is inside a, a,span is inside NavMenu
```
const NavMenu = styled.div`
    display: flex;
    flex:1; //to push the profile image to right by showing NavMenu is 1-> imp
    margin-left:25px;
    align-items:center;
    a {
        display: flex;
        align-items: center;
        cursor:pointer; //on hovering it becomes hand pointer
        img{
            height:20px;
        }
      }
    
      span {
        font-size:13px;
        letter-spacing:1.42px;
      }

`
```


```
const UserImage = styled.img`
    width:46px;
    height:46px;
    border-radius:50%;
    cursor:pointer;

`
```

- now adding the animation of underline when we hover on the navmenu tabs
- to do that we make the underline as a div block with height = 2px
- lines positon will be relative to its parent i.e. span
- 
```
const NavMenu = styled.div`
    display: flex;
    flex:1;
    margin-left:25px;
    align-items:center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span {
            font-size:13px;
            letter-spacing:1.42px;
    
            position:relative;
    
            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
    
                opacity:0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25,0.46,0.45,0.94)0s;
                trasform: scaleX(0);
                
            }
        }

        
        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }

    }

`
```
- &:after pseudo-element: Styles applied to the pseudo-element after the span element.

- &:hover selector: Styles applied when the parent element is hovered.



opacity: 0;: Sets the initial opacity of the pseudo-element to 0, making it invisible.

transform-origin: left center;: Sets the transformation origin of the pseudo-element to the left center.

transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;: Specifies the transition effect for the pseudo-element, animating all properties over 250 milliseconds using a cubic-bezier timing function.

transform: scaleX(0);: Applies a horizontal scale of 0 to the pseudo-element, making it initially invisible.



In Sass, the & symbol is used as a placeholder for the parent selector. It allows you to reference the parent selector within nested selectors or pseudo-elements/pseudo-classes.

In the given code, &:after and &:hover are examples of using the & placeholder.


span:after selector: Targets the pseudo-element within the span element.

transform: scaleX(1);: Scales the pseudo-element horizontally to 1, making it visible.

opacity: 1;: Sets the opacity of the pseudo-element to 1, making it fully visible.

1. &:after:

- The & refers to the parent selector, which in this case is span.
When using &:after, it is equivalent to span:after, indicating a pseudo-element that comes after the span element.
2. &:hover:

- Similarly, the & refers to the parent selector, which in this case is the main selector where &:hover is defined.
When using &:hover, it is equivalent to the main selector followed by :hover, indicating the styling to be applied when the element is hovered.
- By using the & placeholder, you can dynamically reference the parent selector and generate more specific CSS rules based on the context. This feature is unique to Sass and allows for more concise and flexible CSS authoring.



- Added to git -> check that

## now doing Home.js

- 100vh --> full vertical height of page

```
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    // background-color:blue; //done to see padding
    

`
```

- add background-color to body in index.css

```
background-color: #040714;
```

- styling Home pg
```
const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px);
    // background-color:blue; //done to see padding
    position:relative;

    //Sets the position of the container to relative, which means that any positioned child elements will be positioned relative to this container.


    //&:before is equivalent to Container:before, indicating a pseudo-element that comes before the Container component.
    &:before{
        background: url("/images/home-background.png") center center / cover no-repeat fixed;

        //The background is centered both horizontally and vertically, covers the entire area of the pseudo-element, does not repeat, and remains fixed even when scrolling.


        content: "";
        position: absolute;

        //Positioning properties (top, left, right, bottom) are used to position the pseudo-element to cover the entire area of the container (Container).
        //all 0 means stretched over entire width and height
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index:-1;
        // z-index: -1;: Sets the z-index of the pseudo-element to -1, which positions it behind the content of the container. so that any thing on home page is over the &:before
        }
`
```

## Building ImgSlider

![Components](components.png)
- yellow box

## React Slick --> React Module to Build Sliders

- install react slick

```
npm install react-slick --save
```

- install css for this
```
npm install slick-carousel
```

- import it into the ImgSlider.js
```
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
```

-> just like in every component do 
```
import styled from 'styled-components'
```

----------
```
grid-template-columns: repeat(5,minmax(0,1fr));
```

The CSS property grid-template-columns is used to define the number and size of columns in a CSS grid layout. In the given code, the property is set to repeat(5, minmax(0, 1fr)).

Here's what it does:

repeat(5, minmax(0, 1fr)): Specifies that the grid should have a total of 5 columns, each with a flexible width.

minmax(0, 1fr): Sets the minimum and maximum width of each column. The first argument (0) specifies the minimum width, while the second argument (1fr) specifies the maximum width.

1fr: Represents a fraction unit that distributes the available space equally among the columns. In this case, each column will take up an equal amount of available space, and the grid will be responsive and adjust its layout accordingly.

So, grid-template-columns: repeat(5, minmax(0, 1fr)) creates a grid layout with 5 columns, where each column's width is flexible and adjusts based on the available space. The columns will distribute the available space equally, ensuring they take up an equal amount of space within the grid container.



//complete the comments
---------

# Now doing the 4th part
- movies


----------

# Now doing the detail page component

- to switch between home page and detail page
- we use react router DOM

[Download link](https://www.npmjs.com/package/react-router-dom)


- terminal in vs code
```
npm install react-router-dom
```

- import in App.js
```
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
```

- we use router to switch between different pages 
- Header is common between all the pages so we keep it out of switches
- anything directly inside the router will always visible, and in switch if we get detail we call the ```<Detail/>```



- Syntax:
```
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail" element={<Detail />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>


    </div>
  );
}
```
- Header is in all pages 
- in video the syntax was old
- switch is replaced by Routes
- and Route is implicit closing tag with component link inside it

- Home Page
```
http://localhost:3000/
```

- Detail page
```
http://localhost:3000/detail
```


## Detail page

![detail](detail.png)




## Login Page

![login](login1.png)


## firebase for login authentication

```
npm install firebase
```

```
npm install firebase-tools
```
- create firebase.js in src folder directly

- copy the data from the given file in G drive to this firebase.js


- made some changes in Home.js using firebase and Snapshot(of db --> firebase live db)

- now using react redux to show new images from db

- create new folder movie in features folder and create file inside in movieSlice.js

- in file
```
import { createSlice } from "@reduxjs/toolkit";
```

- redux is made of Actions Reducers and States

- in the app folder in store.js

```
import movieReducer from '../features/movie/movieSlice'
```


- firebase.js is updated
```
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
    authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
    projectId: "disneyplus-clone-a33d5",
    storageBucket: "disneyplus-clone-a33d5.appspot.com",
    messagingSenderId: "37918794208",
    appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
    measurementId: "G-DRVLJKWRWG",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;
```