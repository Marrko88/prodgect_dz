const http = require('http');
const mailer = require("./nodemailer")
const express = require('express');
const events = require('events');
const util = require('util');
const fs = require('fs');
let file = process.argv[2];
let date_my = new Date();
const app = express();
const hostname = '127.0.0.1';
const port = 3000;



//app.get('/registration', (req, res)=>{
//     res.send(
//
//     );
// })

//app.listen(port, ()=>console.log(`server listening at http://localhost:${port}/registration`));

// function User(){
//
// }
// util.inherits(User, events);
//
// let emitter = new events();
// let event_name = "greeting";
//
// User.prototype.sayHi = function (data){
//     this.emit(event_name, data);
// }
// let user = new User();
//
// user.on(event_name, function (data){
//     console.log(data)
// })
//
// user.sayHi("Mark",'Мне нужна твоя одежда...');

// let emitter = new events();
// let event_name = "greeting";
//
// emitter.on(event_name, ()=>{
//     console.log("Hello all");
// })
//
// emitter.on(event_name, (data)=>{
//     console.log("Hi", data);
// })


// emitter.emit(event_name, "МИр");

//emitter.on(event_name, () => {
    fs.appendFile(file, `${date_my}`, function (success, error) {
        if(success){
            console.log("Запись файла завершена. Содержимое файла: " + file);
            let data = fs.readFileSync(file, "utf8"); //todo первое задание на запись в файл
            function say_hi() { //выводим через функцию
                console.log(data);  // выводим считанные данные
            }

            say_hi();
            // setTimeout(say_hi, 5000);
            // fs.rename(file, 'login.txt', err => {
            //     if (err) throw err; // не удалось переименовать файл
            //     console.log('Файл успешно переименован');
            // })
        }
        else if (error) throw error; // если возникла ошибка
    });
//});

// emitter.on(event_name, () => {
//     fs.rename(file, 'login.txt', err => {
//         if (err) throw err; // не удалось переименовать файл
//         console.log('Файл успешно переименован');
//     })
// });


//emitter.emit(event_name);

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });