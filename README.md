
# Dragon's Challenge

![Preview-Screens](https://github.com/luccas-specht/dragons-challenge/blob/main/images/frame-page-one.png)
![Preview-Screens](https://github.com/luccas-specht/dragons-challenge/blob/main/images/frame-page-second.png)

If you want to take a look on all screens of the website, they're [here](https://drive.google.com/drive/folders/1S8fNuvo6WKrvTXs2iCd9y0lFNx3ngDKo?usp=sharing).

## About this project

The idea of the website is:

_"A simple dragon CRUD system using mobile first development"._

Mobile first is a development with focus on creates websites first on mobile devices and then adapts them for desktop, this project has design to desktop too, about its design pattern it's using [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) to development scalable and readable screens and components.

## Some observations about this website

- There aren't functionalities of login and register by server side, the buttons and the forms in the login screen and register screen are only for UI matters.
- To access the site you must be authenticated, otherwise you'll be redirect to the login page. The site stores the user token in the cookie to knows if your session is  authenticated or it isn't.
- The API doesn't response images to dragons or users, for that, all images are stored on client side and they're displayed randomly.  

## Functionalities

- Sign in with your credentials
   - You must use this default user, and only it, to access the website: 
      - Nickname: Luccas Specht
      - Password: Senh4S#c8t4* 
- List all dragons created
- remove a dragon
- create a dragon
- Update dragon informations
- Get informations about a specific dragon like name, type, description and picture  
- Try access a page that doesn't exists you'll be redirect to the page not found screen

## Production review

If you want to take a look how it works on production, it's [here](https://dragons-challenge.vercel.app).

## Architecture

![image](https://user-images.githubusercontent.com/40741571/153007139-1ccd1baa-300c-4ada-82cb-acf62696ce29.png)


## Getting Started

### Prerequisites
To run this project in the development mode, you'll need to have a basic environment to run a NextJs project, that can be found [here](https://nextjs.org/docs/getting-started).

### Installing
**Cloning the Repository:**
```
$ git clone https://github.com/luccas-specht/dragons-challenge
```

**Open the project:**
```
$ cd dragons-challenge
```

**Installing dependencies:**
```
$ yarn
```

_or_

```
$ npm i
```

### Running
**Development mode:**

```
$ yarn dev
```

_or_

```
$ npm dev
```

**Production mode:**

_or_

```
$ yarn build && yarn start
```

_or_

```
$ npm build && npm start
```

## Built with

- [Axios](https://github.com/axios/axios) - HTTP client
- [Babel](https://babeljs.io/) - JavaScript compiler
- [BEM](http://getbem.com/introduction/) - Standard for CSS
- [Classnames](https://github.com/JedWatson/classnames) - conditionally styles class names
- [ESlint](https://eslint.org/) - Linter
- [Moment](https://momentjs.com) - Date Formatter
- [NextJs](https://nextjs.org) - A Framework for ReactJs 
- [Nookies](https://github.com/maticzav/nookies) - A collection of cookie helpers for NextJs
- [Prettier](https://prettier.io/) - Code formatter
- [React Icons](https://react-icons.github.io/react-icons/) - Icons for ReactJs
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction) - Notification for ReactJs
- [SCSS](https://sass-lang.com/documentation/syntax) - CSS preprocessor
- [TypeScript](https://www.typescriptlang.org) - JavaScript with syntax for types
- [Unform](https://unform.dev) - A performance-focused API for creating forms
- [Yup](https://www.npmjs.com/package/yup) - Schema validation


## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Send me a email luccasspecht70@gmail.com.

Connect with me at [LinkedIn](https://www.linkedin.com/in/luccas-specht/).

Thank you!

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/luccas-specht/dragons-challenge/blob/develop/LICENSE) file for details.
