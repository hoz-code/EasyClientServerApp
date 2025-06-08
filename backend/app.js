import express from 'express'
const app = express();
const port = 8080 || process.env.PORT

app.use(express.static('/projects/easyclient-serverapp/frontend'))


app.get('/ans', (req, res) => {
    res.send({ "Res": "Ok" })
})


app.listen(port, () => { console.log(`Server is listening by port ${port}`) })