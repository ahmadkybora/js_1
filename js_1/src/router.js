const Router = () => {
    alert("ok");
    const baseUrl = "file:///C:/js/js_1/";
    switch(location.href) {
        case "file:///C:/js/js_1/index.html":
            alert("ok");
        break;
        case "file:///C:/js/js_1/1":
            require('/src/pages/dashboard');
        break;
    }
}
const display = {
    display: (count === 0 && dis === true) ? 'none' 
    : (count === 1 && dis === false) ? 'block' 
    : ''
  }

export default Router;