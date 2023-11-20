function loadNews() {
    const url =`https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => newsOperations(data))

}
const newsOperations = news =>{
    console.log(news)
    // console.log(news.data.news_category[0].category_id)
    const linkInfo = document.getElementById('link-info')
  
    const div = document.createElement('div')
    div.innerHTML =`
    <div class="d-flex justify-content-around">
    <a href="" class="text-decoration-none text-black">
    Home
    </a>        
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[0].category_id}')"> 
    ${news.data.news_category[0].category_name}
     </a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[1].category_id}')">${news.data.news_category[1].category_name}</a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[2].category_id}')">${news.data.news_category[2].category_name}</a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[3].category_id}')">${news.data.news_category[3].category_name}</a>
    <a href="#" class="text-decoration-none text-primary" onclick="byId
    ('${news.data.news_category[4].category_id}')">${news.data.news_category[4].category_name}</a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[5].category_id}')">${news.data.news_category[5].category_name}</a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[6].category_id}')">${news.data.news_category[6].category_name}</a>
    <a href="#" class="text-decoration-none text-black" onclick="byId
    ('${news.data.news_category[7].category_id}')">${news.data.news_category[7].category_name}</a>
    </diV>
    `
    linkInfo.appendChild(div)




}
  const byId = category_id =>{
    const url = `https://openapi.programming-hero.com/api/news/category/${category_id}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.data))
}
  const displayDetails=Details=>{
    console.log(Details)
    const dataInfo = document.getElementById('data-info')
    dataInfo.innerHTML=''
    Details.forEach(single => {
        console.log(single)
        const div = document.createElement('div')
        div.innerHTML=`
        <div class="card mb-3 mt-4 bg-light shadow-lg ">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${single.thumbnail_url}" class="img-fluid rounded-start p-2" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${single.title}</h5>
        <p class="card-text">${single.details}</p>
        <div class="d-flex justify-content-around">
        <span><img src ="${single.author.img}" class="" style="width:50px; border-radius:50px">
        <p class="card-text">${single.author.name}</p>
        </span>
        <p><i class="fa-solid fa-eye"></i> ${single.total_view ? single.total_view: "No data found"}</p>
        </div>
        <p>${single.author.published_date}</p>
        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        `
        dataInfo.appendChild(div)
    })
}

loadNews()