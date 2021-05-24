import  dotEnv  from 'dotenv';

const namespace = 'CONFIGS';

dotEnv.config();

const port = process.env.PORT || 5000;
const hostname = process.env.HOST || 'localhost';

const config = {
    PORT : port,
    HOSTNAME : hostname
}

export default config