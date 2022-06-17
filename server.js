var express = require("express");
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.text());
app.use(express.static("static"));

const Datastore = require('nedb')

const coll1 = new Datastore({
  filename: 'kolekcja.db',
  autoload: true
});

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

app.get("/", function (req, res) {
  res.send("index.html");
});

// app.get('/connection', function(req,res){
//   doc = {
//     name: req.query.name,
//     v1: req.query.v1,
//     v2: req.query.v2,
//     v3: req.query.v3,
//     v4: req.query.v4,
//     v5: req.query.v5,
//     v6: req.query.v6,
//     color: req.query.color
//   }
//   coll1.insert(doc, function (err, newDoc) {
//     console.log("dodano dokument (obiekt):")
//     console.log(newDoc)
//     console.log("losowe id dokumentu: "+newDoc._id)
//   });
// })

// app.get('/delete', function(req,res){
//     coll1.remove({}, { multi: true }, function (err, numRemoved) {
//        console.log("usunięto wszystkie dokumenty: ",numRemoved)  
//     });
// })

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('moveWasMade', (tab, move, card) => {
//     console.log('Move');
//     let momentTab = []
//     let antiColor = 0

//     coll1.findOne({ name: card }, function (err, doc) {
//       // console.log("----- obiekt pobrany z bazy: ",doc)
//       // console.log("----- formatowanie obiektu js na format JSON: ")
//       // console.log(JSON.stringify(doc, null, 5))
//       momentTab.push(doc.v1)
//       momentTab.push(doc.v2)
//       momentTab.push(doc.v3)
//       momentTab.push(doc.v4)
//       momentTab.push(doc.v5)
//       momentTab.push(doc.v6)
//       switch(doc.color){
//         case "blue":
//           antiColor = 1
//           break;
//         case "green":
//           antiColor = 2
//           break;
//         case "orange":
//           antiColor = 3
//           break;
//         case "red":
//           antiColor = 4
//           break;
//       }

      
    
//     for (let i=0; i<tab.length; i++){
//       for (let j=0; j<tab[i].length; j++){
//         if(tab[i][j] != 0){
//           if(checkPosition(tab, i, j, momentTab, antiColor, 0, false) == true){
//             victory = true
//           }
//           momentTab.forEach((elem)=>{
//             if(elem == "4"){
//               elem = 1
//             }
//             else{
//               elem = `${(parseInt(elem)+1)}`
//             }
//           })
//           if(checkPosition(tab, i, j, momentTab, antiColor, 0, false) == true){
//             victory = true
//           }
//           momentTab.forEach((elem)=>{
//             if(elem == "4"){
//               elem = 1
//             }
//             else{
//               elem = `${(parseInt(elem)+1)}`
//             }
//           })
//           if(checkPosition(tab, i, j, momentTab, antiColor, 0, false) == true){
//             victory = true
//           }
//           momentTab.forEach((elem)=>{
//             if(elem == "4"){
//               elem = 1
//             }
//             else{
//               elem = `${(parseInt(elem)+1)}`
//             }
//           })
//           if(checkPosition(tab, i, j, momentTab, antiColor, 0, false) == true){
//             victory = true
//           }
//         }
//       }
//     }

//     console.log(victory)

//     io.emit('moveReturned', tab, move)

//     if(victory == true){
//       io.emit('victory', doc.name)
//     }
//     });

//   });
// });



app.post('/RESET', (req,res)=>{
  res.end()
})

server.listen(PORT, function () {
  console.log("start serwera na porcie " + PORT);
});
