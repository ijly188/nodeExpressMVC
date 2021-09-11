import mongoose from 'mongoose';
console.log(`${process.env.API_DB_USER}`)
// console.log(`mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PWD }@nodeexpressmvccluster0.5gfpb.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`)
export const Database = {
    connect: () => {
        mongoose.connect(
            `mongodb+srv://${ process.env.DB_USER }:${ process.env.DB_PWD }@nodeexpressmvccluster0.5gfpb.mongodb.net/${ process.env.DB_NAME }?retryWrites=true&w=majority`
        )
            .then(() => console.log('Database is connected.'))
            .catch(err => console.log(err));
    }
};