import React, { Component } from 'react'
import axios from 'axios';
import NewsCard from '../section/NewsCard';
import './News.css';
import Loading from '../../components/section/Loading';





class News extends Component {
    state = {
        newsCards: [],
        loading: false,
        done: undefined
    }
    async componentDidMount() {
        this.setState({ loading: true })
        const res = await axios.get('https://nottingham-1848-slayer-robin.azurewebsites.net/api/news/business');
        console.log(res.data);
        this.setState({ newsCards: res.data, loading: false, done: true })
    }
    showNews = () => {
        return this.state.newsCards.map((card, i) => (<NewsCard key={i} card={card}></NewsCard>))
    }


    render() {
        return (
            <section id="news">
                <div className="news-cards">
                    {!this.state.done ? (
                        <Loading />
                    ) : (
                            this.showNews()
                        )
                    }
                </div>
            </section>
        )
    }
}

export default News;