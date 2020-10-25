console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
.then(function(response) {
  return response.json();
}).then(function(json) {
  console.log(json);
});

for (const char of response.json) {
  console.log(char);
}
