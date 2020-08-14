window.utils.on_ready ( () => {
    const server_port = 3001
    window.utils.get_ajax_json (`http://${server_host}:${server_port}/profiles`, (data) => {
        let full_text = '';
        data.forEach ( (item) => {
            full_text += '<form method="POST" action="authenticate"><input type="hidden" name="username" value="'
            + item.name + '" /><button type="submit" class="btn btn-s">Login as ' + item.name + '</button></form>';
        });
        document.getElementById('login-as-existing').innerHTML = full_text;
    }) 
})