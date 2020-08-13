window.utils.on_ready ( () => {
    const server_port = 3001
    window.core.get_posts (`http://${server_host}:${server_port}`);
    window.setInterval ( () => window.core.get_posts (`http://${server_host}:${server_port}`), 2000);

    document.getElementById ('new-post-submit').addEventListener('click', (event) => {
        window.core.submit_post (
            document.getElementById('new-post-author').value,
            document.getElementById('new-post-text').value,
            `http://${server_host}:${server_port}`
        );

        // Clear out the new post text box
        document.getElementById('new-post-text').value = '';

        // Don't try to submit the form without javascript
        event.preventDefault();
        return false;
    });
});
