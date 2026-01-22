// database connection file to MongoDB
import mongoose from 'mongoose';
import logger from './logger.js';
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        logger.info(`MongoDB connected: ${conn.connection.host.toString().substring(0, 6)}...mongodb.net`);
    }
    catch (error) {
        const err = error;
        logger.error(`Error: ${err.message}`);
        process.exit(1);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map