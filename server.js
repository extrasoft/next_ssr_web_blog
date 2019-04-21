// Custom server ไว้สำหรับจัดการ url ให้สวยงาม
const express = require('express');
const next = require('next');

//ถ้ามีการส่งค่ามาจะกำหนด ถ้าไม่จะเป็น port default 3000
const port = parseInt(process.env.PORT) || 3000; 

//ต้องการรันโหมดไหน
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev}); // ส่งไปให้ next จัดการ

//จัดการ url
const handle = app.getRequestHandler();

app.prepare().then( () => {
  const server = express();

  server.get("/blog/detail/:id", (req, res) => {
    // return request, response ที่ express รับเข้ามาส่งต่อไปให้ next ทำการ render
    // app.render(request, response, url, query parameter)
    return app.render(req, res, "/blog/detail", { id:req.params.id });
  });

  // จัดการ Url อื่นๆที่เราไม่ได้กำหนด
  server.get('*', (req, res) => {
    // ให้ next่js เป็นตัวจัดการแบบเดิม
    return handle(req, res);
  })

  // เปิด PORT
  server.listen(port, err => {
    if (err) throw err;
    console.log(`Server Ready on Express : Port ${port}`);
  });
})
