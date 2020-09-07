import React, { Component } from 'react'
import axios from 'axios';
import NewsCard from '../section/NewsCard';

class News extends Component {
    state = {
        newsCards: [],
        loading: false
    }
    async componentDidMount() {
        this.setState({ loading: true })
        const res = await axios.get('https://roundball-magic.azurewebsites.net/api/news/today');
        console.log(res.data);
        this.setState({ newsCards: res.data, loading: false })
    }
    render() {
        return (
            <section id="news">
                {this.state.newsCards.map((card, i) => (
                    <NewsCard key={i} card={card}> </NewsCard>
                ))}
            </section>
        )
    }
}

export default News;