async function get_folders(container) {
        var user = 'chris102994';
        var url = `https://api.github.com/repos/${user}/${user}.github.io/contents/containers/${container}`;
        const response = await fetch(url);
        const data = await response.json();
        let htmlString = '';
        for (let file of data) {
          if (`${file.type}` == "dir") {
            htmlString += `<a href="${file.name}" class="w3-bar-item w3-button">${file.name}</a>`;
          }
        }
        $('#links').append(htmlString);
};

function load_md(container, file_name) {
    var user = 'chris102994';
    var branch = 'master';
    var url = `https://raw.githubusercontent.com/${user}/${container}/${branch}/${file_name}`
    $.get(url).done(function (data) {
        var converter = new showdown.Converter({parseImgDimensions: true,tables: true,ghCodeBlocks: true});
        $('#markdown').append(converter.makeHtml(data))
    });
};

function load_report(file_name) {
    $.get(file_name).done(function (data) {
        var converter = new showdown.Converter({parseImgDimensions: true,tables: true,ghCodeBlocks: true});
        $('#markdown').append(converter.makeHtml(data))
    });
};