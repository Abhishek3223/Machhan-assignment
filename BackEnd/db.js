const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://abhishek_1212:${process.env.PASSWORD}@cluster0.nhsofb8.mongodb.net/Machan_backend?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery', false);
const conectToMongo = () => {
    try {
        mongoose.connect(mongoURI, (error) => {
            error ? console.log(error) :
                console.log(`connected to mongo succesfully `);
        })
    } catch (error) {
        console.log({ "Failed to connect": error });

    }

}
module.exports = conectToMongo;