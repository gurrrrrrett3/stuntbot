import dotenv from "dotenv"
dotenv.config()

import CoreObject from './core';
import Database from './database';

export const db = new Database()

var Core = new CoreObject({
    token: process.env.TOKEN as string,
    mode: 'selfhost',
})

let bot = Core.bot;
let client = Core.Client;

export default Core;
export { bot, client };

module.exports = Core;
module.exports.default = Core;
module.exports.client = Core.Client;
module.exports.bot = Core.bot;
module.exports.db = db;