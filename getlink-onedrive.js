function get_url(){  
var safe_redirect = "https://www.vozshare.com/p/go-link.html?id=";
var input = document.getElementById("input").value;
var output = document.getElementById("output");
var copy = document.getElementById("copy");
var check_input = /(http:|https:)(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
output.setAttribute('type','text')
copy.setAttribute('type','button')
document.getElementById("output").hidden = false;
document.getElementById("copy").hidden = false;
if (check_input.test(input) && input.indexOf("1drv.ms") > 1) {
        var domain = '1drv.ms';
        }
if (check_input.test(input) && input.indexOf('live.com') > 1) {
        var domain = 'live.com';
        }
if (check_input.test(input) && input.indexOf('sharepoint.com') > 1) {
        var domain = 'sharepoint.com';
        }

if (domain == undefined) {
        var input = 'error';
        document.getElementById("output").hidden = true;
        document.getElementById("copy").hidden = true;
        alert('Vui lòng nhập vào một liên kết chia sẻ file từ OneDrive bao gồm cả http:// hoặc https://')
        }

if (input !== 'error') {
        if (domain == '1drv.ms') {
        var _replace_url = input.replace('1drv.ms', '1drv.ws');
        }
        if (domain == 'live.com') {
        var _replace_url = input.replace('embed', 'download');
        }
        if (domain == 'sharepoint.com') {
        var _check_link_input = input.substring(0, input.lastIndexOf("="));
        var _replace_url = _check_link_input.replace("?e", "?e=download")
        }
        }
       
var _encode = window.btoa(_replace_url);
var golink = safe_redirect + _encode;
document.getElementById("output").value = _replace_url;
document.getElementById("input").value = "";
document.getElementById("copy").disabled = false;
document.getElementById("copy").value = "Sao chép Link";
}
