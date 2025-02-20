let StartFunc = async () => {
    let jVarLocalHtmlId = document.getElementById("TemplateForCardId");
    let jVarLocalMainId = document.getElementById("MainId");
    jVarLocalMainId.querySelector(".row").innerHTML = "";

    let jVarLocalFilesArray = await LocalFetchFiles();

    let jVarLocalFilesHtml = jVarLocalFilesArray.map(element => {
        const clone = jVarLocalHtmlId.content.cloneNode(true);
        let jVarLocalCardTitleId = clone.getElementById("CardTitleId");
        jVarLocalCardTitleId.innerHTML = element.name;

        // clone.querySelector("a").href += `?fileName=${element}`;
        clone.querySelector("a").href += `/JsonUi/${element.name}/Menu.html`;

        return clone;
    });

    jVarLocalFilesHtml.forEach(element => {
        jVarLocalMainId.querySelector(".row").appendChild(element);
    });
};

let LocalFetchFiles = async () => {
    let jVarLocalFetchUrl = "/bin/tableNames"
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return data;
};

StartFunc().then();