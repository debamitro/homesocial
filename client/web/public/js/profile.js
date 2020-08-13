window.utils.on_ready ( () => {
    const server_port = 3001
    window.utils.get_ajax_json (`http://${server_host}:${server_port}/profile/${person}`, (data) => {
        document.getElementById('profile_description').innerHTML = data.description;
    }) 
})