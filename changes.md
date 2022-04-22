# Changes
This is where all of the changes I made during the merge will be located. If you have any questions on why I did some of the things I did, please check here first, and then if it is still not here contact me on slack

## Compnents Folder

### Location
Mr. Peck in the last project made a mistake by placing the compnents folder inside of the pages folder, hence, I moved it out. The reason why this is bad is becuase the pages folder creates a page for every component that is in it. This means by placing the components folder in the pages folder, you are create a route for each of the components, which we don't want. For example, the component `Navbar`, if placed in the pages folder would create a route `/compnents/layout/Navbar` and you coudl actually go to that page and look at the Navbar with nothing else there. 

### Components
I have created a multtude of new components: inputs, navbars, footers, etc. But the most important is the ones inside of `/components/layout/with`. These are layout components that will add a navbar and or footer to the page. The one that will be most often used is `WithBoth.jsx` which adds both a navbar and a footer

## Styles
Changes I made to the `styles` folder

### Sass
This is a subjective change, but I assume all of you like Sass more than css. It is easier to use and contains more features such as nesting, loops, functions, variables, mixins, etc. Hence I made all of my files using Sass, I didn't however change any of your styles to Sass. If you want to do that, that would probably be for the best.

### CSS Modules
As you may have noticed, before the end of all Sass file name is a `.module` this is CSS Modules, a feature built into Next by default. CSS Modules works with Sass as well, despite it's name. It is simply a way to avoid selector naming conflicts in diffrent components. If everything had a unqiue name this would be useless, however, sometimes, especially when working in teams, there is naming conflicts in the selectors. The `.module` signifies that this is a CSS Module and can be imported into the javascript for use.

To use this function, you first need to import it using javascript as so `import styles from "../styles/path/to/file.module.scss"`. This creates a styles variable which contains all of the classNames you need to put into thier respective classes. For example:
```js
import styles from "../styles/path/to/file.module.scss";

const Component = () => {
    return <article className={styles.main}>
        <section className={styles.side}>
            <h1 className={styles.title}>Hello World</h1>
        </section>
    </article>
}

export default Component
```

The corisponding css file would look like such:

```scss

.main {
    position: absolute;
    top: 0;
    left: 0;

    .side {
        display: flex;
        justify-content: center;
        align-items: center;

        .title {
            font-weight: bold;
            font-size: 2rem;
        }
    }
}
``` 

Keep in mind, if you want to do multiword selectors it is reccommended you do them in camelCase becuase of the dot notation in javascript

### Utils
I added a utils folder with predefined colors and media queries for common mobile / tablet / desktop viewports. These are my personal colors and I if you want to change them contact me and we can work something out.

## Fixes to Accomidate my styles

### Javascript
I moved the `Layout.jsx` component out of the app and into the places where it was being used: `index.jsx` and `home.jsx`. This was becuase it was causing me issues when trying to intrgrate it with my layouts

### CSS
I didn't change any of your guys' css, but I did make some changes to mine to account for semantic which I had overwritting some of my styles. I am hopeful we won't need to use semantic in the future becuase is causing me more trouble than good. But that is up to you all.

## Recomendations
These are my reccommendations moving forward:
- Join the seperate styles
    - My style and your guys' styles clash so I think it would be best if we combined them.
- A portion of group work solely on backend till it is finshed. 
    - I don't know if some of you are already doing this but I think that the backend will dictate the function of the frontend and hence may be important to finshe first.
    - I can work on the backend if need be but I'd perfer to work on frontend for the time being.
- Better communcation
    - I am horribly guilty of this, but I think I would be best if we told eachother what we are doing so if we have disagreements we can work them out together. Furthemore, taking in someone's opinion should be respectful and nice. I'm sorry I haven't done that so far, please call me out on it if you see be being such way.

## Closing words
If you read through all of this, thank you, and if you didn't no worries either. This document was mostly made for if you got confused to come back to. Thank you for being my teammates and I hope we can have a productive next couple of weeks.

