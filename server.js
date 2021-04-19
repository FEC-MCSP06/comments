const express = require ('express');
const morgan = require('morgan');
const cors = require('cors');
const{Pool}= require('pg')
const pool = new Pool({
    user:'jeffrydelapena',
    password:'',
    host: 'localhost',
    port: 5432,
    database: 'notYoutube'
}) ;
const app = express();
const PORT = process.env.Port || 3208;

//middleware
app.use(morgan('combined'));
app.use(express.json());
app.use(cors());
//maybe thing for auto redirect to homepage?

//routes

//create
app.post('/api/comments', async(req, res)=>{
    try{
        let newEntry = req.body;
        // console.log(newEntry)
        let result = await pool.query(`INSERT INTO comment(profile_id, post, pinned, thumbsup, thumbsdown, videoKey) VALUES(${newEntry.id}, '${newEntry.post}', ${false}, ${0}, ${0}, ${newEntry.videoKey})`);
        res.status(200).send("congrats you just created a new post")
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})

//read spec
app.get('/api/comments/:id', async(req, res)=>{
    try {
        let {id} = req.params;
        let result = await pool.query(`SELECT * FROM comment WHERE videoKey = ${id}`)
        res.status(200).send(result.rows)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})

//read all
app.get('/api/comments/', async(req, res)=>{
    try {
        
        let result = await pool.query(`SELECT * FROM comment`)
        res.status(200).send(result.rows)
    }catch(err){ 
        console.error(err);
        res.status(500).send(`Error Encountered: ${err}`)
    }
})
//error if no route hits
app.use((req, res)=>{
    res.status(404).send('Page not found or you went somewhere weird? but it tried at least')
})
//listen 
app.listen(PORT, ()=>{console.log('listening on port:' + PORT)})