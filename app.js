const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.port || 3000;
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

// router.get('/sitemap',function(req,res){
//   res.sendFile(path.join(__dirname+'/sitemap.html'));
// });

//add the router
app.use('/', router);
app.listen(port, ()=>{
    console.log(`Running at Port no : ${port}`);

});
