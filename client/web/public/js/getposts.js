window.core = {
    get_posts : () => {
        window.utils.get_ajax_json ('http://localhost:3001/posts', (data) => {
            var fullText = '';
            data.posts.forEach ( (item, i) => {
                fullText += '<div class="one-post">' + '@' + item.author
                    + ' - ' + item.time
                    + '<br />' + item.text + '</div>';
            });
            var postsDiv = document.getElementById('posts');
            postsDiv.innerHTML = fullText;
        })
    },

    submit_post : (author, postText) => {
        var formdata = {
            'author':author,
            'time':'12:00am',
            'text':postText
        };
        window.utils.put_ajax_json ('http://localhost:3001/post', JSON.stringify(formdata));
    }
}
