console.log("Hello");
let months={
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec",
};



const xhr= new XMLHttpRequest();
let html ="";
xhr.onload= function(){
  let a=JSON.parse(this.responseText);
  console.log(a.articles);
  let target=document.getElementsByClassName("card-box");
  for(var i of a.articles){
    if(i.urlToImage!=null){
      var des=i.description;
      if(des!=null){
        if(des.length>130){
          des=des.substr(0,110)+".....";
        }
      }
      var author=i.author;
      if(author==null){
        author="Anonymous";
      }
      var date=i.publishedAt;
      var datess=new Date(date);
      var dates=new Date();
      var lefts=(dates.getHours()-datess.getHours());
      if(lefts<0){
        lefts+=24;
      }
      var Title=i.title;
      if(Title!=null){
        if(Title.length>75){
          Title=Title.substr(0,70)+"...";
        }
      }

      html+=`
      <div class="row">
      <div class="example-2 Card">
        <div class="wrapper" style="background:
        url('${i.urlToImage}');
        background-repeat: no-repeat; background-size: cover;
        background-position: center;">
          <div class="header">
            <div class="date">
              <span class="day fw-bolder fs-7">${lefts} Hours ago</span>
            </div>
          </div>
          <div class="data">
            <div class="content">
              <span class="author text-dark">${author}</span>
              <h4 class="title"><a href="${i.url}" target="_blank">${Title}</a></h4>
              <p class="text">${des}</p>
              <a href="${i.url}" class="button" target="_blank">Read more</a>
            </div>
          </div>
        </div>
      </div>
      </div>`;
    }
    else{
      des=i.description;
      console.log(i.description);
      if(des!=null){
        if(des.length>130){
          des=des.substr(0,110)+".....";
        }
      }
      author=i.author;
      if(author==null){
        author="Anonymous";
      }
      date=i.publishedAt;
      datess=new Date(date);
      dates=new Date();
      lefts=(dates.getHours()-datess.getHours());
      
      if(lefts<0){
        lefts+=24;
      }
       Title=i.title;
       if(Title!=null){
         if(Title.length>75){
           Title=Title.substr(0,70)+"...";
         }
       }
      html+=`
      <div class="row">
      <div class="example-2 Card">
        <div class="wrapper bg-pink1">
          <div class="header">
            <div class="date">
              <span class="day fw-bolder fs-7">${lefts} Hours ago</span>
            </div>
          </div>
          <div class="data">
            <div class="content">
              <span class="author text-dark">${author}</span>
              <h4 class="title"><a href="${i.url}" target="_blank">${i.title}</a></h4>
              <p class="text">${des}</p>
              <a href="${i.url}" class="button" target="_blank">Read more</a>
            </div>
          </div>
        </div>
      </div>
      </div>`;
    }
  }
  target[0].innerHTML=html;

}
xhr.open('GET','https://newsapi.org/v2/top-headlines?country=in&apiKey=bbd905525ebb46308ad8022d6b27b8e2',true);
xhr.send();
