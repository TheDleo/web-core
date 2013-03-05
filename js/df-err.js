function alertErr(response) {

    alert(getErrorString(response));
}

function getErrorString(response) {

    var code = null;
    var value = null;

    if (response) {
        value = response.status;
        if (value) {
            code = value;
        }
        value = response.responseText;
        if (value && value != '') {
            try {
                var result = JSON.parse(value);
                if (result) {
                    value = result.error[0].message;
                    if (value && value != '') {
                        return value;
                    }
                    value = result.error[0].code;
                    if (value) {
                        code = value;
                    }
                }
            } catch(e) {

            }
        }
        if (code !== null) {
            return 'Server returned error code ' + code + '.';
        }
    }
    return 'Server returned an unknown error.';
}