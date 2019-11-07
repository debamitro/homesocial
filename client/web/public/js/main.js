window.utils.on_ready ( () => {
    window.core.get_posts ();

    document.getElementById ('new-post-submit').addEventListener('click', (event) => {
        window.core.submit_post (
            document.getElementById('new-post-author').value,
            document.getElementById('new-post-text').value
        );
        event.preventDefault();
        return false;
    });
});
