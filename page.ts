const fs = require("fs");
export const pages = fs.readFileSync('./.page').toString().split('\n').filter(Boolean);
