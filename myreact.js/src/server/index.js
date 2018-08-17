const express = require('express');
const mysql=require('mysql');
var bodyParser=require('body-parser');
//Connect DB
const db=mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'res'
})
db.connect((err)=>{
	if(err){
		throw err;
	}
	console.log('Mysql connected');
})

const app=express();

app.use(bodyParser.urlencoded({
	extended : true
}));
app.use(bodyParser.json());
//CREATE DB

// app.get('/createdb',(req,res)=>{
// 	let sql='create database res';
// 	db.query(sql,(err,result)=>{
// 		if(err) throw err;
// 		console.log(result);
// 		res.send('database created');
// 	})
// });


//CREATE TABLE

app.get('/createreqtable',(req, res)=>{
	let sql='create table requirement( crm_id int, crm_name varchar(255),request_id varchar(255),requirement_id varchar(255),requirement_type varchar(255),primary key(requirement_id))';
	db.query(sql, (err, result)=>{
		if(err) throw err;
		console.log(result);
		res.send('requiremennt table created');
	})
});

//Insert post1

app.post('/addreq',(req,res)=>{
	
	// let post={
	// 	crm_id:'1234',
	// 	crm_name:'Shivani',
	// 	request_id:"req1",
	// 	requirement_id:"idhggh887",
	// 	requirement_type:"jhghjg"
	// };
	console.log(req.body);
	let sql='insert into requirement set ?';
	let query=db.query(sql,req.body,(err,result)=>{
		if(err) throw err;
		console.log(result);
		res.send('requirements added');
	})

})

//Select posts
app.get('/selectreqs',(req, res)=>{
	let sql='select * from requirement';
	db.query(sql, (err, result)=>{
		if(err) {
			return res.send(err)
		}
		else{
			return res.json({
				data:result
			})
		}
		console.log(result);
		
	})
});


app.listen('3079',()=>{
	console.log("Server started on port 3079");
});