const fs = require("fs");
const pages = fs.readFileSync('./.page').toString().split('\n').filter(Boolean);

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
