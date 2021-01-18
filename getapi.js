// fetch("https://google-search3.p.rapidapi.com/api/v1/images/q=tesla", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "cbda4f9ad8msha1691c62bcfee45p1ac2d1jsn4580b4bd83b1",
// 		"x-rapidapi-host": "google-search3.p.rapidapi.com"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });

const getData = async () => {
    const resp = await fetch("https://api.jikan.moe/v3/search/anime?q=Fate/Zero&page=1");
    // console.log(resp);
    const data = await resp.json();
    console.log(data.results);
}
getData();