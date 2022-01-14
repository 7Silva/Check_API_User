'use strict';

import dotenv from 'dotenv';
export default dotenv.config()?.parsed ?? process.env;