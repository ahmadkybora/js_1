const express = require("express");
const path = require("path");

const app = express();

// بوسیله متد زیر میتوان دسنرسی به فایلهای جاوااسکریپت را
// فراهم کرد در آدرس مورد نظر
app.use("/main", express.static(path.resolve(__dirname, "public", "main")));
// بوسیله متد زیر دسترسی به فیل اچ تی ام ال که نمایش اصلی از انجا
// آغاز میشود را داشت و ببا اجرای کامند مورد نظر روی پورت مشخصی کار مکیند
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// در این قسمت سرور ما به پورت مشخصی گوش میدهد
app.listen(process.env.PORT || 3001, () => console.log("server is Runnging ..."));