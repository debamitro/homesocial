window.utils.on_ready ( () => {
    const server_port = 3001
    window.core.get_posts (`http://${server_host}:${server_port}`);

    document.getElementById ('new-post-submit').addEventListener('click', (event) => {
        window.core.submit_post (
            document.getElementById('new-post-author').value,
            document.getElementById('new-post-text').value,
            `http://${server_host}:${server_port}`
        );
        event.preventDefault();
        return false;
    });
});
