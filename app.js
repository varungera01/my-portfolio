const path = require('path');
const express = require('express');
//const helmet = require('helmet');
//const compression = require('compression');

const app = express();


app.set('view engine' , 'ejs');
app.set('views' , 'views');

//app.use(helmet());
//app.use(compression());
app.use(express.static(path.join(__dirname , 'public')));


app.use('/my-portfolio', (req , res , next) => {
    
      res.render('portfolio' , {
          pageTitle : 'Varun"s Portfolio'
      });
    });



app.listen(process.env.PORT || 3000 , ()=>{
    console.log('CONNECTED TO SERVER');
});