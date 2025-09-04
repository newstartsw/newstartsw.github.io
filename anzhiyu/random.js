var posts=["2025/09/04/hello-world/","2025/09/04/hexo-action/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };