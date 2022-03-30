function get_url(){  
var input = document.getElementById("input").value;
var output = document.getElementById("output");
var copy = document.getElementById("copy");
var check_input = /(http:|https:)(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
output.setAttribute('type','text')
copy.setAttribute('type','button')
document['getElementById']('output')['hidden'] = false;
document['getElementById']('copy')['hidden'] = false;
if (!check_input['test'](input) | document['location']['hostname'] !== 'www.truongblogger.top') {
        var input = 'error';
        document['getElementById']('output')['hidden'] = true;
        document['getElementById']('copy')['hidden'] = true;
        alert('Vui lòng nhập vào một liên kết chia sẻ file từ Dropbox bao gồm cả http:// hoặc https://')
    };
    if (input != 'error' & input['indexOf']('www.dropbox.com') == -1) {
        var input = 'error';
        document['getElementById']('output')['hidden'] = true;
        document['getElementById']('copy')['hidden'] = true;
        alert('Link bạn vừa nhập không phải link chia sẻ file từ Dropbox. Vui lòng nhập vào một liên kết chia sẻ file từ Dropbox bao gồm cả http:// hoặc https://')
    };
    if (input !== 'error') {
        if (input['indexOf']('?') > 1) {
            var _check_link_input = input['substring'](0, input['lastIndexOf']('?'));
            var _replace_url = _check_link_input['replace']('https://www.dropbox.com/s/', 'https://dl.dropboxusercontent.com/s/');
        } else {
            var _replace_url = input['replace']('https://www.dropbox.com/s/', 'https://dl.dropboxusercontent.com/s/');
        };
    document.getElementById("output").value = _replace_url;
    document.getElementById("input").value = "";
  }
}