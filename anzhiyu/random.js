var posts=["2024/12/03/hello-world/","2024/12/03/About-me/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };