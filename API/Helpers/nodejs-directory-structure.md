##### Node.js MVC directory structure example.

```
├── app
│   ├── controllers
│   │   ├── admin
│   │   │   ├── posts.js
│   │   │   └── users.js
│   │   ├── posts.js
│   │   ├── session.js
│   │   └── users.js
│   ├── helpers
│   │   └── posts.js
│   ├── models
│   │   ├── post.js
│   │   └── user.js
│   └── views
│       ├── admin
│       │   └── posts
│       │       ├── edit.jade
│       │       ├── index.jade
│       │       └── new.jade
│       ├── layouts
│       │   └── application.jade
│       └── posts
│           ├── index.jade
│           └── show.jade
├── config
│   ├── application.js
│   ├── express.js
│   ├── middlewares
│   └── routes.js
├── lib
├── node_modules
├── package.json
├── public
│   ├── css
│   │   └── style.css
│   ├── img
│   │   └── logo.png
│   └── js
│       └── main.js
├── server.js
├── spec
│   ├── acceptance
│   │   ├── loginSpec.js
│   │   ├── postsSpec.js
│   │   └── signupSpec.js
│   ├── helper.js
│   └── models
│       ├── postSpec.js
│       └── userSpec.js
└── test
```