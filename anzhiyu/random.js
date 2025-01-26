var posts=["2025/01/26/ABC367/","2025/01/26/AGC020C-Median-Sum/","2024/12/03/hello-world/","2024/12/03/About-me/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };