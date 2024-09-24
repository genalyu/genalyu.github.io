var posts=["2024/09/08/guideline for markdown/","2024/09/08/微信机器人/","2024/09/08/贺新郎/","2024/09/11/todolist/","2024/09/11/点名软件/","2024/09/11/python爬虫下载图片/","2024/09/24/音乐播放器/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };