var lang = {
    "html": "95%",
    "css": "85%",
    "javascript": "80%",
    "php": "80%",
    "angulars": "60%",
    "cyber": "45%",
    "react": "65%",
    "vue": "75%",
    "firebase": "50%",
    "bd": "60%",
    "drupal": "50%",
    "android": "80%",
    "csharp": "75%",
    "java": "80%",
    "wordpress": "80%"
};

var multiply = 4;

$.each(lang, function(language, pourcent) {

    var delay = 0;

    setTimeout(function() {
        $('#' + language + '-pourcent').html(pourcent);
    }, delay * multiply);

    multiply++;

});

function redirect(url) {
    console.log("object");
    window.open(url, '_blank');
}