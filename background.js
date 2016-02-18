if(document.querySelectorAll('div._4-u2').length === 5) {

    var opened = false;
    var checkExist = setInterval(function() {
        console.log(document.querySelectorAll('a._2jq5'));
        if(!opened && document.querySelectorAll('a._2jq5').length) {
            document.querySelectorAll('a._2jq5')[0].click();
            opened = true;
        }
        if(opened && document.querySelectorAll('a._54nc').length) {
            document.querySelectorAll('a._54nc')[1].click();
            clearInterval(checkExist);
        }
    }, 100);
}