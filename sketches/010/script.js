async function showMovies() {

    // read the data

    let data = await d3.csv('data/06_data_for_mosaic.csv', d3.autoType)

    // append images to the movies, show additional information on hover

    const movieCard = d3.select('#movieCard')

    d3.select('#movies')
        .selectAll('div')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'movie')
        .append('a')
        .attr('href', d => d.imdb_url)
        .attr('target', '_blank')
        .append('img')
        .attr('src', d => `img/${d.img_title}`)
        .attr('alt', d => `${d.title} by ${d.director}`)
        .on('mouseenter', function (event, d) {

            movieCard
                .style('opacity', 1);

            movieCard
                .select('#movieTitle')
                .text(d.title);

            movieCard
                .select('#movieDirector')
                .text(` by ${d.director}`);

            movieCard
                .select('#releaseYear')
                .text(`Released in ${d.release_year}`);

            movieCard
                .select('#historyGrade')
                .text(`History grade: ${d.history}`);

            movieCard
                .select('#entertainmentGrade')
                .text(`Entertainment grade: ${d.entertainment}`);

        }).on('mouseleave', function (event) {

            movieCard
                .style('opacity', 0);

        });

    // reorder data on click

    d3.select('#year').on('click', function () {

        d3.select('#year').classed('selected', true)
        d3.select('#history').classed('selected', false)
        d3.select('#entertainment').classed('selected', false)

        d3.selectAll('.movie')
            .sort((a, b) => d3.descending(a.release_year, b.release_year))
    })

    d3.select('#history').on('click', function () {

        d3.select('#year').classed('selected', false)
        d3.select('#history').classed('selected', true)
        d3.select('#entertainment').classed('selected', false)
        d3.select('#histertainment').classed('selected', false)

        d3.selectAll('.movie')
            .sort((a, b) => d3.descending(a.history_numeric, b.history_numeric))
    })

    d3.select('#entertainment').on('click', function () {

        d3.select('#year').classed('selected', false)
        d3.select('#history').classed('selected', false)
        d3.select('#entertainment').classed('selected', true)
        d3.select('#histertainment').classed('selected', false)

        d3.selectAll('.movie')
            .sort((a, b) => d3.descending(a.entertainment_numeric, b.entertainment_numeric))
    })

    d3.select('#histertainment').on('click', function () {

        d3.select('#year').classed('selected', false)
        d3.select('#history').classed('selected', false)
        d3.select('#entertainment').classed('selected', false)
        d3.select('#histertainment').classed('selected', true)

        d3.selectAll('.movie')
            .sort((a, b) => d3.descending(a.histertainment_numeric, b.histertainment_numeric))
    })

}

showMovies();