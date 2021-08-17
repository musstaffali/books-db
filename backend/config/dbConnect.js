const mongoose = require('mongoose');

const dbConnect = () => {
    //connect DB
mongoose
.connect(
    'mongodb+srv://book:keep@cluster0.zzj3o.mongodb.net/book-keeping-app', 
{
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true,
}
)
.then(()=> console.log('Db Connected'))
.catch(err => console.log(err));
};


module.exports = dbConnect;