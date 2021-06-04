const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getPosts(postId) {
  try {
    const response = await fetch(
      'https://portfolioapi.martinbols.tech/wp-json/wp/v2/posts/' +
        postId +
        '?_embed'
    );
    const jsonResults = await response.json();
    const postsResults = jsonResults;
    console.log(postsResults);

    document.title = postsResults.title.rendered + ' - Blog';

    document.querySelector(
      '.card__heading'
    ).innerHTML = `${postsResults.title.rendered}`;

    document.querySelector('.img__container').innerHTML = `
    <img src="${postsResults._embedded['wp:featuredmedia'][0].source_url}">`;

    document.querySelector('.blogContent').innerHTML = `
    ${postsResults.content.rendered}`;
  } catch {
    /* document.querySelector('.alert').innerHTML = showAlertTouser(
      'An error occured (Cannot load content)',
      'error'
    ); */
  } finally {
    /* setTimeout(function () {
      document.querySelector('.alert').innerHTML = '';
    }, 3000); */
  }
}

getPosts(id);
