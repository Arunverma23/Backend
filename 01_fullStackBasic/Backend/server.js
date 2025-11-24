import express from 'express';

const app = express();

// app.get('/',(req,res) => {
//     res.send('Server is ready');
// });

// get a list of 5 jokes

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            title: 'A joke',
            content: 'This is joke'
        },
         {
            id:2,
            title: 'Another joke',
            content: 'This is another joke'
        },
         {
            id:3,
            title: 'A third joke',
            content: 'This is third joke'
        },
         {
            id:4,
            title: 'A fourth joke',
            content: 'This is fourth joke'
        },
         {
            id:5,
            title: 'A fifth joke',
            content: 'This is fifth joke'
        }
    ];

    res.send(jokes);

})

const port = process.env.PORT || 5000;

app.listen(port, ()=> {
    console.log(`Server at http://localhost:${port}`);
});