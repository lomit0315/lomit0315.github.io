var posts=["2024/12/03/About-me/","2024/12/03/hello-world/","2025/01/26/ABC367/","2025/01/26/AGC020C-Median-Sum/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };