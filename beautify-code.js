function isCss(a) {
    if (/\w+\s*?\{[\s\S]+?\}/.test(a) && !/<(style).*?>[\s\S]+?<\/\1>/.test(a)) {
        return true
    }
}

function isJs(a) {
    if ((/function\s*?\w+\s*?\(.*?\)\s*?\{[\s\S]+?\}/.test(a) || /var\s*?\w+\s*?\=/.test(a)) && !/<(script).*?>[\s\S]+?<\/\1>/.test(a)) {
        return true
    }
}

function isHtml(a) {
    if (/<(\w+).*?>[\s\S]+?<\/\1>/.test(a)) {
        return true
    }
}

document.getElementById("textarea").addEventListener("keyup", function() {
    var a = this.value;
    if (isCss(a) && !isJs(a)) {
        a = css_beautify(a)
    } else if (isJs(a)) {
        a = js_beautify(a)
    } else if (isHtml(a)) {
        a = html_beautify(a)
    } else {
        a = html_beautify(a)
    }
    document.getElementById("output").value = a;
})

document.getElementById("copy").addEventListener("click", function() {
    var a = document.getElementById("output");
    a.select();
    try {
        var b = document.execCommand('copy');
    } catch (err) {
        alert('Oops, unable to copy !')
    }
})

document.getElementById("erase").addEventListener("click", function() {
    var a = document.getElementById("textarea");
    var b = document.getElementById("output");
    a.value = "";
    b.value = "";
    a.focus();
})
