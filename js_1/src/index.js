// This will listen for the fragment identifier change
// window.addEventListener("hashchange", function() {
//     console.log(location.hash);
//   });
// var contentDiv = document.getElementById("app");
// console.log(contentDiv);
//   window.addEventListener("hashchange", function (){
//     var contentDiv = document.getElementById("app");
//     contentDiv.innerHTML = location.hash;
//   });

// var Router = require("./router");
// console.log(Router);
// const app = document.querySelectorAll('.page');
// console.log(app);
// const Index = () => {
// alert("3");
// }
// export default Index;
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
// console.log(location.href);

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

// کد ریجکس زیر در اصل برای ای دی ها در روتر استفاده میشود
// مانند فریمورک لاراول یا ویو این کد در اصل : را جایگزین آیدی میکند
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const router = async () => {
    const routes = [
        { path: "/", view: "" }, 
        { path: "/posts", view: "" }, 
        { path: "/settings", view: ""}, 
    ];

    const potentialMatches = routes.map(route => {
        return {
            route,
            isMatch: location.pathname === route.path,
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true,
        }
    }
}