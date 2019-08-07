'use scrict';

var movies = [{
        id: 1,
        title: 'Harry Potter',
        desc: 'Film o czarodzieju',
        image: 'https://gfx.antyradio.pl/var/antyradio/storage/images/film/duperele/wedlug-daniela-radcliffea-w-przyszlosci-zobaczymy-reboot-harryego-pottera-29197/2116375-1-pol-PL/Wedlug-Daniela-Radcliffe-a-w-przyszlosci-zobaczymy-reboot-Harry-ego-Pottera_article.jpg',
    },
    {
        id: 2,
        title: 'Król Lew',
        desc: 'Film o królu sawanny',
        image: 'https://i.imgflip.com/26t5r7.jpg',
    },
    {
        id: 3,
        title: 'Star Wars',
        desc: 'Film o kosmicznych wojnach',
        image: 'https://images.unsplash.com/photo-1547700055-b61cacebece9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=90',
    },
    {
        id: 4,
        title: 'Indiana Jones',
        desc: 'Film przygodowy',
        image: 'https://1.fwcdn.pl/an/np/1985708/2019/19915_1.7.jpg',
    },
    {
        id: 5,
        title: 'Iron Man',
        desc: 'Film sensacyjny',
        image: 'http://bi.gazeta.pl/im/58/ce/fd/z16633432IH.jpg',
    }
];


var Movie = React.createClass({

    propTypes: {
        movie: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('li', {
                    key: this.props.movie.id
                },
                React.createElement(MovieTitle, {
                    title: this.props.movie.title
                }),
                React.createElement(MovieDescription, {
                    desc: this.props.movie.desc
                }),
                React.createElement(MovieImage, {
                    image: this.props.movie.image
                }))
        );
    }

});

var MovieTitle = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('h2', {}, this.props.title)
        );
    },

});

var MovieDescription = React.createClass({

    propTypes: {
        desc: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('p', {}, this.props.desc)
        );
    },

});

var MovieImage = React.createClass({

    propTypes: {
        image: React.PropTypes.string.isRequired,
    },

    render: function () {
        return (
            React.createElement('img', {
                src: this.props.image,
                style: {
                    width: "270px",
                    height: "auto"
                }
            })
        );
    },

});

var MoviesElements = movies.map(function (movie) {
    return React.createElement(Movie, {
        key: movie.id,
        movie: movie
    });
});

var MoviesList =
    React.createElement('div', {},
        React.createElement('h1', {}, 'Lista moich ulubionych filmów'),
        React.createElement('ul', {}, MoviesElements)
    );

ReactDOM.render(MoviesList, document.getElementById('app'));