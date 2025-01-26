var posts=["2025/01/26/AGC020C-Median-Sum/","2025/01/26/ABC367/","2024/12/03/About-me/","2024/12/03/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };