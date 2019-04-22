import mongoose from 'mongoose';
import constants from './constant';

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)

try {
  mongoose.connect(constants.MONGO_URL, { useNewUrlParser: true });
} catch (error) {
  mongoose.createConnection(constants.MONGO_URL, { useNewUrlParser: true });
}

mongoose.connection
  .once('open', () => console.log('MongoDB Running'))
  .on('error', err => {
    throw err;
  })
