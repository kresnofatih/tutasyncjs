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

const getData = async (keyword) => {
    // const resp = await fetch("https://api.jikan.moe/v3/anime/11741");
    // const resp = await fetch("https://api.jikan.moe/v3/search/anime?q=Fate&page=1");
    // const resp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${keyword}&page=1`);
    // const resp = await fetch("https://api.jikan.moe/v3/user/kresnofatih/animelist/all");
    const resp = await fetch("https://api.jikan.moe/v3/user/chronoost/animelist/all");
    // console.log(resp);
    const data = await resp.json();
    console.log(data);
}
getData("horimiya");