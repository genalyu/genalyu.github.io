var posts=["2024/09/08/guideline for markdown/","2024/09/08/hello-world/","2024/09/08/微信机器人/","2024/09/08/贺新郎/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };