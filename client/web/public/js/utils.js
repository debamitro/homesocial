window.utils = {
    get_ajax_json : (url, fn) => {
        //
        // Copied from
        // youmightnotneedjquery.com
        //
        var request = new XMLHttpRequest();
        request.open('GET', url, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                // Success!
                var data = JSON.parse(this.response);
                fn(data);
            } else {
                // We reached our target server, but it returned an error

            }
        };

        request.onerror = function() {
            // There was a connection error of some sort
        };

        request.send();
    },

    put_ajax_json : (url, data) => {
        //
        // Copied from
        // youmightnotneedjquery.com
        //
        var request = new XMLHttpRequest();
        request.open('POST', url, true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(data);
    },

    on_ready : (fn) => {
        if (document.readyState != 'loading'){
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }
}
