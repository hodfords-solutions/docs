const fs = require("fs");
const pages = [
    'nestjs-cls-translation',
    'nestjs-logger',
    'nestjs-base-decorator',
    'nestjs-transaction',
    'typeorm-helper',
    'nestjs-oidc',
    'nestjs-storage',
    'nestjs-grpc-helper',
    'nestjs-response',
    'nestjs-swagger-helper',
    'nestjs-mailer',
    'nestjs-exception',
    'nestjs-command',
    'nestjs-seeder',
    'nestjs-api-gateway',
    'nestjs-eslint-config',
    'nestjs-prettier-config',
    'nestjs-testing',
];

function initPage(){
    for(let page of pages){
        let docPath = `./pages/${page}`;
        if (!fs.existsSync(docPath)) {
            fs.mkdirSync(docPath);
            fs.writeFileSync(`${docPath}/index.md`, `---
displayed_sidebar: docs
---`);
        }
    }
}
async function main(){
    initPage();
}


main().then(() => {
  console.log('Build complete!');
});
