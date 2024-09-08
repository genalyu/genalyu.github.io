var posts=["2024/09/08/hello-world/","2024/09/08/guideline for markdown/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };