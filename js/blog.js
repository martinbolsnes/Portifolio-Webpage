const postsUrl =
  'https://portfolioapi.martinbols.tech/wp-json/wp/v2/posts?_embed';

async function getPosts(postsUrl) {
  try {
    const repsonse = await fetch(postsUrl);
    const jsonFromServer = await repsonse.json();
    const postsArray = jsonFromServer;
    console.log(postsArray);

    /* document.querySelector('.loading').classList.add('hide'); */

    for (let i = 0; i < postsArray.length; i++) {
      document.querySelector('.blogSection').innerHTML += `
          <div class="card__container">
              <div class="img__container">
                  <a href="blogDetails.html?id=${postsArray[i].id}">
                  <img src="${postsArray[i]._embedded['wp:featuredmedia'][0].source_url}">
                  </a>
              </div>
                  <h3 class="card__heading">${postsArray[i].title.rendered}</h3>
          </div>`;
    }
  } catch (error) {
    /*  document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    ); */
  } finally {
    /* setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000); */
  }
}

getPosts(postsUrl);
