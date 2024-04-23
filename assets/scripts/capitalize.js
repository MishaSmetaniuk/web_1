capitalize_button = document.getElementById('capitalize_btn');
capitalize_button.addEventListener('click', function() {
    let text = document.getElementById('my_text').value;
    document.getElementById('new_text').innerHTML = capitalizeFirstLetterOfEachWord(text);
});

function capitalizeFirstLetterOfEachWord(str) {
    var words = str.split(" ");

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    var capitalizedStr = words.join(" ");

    return capitalizedStr;
}