var posts=["2025/01/26/AGC020C-Median-Sum/","2025/01/26/ABC367/","2024/12/03/hello-world/","2025/02/20/杂题乱做1/","2025/01/31/反思 | 三年后，我决定再试一次/","2024/12/03/About-me/","2025/04/01/杂题乱做2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };