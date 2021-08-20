let upperButton = document.getElementById("upper-case");
upperButton.addEventListener("click", function(){
    let lower = document.querySelector("textarea").value;
    document.querySelector("textarea").value = lower.toUpperCase();
});

let lowerButton = document.getElementById("lower-case");
lowerButton.addEventListener("click", function(){
    let upper = document.querySelector("textarea").value;
    document.querySelector("textarea").value = upper.toLowerCase();
});

let properButton = document.getElementById("proper-case");
properButton.addEventListener("click", function(){
    let text = document.querySelector("textarea").value;
    text = text.toLowerCase();
    let spaceFlag = 0;
    let dotFlag = 0;
    let questionFlag = 0;
    let newLineFlag = 0;
    let exclFlag = 0;
    let commaFlag = 0;
    let tabFlag = 0;
    let hyphenFlag = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === " "){
            spaceFlag = 1;
        }
        else if(text[i] === "."){
            dotFlag = 1;
        }
        else if(text[i] === "?"){
            questionFlag = 1;
        }
        else if(text[i] === "!"){
            exclFlag = 1;
        }
        else if(text[i] === "\n"){
            newLineFlag = 1;
        }
        else if(text[i] === ","){
            commaFlag = 1;
        }
        else if(text[i] === "\t"){
            tabFlag = 1;
        }
        else if(text[i] === "-"){
            hyphenFlag = 1;
        }
    }
    let array = [];
    if(spaceFlag === 1){
        array = text.split(" ");
        text = toUpper(array).join(" ");
    }
    if(newLineFlag === 1){
        array = text.split("\n");
        text = toUpper(array). join("\n");
    }
    if(commaFlag === 1){
        array = text.split(",");
        text = toUpper(array). join(",");
    }
    if(tabFlag === 1){
        array = text.split("\t");
        text = toUpper(array). join("\t");
    }
    if(hyphenFlag === 1){
        array = text.split("-");
        text = toUpper(array). join("-");
    }
    if(dotFlag === 1){
        array = text.split(".");
        text = toUpper(array).join(".");
    }
    if(questionFlag === 1){
        array = text.split("?");
        text = toUpper(array).join("?");
    }
    if(exclFlag === 1){
        array = text.split("!");
        text = toUpper(array).join("!");
    }
    document.querySelector("textarea").value = text;
});

let sentenceButton = document.getElementById("sentence-case");
sentenceButton.addEventListener("click", function(){
    let text = document.querySelector("textarea").value;
    text = text.toLowerCase();
    let dotFlag = 0;
    let questionFlag = 0;
    let exclFlag = 0;
    let counter = 0;
    while(counter < text.length){
        if(text[counter] === "."){
            dotFlag = 1;
        }
        else if(text[counter] === "?"){
            questionFlag = 1;
        }
        else if(text[counter] === "!"){
            exclFlag = 1;
        }
        counter++;
    }
    let sentences = [];
    if(dotFlag === 1) {
        sentences = text.split(".");
        sentences = toUpper(sentences);
        text = sentences.join(".");
    }
    if(questionFlag === 1){
        sentences = text.split("?");
        sentences = toUpper(sentences);
        text = sentences.join("?");
    }
    if(exclFlag === 1){
        sentences = text.split("!");
        sentences = toUpper(sentences);
        text = sentences.join("!");
    }
    document.querySelector("textarea").value = text;
});

function toUpper(sentences){
    let regex = new RegExp('([0-9]s)');
    for (let i = 0; i < sentences.length; i++) {
        console.log(sentences[i]);
        let firstLetter = 0;
        while (!isLetter(sentences[i][firstLetter])) {
            firstLetter++;
        }
        let match = sentences[i].match(regex);
        if((sentences[i][firstLetter] != null) && (match === null || sentences[i][firstLetter] !== 's')) {
            if (firstLetter === 0) {
                sentences[i] = sentences[i][firstLetter].toUpperCase() + sentences[i].substr(firstLetter + 1);
            } else {
                sentences[i] = sentences[i].slice(0, firstLetter) + sentences[i][firstLetter].toUpperCase() + sentences[i].substr(firstLetter + 1);
            }
        }
        console.log(sentences[i]);
    }
    return sentences;
}

function isLetter(c){
    if(c == null){
        return true;
    }
    return c.toUpperCase() !== c.toLowerCase();
}

let downloadButton = document.getElementById("save-text-file");
downloadButton.addEventListener("click", function(){
    let text = document.querySelector("textarea").value;
    download("text.txt", text);
});


function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


