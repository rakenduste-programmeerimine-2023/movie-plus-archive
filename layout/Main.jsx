'use client'

import React from 'react';
import Films from '@/comp/Films';
import Search from '@/comp/Search';
import Movie from '@/comp/Movie';

class Main extends React.Component {
    state = {
        show: 'index',
        films: [],
        movie: {},
        loading: true, 
    }

    
    handleEnter = (search, type) => {
        if (search.trim() === "") return;
        this.setState({
            loading: true,
            show: 'search'
        });
        search = encodeURIComponent(search);
        let url = `http://www.omdbapi.com/?apikey=6ee0abd8&s=${search}`;
        if (type !== 'all') {
            url = url + `&type=${type}`;
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    films: data.Search ? data.Search : [], 
                    loading: false
                });
            });
    }

    
    handleReadMore = (id) => {
        this.setState({
            loading: true,
            show: 'movie'
        });
        fetch(`http://www.omdbapi.com/?apikey=6ee0abd8&i=${id}&plot=full`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movie: data.Title ? data : {},
                    loading: false
                });
            });
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=6ee0abd8&s=monster_high')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    films: data.Search ? data.Search : [],
                    loading: false
                });
            });
    }

    render() {
        return (
            <main className="container">
                <Search enterHandler={this.handleEnter} />
                {
                    this.state.loading ? (
                        <div className="loader">Loading...</div>
                    ) : this.state.show === 'movie' ? (
                        <Movie {...this.state.movie} />
                    ) : (
                        <Films
                            films={this.state.films}
                            readMoreHandler={this.handleReadMore}
                        />
                    )
                }
            </main>
        );
    }
}

export default Main;