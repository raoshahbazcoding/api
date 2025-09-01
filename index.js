const express = require('express');
const app = express();

const users = require('./MOCK_DATA.json');

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/users', (req, res) => {
    const html = `
    <p>
        ${users.map((user , index) => ` <p>${index +1} : ${user.first_name} ${user.last_name}   </p> 
        
            <p> Email: ${user.email} </p>
            <p> Gender: ${user.gender} </p>
            <p> ID: ${user.id} </p>
        
        ` )} 
    </p>
    `

  res.send(html);
}
);
app.get('/api/users', (req, res) => {


  res.send(users);
}
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})


