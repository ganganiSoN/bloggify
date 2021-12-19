import React from 'react';
import './Dashboard.scss';

class Dashboard extends React.Component {

    data = [
        {
            id: 1,
            img: 'https://picsum.photos/200/300?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 2,
            img: 'https://picsum.photos/200/300?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 3,
            img: 'https://picsum.photos/200/300?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 4,
            img: 'https://picsum.photos/200/300?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 5,
            img: 'https://picsum.photos/200/300?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        }
    ];

    render() {
        return (
            <React.Fragment>
                <section id="dashboardMainSection">
                    <h1>
                        Blog
                    </h1>
                    {
                        this.data.map((v) => 
                            <div className="container">    
                                <div className="blog-detail">
                                    <img src={v.img} alt="blog"></img>
                                    <div className="blog-text-detail">
                                        <h2><a href={`detail-blog-view/${v.id}`}>{v.question}</a></h2>
                                        <span className="blog-detail-text"> {v.blogText} </span>
                                        <div className="blog-view-detail">
                                            <span> {v.date} </span>
                                            <span>|</span>
                                            <span> {v.comment} comments </span>
                                            <span>|</span>
                                            <span> {v.view} view </span>
                                            <span>|</span>
                                            <span> {v.category} </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default Dashboard;