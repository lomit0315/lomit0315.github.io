var posts=["2025/05/30/ABC367/","2025/05/30/[AGC020C] Median Sum/","2025/01/31/大二反思总结/","2025/05/30/杂题乱做1/","2025/01/31/反思--三年后，我决定再试一次/","2025/05/30/杂题乱做2/","2025/05/30/杂题乱做3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };