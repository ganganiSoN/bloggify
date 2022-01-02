import React from 'react';
import './Dashboard.scss';

class Dashboard extends React.Component {

    data = [
        {
            id: 1,
            author: 'Stone John',
            authorImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            img: 'https://picsum.photos/200/150?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 2,
            author: 'Priya Ponnappa',
            authorImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            img: 'https://picsum.photos/200/150?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 3,
            author: 'Wong Mia',
            authorImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            img: 'https://picsum.photos/200/150?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 4,
            author: 'Stanbrige Peter',
            authorImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            img: 'https://picsum.photos/200/150?random=2',
            question: 'What is SEO? An explanation for beginners',
            blogText: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
            date: '3 May 2019',
            comment: '123',
            view: '999',
            category: 'category'
        },
        {
            id: 5,
            author: 'Lee-Walsh Natalie',
            authorImage: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg',
            img: 'https://picsum.photos/200/150?random=2',
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
                                    <img className='blog-image' src={v.img} alt="blog"></img>
                                    <div className="blog-text-detail">
                                        <div className='author-detail'>
                                            <img className='avtar-image' src={v.authorImage} alt="avtar"></img>
                                            <span className='text-overflow-ellipsis arial-font font-weight-500'> {v.author} </span>
                                        </div>
                                        <h2><a href={`detail-blog-view/${v.id}`}>{v.question}</a></h2>
                                        <p className="blog-detail-text arial-font"> {v.blogText} </p>
                                        <div className="blog-view-detail">
                                            <span className="arial-font font-weight-500"> {v.date} </span>
                                            <span className="arial-font font-weight-500">|</span>
                                            <span className="arial-font font-weight-500"> {v.comment} comments </span>
                                            <span>|</span>
                                            <span className="arial-font font-weight-500"> {v.view} view </span>
                                            <span>|</span>
                                            <span className="arial-font font-weight-500"> {v.category} </span>
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