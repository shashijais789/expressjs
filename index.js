const Joi = require('joi');
const express = require('express');
const mysql = require('mysql');
const app = express();
app.use(express.json());
const courses = [{id: 1, name: 'Physics'}, {id: 2, name: 'Maths'}];
const port = process.env.port || 8090;


const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'lic'
});

//user: licAdmin, pwd: admin
//user: root, pwd: root
/**
 * Basic CRUD operations like GET. POST, PUT and DELETE
 */
app.get('/', (req, res) => {
    res.send('Hello, in the world of APIs.');
    res.end();
});

app.get('/api/fdi', (req, res) => {
    console.log('Get all feedback.')
    //connection.connect();
    var objs = [];
    connection.query('SELECT * from lic.fdi', function (err, rows, fields) {
      if (err) throw err
      let length = rows.length;
      for (var i = 0;i < length; i++) {
          objs.push({
            id: rows[i].id, 
            policyNo: rows[i].policyNo, 
            firstName: rows[i].firstName,
            lastName: rows[i].lastName,
            isPortalUsed: rows[i].isPortalUsed,
            isOLRKnown: rows[i].isOLRKnown,
            serviceRating: rows[i].serviceRating,
            recommendRating: rows[i].recommendRating,
            description: rows[i].description,
            feedback_date: rows[i].feedback_date
        });
        
      }
      console.log(objs); 
      res.send(JSON.stringify(objs));
    });
});

app.get('/api/fdi/:id', (req, res) => {
    /*
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course requested for the id was not found!');
    res.send(course);
    res.end();
    */
    console.log('Get feedback for id:' + req.param.id);
    var feedback;
    const query = 'SELECT * from lic.fdi where id = ' + parseInt(req.params.id);
    connection.query(query, function (err, rows, fields) {
      if (err) throw err
      feedback = {
        id: rows[0].id, 
        policyNo: rows[0].policyNo, 
        firstName: rows[0].firstName,
        lastName: rows[0].lastName,
        isPortalUsed: rows[0].isPortalUsed,
        isOLRKnown: rows[0].isOLRKnown,
        serviceRating: rows[0].serviceRating,
        recommendRating: rows[0].recommendRating,
        description: rows[0].description,
        feedback_date: rows[0].feedback_date
    };
      console.log(feedback); 
      res.send(JSON.stringify(feedback));
    });
});

app.post('/api/fdi', (req, res) => {
    /*
    const validationResult = validateCourse(req.body);
    if(validationResult.error) return res.status(400).send(validationResult.error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
    */

    console.log(req.body);
    const newFeedback = req.body;
    const query = 'insert into lic.fdi (policyNo, firstName, lastName, isPortalUsed, isOLRKnown, serviceRating,'+
        'recommendRating, description, feedback_date) values ('+
        newFeedback.policyNo +', "'+ 
        newFeedback.firstName +'", "'+ 
        newFeedback.lastName +'",'+
        newFeedback.isPortalUsed + ', '+
        newFeedback.isOLRKnown + ', '+
        newFeedback.serviceRating + ', '+
        newFeedback.recommendRating + ', "' +
        newFeedback.description + '", NOW())';
    connection.query(query, function (err, rows, fields) {
        if (err) throw err
        console.log('New feedback recorded.'); 
      });
    res.end();
});
/*
app.put('/api/fdi/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course requested for the id was not found!');
    const result = validateCourse(req.body);
    if(result.error) return res.status(400).send(result.error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course requested for the id was not found!');
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
};
*/

app.listen(port, () => {console.log(`App started at port number ${port}.`)});
