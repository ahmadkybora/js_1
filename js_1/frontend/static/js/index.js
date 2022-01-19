import Dashboard from "./views/Dashboard";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
}

const router = async () => {
    const routes = [
        { path: "/", view: Dashboard }, 
        // { path: "/", view: () => console.log("dashboard") }, 
        // { path: "/posts", view: () => console.log("posts") }, 
        // { path: "/settings", view: () => console.log("settings") },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();
    document.querySelector("#app").innerHTML = await view.getHtml();
    console.log(match.route.view());

}

window.addEventListener("popstate", router);
// زمانیکه یک رویداد انجام میشود
// در صفحه
// بوسیله دسترسی به یک اتریبیوت مورد نظر
// میتوان بین لینک ها حرکت کرد
// توجه کنید ما به تگ  آ کاری نداریم
// و بوسیله دتسرسی به صفت میتوانیم یک 
// spa
// بسازیم
//بدون ارسال درخواست به سرور و رفرش شدن صفحه بوسیله کدهای زیر   
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})