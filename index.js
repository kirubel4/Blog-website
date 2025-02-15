import express from "express"
import path from "path"
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended: true })); 

app.get("/", (req,res)=>{
    res.render("index.ejs", { posts })
})
app.get("/about", (req,res)=>{
    res.render("about.ejs")
})
app.get("/contact", (req,res)=>{
    res.render("contact.ejs")
})

app.get("/compose", (req,res)=>{
    res.render("compose.ejs")
})


const posts = [
    {
        id: '1',
        title: 'The Power of JavaScript',
        content: `
            JavaScript is one of the most versatile programming languages today, 
            powering a majority of the web. It allows developers to create dynamic 
            and interactive web applications that run in the browser. With its 
            ability to manipulate the Document Object Model (DOM), JavaScript 
            enhances user interfaces through features like form validation, 
            animations, and asynchronous requests.

            The rise of frameworks like React, Angular, and Vue.js has further 
            solidified JavaScript's place in modern web development. These frameworks 
            enable developers to build complex applications more efficiently. 
            Additionally, with the advent of Node.js, JavaScript has expanded 
            beyond the browser, allowing developers to use it for server-side 
            programming as well, making it a truly full-stack language.
        `
    },
    {
        id: '2',
        title: 'Introduction to Node.js',
        content: `
            Node.js is a powerful runtime that allows developers to build scalable 
            network applications using JavaScript on the server side. It utilizes 
            an event-driven, non-blocking I/O model that makes it lightweight and 
            efficient, perfect for handling multiple connections simultaneously.

            In this post, we will explore the fundamental concepts of Node.js, 
            including modules, the npm (Node Package Manager), and how to create 
            a simple HTTP server. We’ll also delve into middleware and routing 
            using Express.js, one of the most popular frameworks built on top of Node.js. 
            By the end of this article, you will have a solid foundation to start 
            building your own server-side applications.
        `
    },
    {
        id: '3',
        title: 'EJS: Templating Made Easy',
        content: `
            EJS (Embedded JavaScript) is a simple templating engine that enables 
            you to generate HTML markup with plain JavaScript. It allows you to 
            embed JavaScript code directly into HTML, making it easier to create 
            dynamic web pages.

            In this post, we will cover how to set up EJS in your Node.js application, 
            how to create reusable templates, and how to pass data from your server 
            to your views. We will also explore some common use cases for EJS, 
            such as rendering lists of items and using conditional statements to 
            display content based on certain conditions. By the end of this article, 
            you will be able to leverage EJS to create dynamic and maintainable web pages.
        `
    },
    {
        id: '4',
        title: 'How to Build REST APIs with Express.js',
        content: `
            Express.js is a minimal and flexible Node.js web application framework 
            that provides a robust set of features for building web and mobile applications. 
            It makes it easy to create RESTful APIs with route handling, middleware, 
            and more.

            In this post, we will explore how to set up a REST API using Express.js. 
            We will cover the basics of routing, how to handle different HTTP methods 
            (GET, POST, PUT, DELETE), and how to return JSON responses. We will also discuss 
            best practices for structuring your API and handling errors effectively. 
            By the end of this tutorial, you will have the knowledge to create your own 
            RESTful services using Express.js.
        `
    },
    {
        id: '5',
        title: 'The Benefits of Full-Stack Development',
        content: `
            Full-stack development refers to the ability to work on both the frontend 
            and backend of a web application. This skill set allows developers to 
            create complete solutions, from designing the user interface to managing 
            databases and server-side logic.

            In this article, we will discuss the key benefits of being a full-stack 
            developer. This includes enhanced job opportunities, a better understanding 
            of the entire development process, and the ability to build more cohesive 
            applications. We will also touch on the tools and technologies that full-stack 
            developers should be familiar with, such as HTML, CSS, JavaScript, Node.js, 
            and various databases. By the end of this post, you will appreciate the value 
            of full-stack development in today's job market.
        `
    },
    {
        id: '6',
        title: 'Understanding Asynchronous JavaScript',
        content: `
            Asynchronous programming is a crucial aspect of JavaScript that allows 
            developers to execute code without blocking the main thread. This is particularly 
            important in web applications, where responsiveness is key.

            In this post, we will explore the concepts of callbacks, promises, and async/await. 
            We will discuss how each method handles asynchronous operations and the advantages 
            and disadvantages of each. By the end of this article, you will have a clearer 
            understanding of how to manage asynchronous tasks in your JavaScript applications.
        `
    },
    {
        id: '7',
        title: 'Getting Started with React',
        content: `
            React is a popular JavaScript library for building user interfaces, particularly 
            single-page applications. Its component-based architecture allows developers to 
            create reusable UI components, making development more efficient.

            In this tutorial, we will cover the basics of React, including components, 
            props, and state management. We will also build a simple application to 
            demonstrate how React works in practice. By the end of this post, you will 
            have a solid foundation to start building your own React applications.
        `
    },
    {
        id: '8',
        title: 'CSS Flexbox: A Comprehensive Guide',
        content: `
            CSS Flexbox is a powerful layout module that enables developers to design 
            responsive web pages with ease. It provides a more efficient way to align 
            and distribute space among items in a container.

            In this guide, we will explore the key concepts of Flexbox, including 
            the flex container and flex items. We’ll look at properties like 
            flex-direction, justify-content, and align-items, and provide examples 
            to illustrate how to use Flexbox effectively. By the end of this article, 
            you will be equipped to create flexible and responsive layouts.
        `
    },
    {
        id: '9',
        title: 'Introduction to MongoDB',
        content: `
            MongoDB is a NoSQL database that uses a flexible schema, allowing developers 
            to store data in a JSON-like format. This flexibility makes it a popular 
            choice for modern applications that require scalability and performance.

            In this post, we will introduce the core concepts of MongoDB, including 
            collections, documents, and CRUD operations. We will also demonstrate 
            how to connect a Node.js application to a MongoDB database using Mongoose. 
            By the end of this tutorial, you will have a basic understanding of how 
            to work with MongoDB in your applications.
        `
    },
    {
        id: '10',
        title: 'Exploring the World of APIs',
        content: `
            APIs (Application Programming Interfaces) are essential for modern web and 
            mobile applications. They allow different software systems to communicate 
            with each other, enabling data exchange and functionality integration.

            In this article, we will explore the different types of APIs, including 
            REST, SOAP, and GraphQL. We will discuss how to use APIs in your applications 
            and best practices for API design and documentation. By the end of this post, 
            you will understand the importance of APIs and how they can enhance your 
            applications.
        `
    },
    {
        id: '11',
        title: 'Version Control with Git',
        content: `
            Git is a widely-used version control system that allows developers to track 
            changes in their codebase and collaborate with others. Understanding Git is 
            essential for any developer working on team projects.

            In this post, we will cover the fundamental concepts of Git, including 
            repositories, branches, commits, and merging. We will also provide practical 
            examples of common Git commands and workflows. By the end of this article, 
            you will be comfortable using Git to manage your projects efficiently.
        `
    },
    {
        id: '12',
        title: 'The Future of Web Development',
        content: `
            The field of web development is constantly evolving, with new technologies 
            and frameworks emerging regularly. Staying updated with the latest trends is 
            crucial for developers looking to maintain a competitive edge.

            In this article, we will discuss the future of web development, including the 
            rise of serverless architecture, progressive web apps (PWAs), and the increasing 
            importance of user experience (UX) design. We will also explore emerging 
            technologies like AI and machine learning and their potential impact on web 
            development. By the end of this post, you will have insights into the 
            direction of the industry and how to prepare for it.
        `
    },
    {
        id: '13',
        title: 'Creating Responsive Web Designs',
        content: `
            Responsive web design is an approach that allows web pages to render well 
            on a variety of devices and window or screen sizes. This is essential in today’s 
            mobile-first world.

            In this tutorial, we will explore the principles of responsive design, 
            including fluid grids, flexible images, and media queries. We will provide 
            practical examples and tips for creating responsive layouts that enhance 
            the user experience across devices. By the end of this article, you will 
            be equipped with the knowledge to implement responsive design in your projects.
        `
    },
    {
        id: '14',
        title: 'Mastering CSS Grid Layout',
        content: `
            CSS Grid Layout is a two-dimensional layout system that provides a more 
            powerful way to create complex web layouts compared to traditional methods.

            In this guide, we will delve into the key features of CSS Grid, including 
            grid containers, grid items, and various properties that control layout. 
            We will provide examples to illustrate how to create responsive and 
            intricate designs using CSS Grid. By the end of this post, you will have 
            a solid grasp of how to leverage CSS Grid in your web projects.
        `
    },
    {
        id: '15',
        title: 'Getting Started with TypeScript',
        content: `
            TypeScript is a superset of JavaScript that adds static typing to the language. 
            It helps developers catch errors early in the development process and improves 
            code quality.

            In this post, we will introduce TypeScript, highlighting its key features such as 
            interfaces, type annotations, and classes. We will also demonstrate how to set 
            up a TypeScript project and convert existing JavaScript code to TypeScript. 
            By the end of this article, you will be ready to start using TypeScript in your 
            applications and enjoy its benefits for large-scale projects.
        `
    },
];
app.post("/compose", (req, res) => {
    const post = {
        id: (posts.length + 1).toString(),
        title: req.body.title,
        content: req.body.content
    };
    posts.unshift(post);
    res.render("index.ejs",{posts})
});


  app.get("/posts/:id", (req, res) => {
    const postId = req.params.id;
    const post = posts.find(p => p.id === postId);
    
    if (post) {
      res.render('post.ejs', { post });
    } else {
      res.status(404).send('Post not found');
    }
  });

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})