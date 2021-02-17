async function showMovies() {
  // read the data

  let data = await d3.csv("data/06_data_for_mosaic.csv", d3.autoType);

  // append images to the movies, show additional information on hover

  const movieCard = d3.select(".movie");

  d3.select("#movies")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "movie-container")
    .style("background-image", (d) => `url(img/${d.img_title})`)
    .append("div")
    .attr("class", "movie-card")
    .html(
      (d) =>
        `<div class='movie'>
            <span class='movie-title'>${d.title}</span> 
            <br> by ${d.director} 
            <br> 
            Released in ${d.release_year}
            <br>
            History grade: ${d.history}
            <br>
            Entertainment grade: ${d.entertainment}
            </div>
            <div class='movie-url'>
            <br>
            <p><a href=${d.imdb_url} target="_blank">Read more on IMDB</a></p>
            </div>`
    );

  const buttons = d3.selectAll("#sidebar button");
  let order = "ascending";

  buttons.on("click", function (event) {
    d3.selectAll("#sidebar button")
      .classed("selected", false)
      .select("span")
      .text("");
    d3.select(event.currentTarget).classed("selected", true);

    document.getElementById("movies").scrollTop = 0;

    if (order === "descending") {
      order = "ascending";
      d3.select(event.currentTarget).select("span").text(" 🠕"); // &#129045
    } else {
      order = "descending";
      d3.select(event.currentTarget).select("span").text(" 🠗"); // &#129047
    }

    d3.selectAll(".movie-container").sort((a, b) =>
      d3[order](
        a[d3.select(event.currentTarget).attr("id")],
        b[d3.select(event.currentTarget).attr("id")]
      )
    );
  });
}

// check screen size on load, say sorry if screen size is too small for us to proceed

function sorryNotSorry() {
  if (d3.min([window.innerWidth, window.innerHeight]) < 760) {
    d3.select("main").remove();

    d3.select("article")
      .append("main")
      .append("div")
      .attr("class", "sorrynotsorry")
      .html(
        "<p>I haven't figured out how this thing should work on small screens yet. While I'm working on that, you can check this sketch on your computer or take a look at <a href='https://charted.xyz'>my other stuff</a>.<br><br>Anyway, have a nice day!</p>"
      );

    d3.select("body").style("overflow", "hidden");
  } else {
    showMovies();
  }
}

window.onload = sorryNotSorry();
