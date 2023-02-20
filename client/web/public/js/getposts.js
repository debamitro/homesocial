window.core = {
    get_posts : (url) => {
        window.utils.get_ajax_json (`${url}/posts`, (data) => {
            var fullText = '';
            data.posts.forEach ( (item, i) => {
                const item_time = new Date (item.time * 1000)
                fullText += '<div class="rounded mb1 bg-white"><div class="p0 bg-navy silver">' 
                + '<a class="silver" href="/profile/' + item.author + '">' + '@' + item.author + '</a>'
                    + ' - ' + item_time.toString()
                    + '</div><div class="p1 h3 post-text">' + item.text + '</div></div>';
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
