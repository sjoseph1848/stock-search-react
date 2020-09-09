import React, { Component } from 'react'
import axios from 'axios';
import NewsCard from '../section/NewsCard';
import './News.css'
class News extends Component {
    state = {
        newsCards: [],
        loading: false
    }
    async componentDidMount() {
        this.setState({ loading: true })
        const res = await axios.get('https://nottingham-1848-slayer-robin.azurewebsites.net/api/news/business');
        console.log(res.data);
        this.setState({ newsCards: res.data, loading: false })
    }
    render() {
        return (
            <section id="news">
                <div className="news-cards">
                    {this.state.newsCards.map((card, i) => (
                        <NewsCard key={i} card={card}> </NewsCard>
                    ))}
                </div>
            </section>
        )
    }
}

export default News;