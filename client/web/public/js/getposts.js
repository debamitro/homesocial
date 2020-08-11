window.core = {
    get_posts : (url) => {
        window.utils.get_ajax_json (`${url}/posts`, (data) => {
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

    submit_post : (author, postText, url) => {
        var formdata = {
            'author':author,
            'time':'12:00am',
            'text':postText
        };
        window.utils.put_ajax_json (`${url}/post`, JSON.stringify(formdata));
    }
}
