const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const logger = require('morgan')
const config = require('./config/db')


// const userRoutes = require('./routes/user')
const tourRoutes = require('./routes/tour')



const app = express();

mongoose.connect(config.DB,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
  }).then(() =>{
    // console.log(con.connections);
    console.log('Database is connected')
  })

app.use(express.static(path.join(__dirname, 'public')));


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'))
app.use(cors())

//USE ROUTES
// app.use('/api/v1/user', userRoutes)
app.use('/api/v1/tours', tourRoutes)



const port = process.env.PORT || 4000;
app.listen(port, function(){

    console.log(
        "http://localhost:" + port
      );
        
        
      
})