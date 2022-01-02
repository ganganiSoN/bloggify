import React from 'react';
import './Detail-Blog-View.scss';

class DetailBlogView extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section id="detailBlogView">

                    {/* blog heading section */}
                    <section className="heading-section">
                        
                        <h1>What is SEO?</h1>

                        <div>

                            <label className="font-weight-500">3 May 2019 </label>
                             |
                            <label className="font-weight-500"> 9 comments </label>
                            |
                            <label className="font-weight-500"> 999 views </label>
                            |
                            <label className="font-weight-500"> Category </label>

                        </div>

                    </section>

                    {/* blog body section */}
                    <section className="body-section">

                        <img src="https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE" width="100%" height="300px" alt="blog-image"></img>

                        <div className="body-detail">

                            What is Lorem Ipsum?

                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                        </div>

                    </section>

                </section>
            </React.Fragment>
        )
    }
}

export default DetailBlogView;
