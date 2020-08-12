window.core = {
    get_posts : (url) => {
        window.utils.get_ajax_json (`${url}/posts`, (data) => {
            var fullText = '';
            data.posts.forEach ( (item, i) => {
                const item_time = new Date (item.time * 1000)
                fullText += '<div class="one-post">' + '@' + item.author
                    + ' - ' + item_time.toString()
                    + '<br />' + item.text + '</div>';
            });
            var postsDiv = document.getElementById('posts');
            postsDiv.innerHTML = fullText;
        })
    },

    submit_post : (author, postText, url) => {
        var formdata = {
            'author':author,
            'time':Math.round(Date.now() / 1000),
            'text':postText
        };
        window.utils.put_ajax_json (`${url}/post`, JSON.stringify(formdata));
    }
}
