import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <header id="main-header">
                <nav>
                    <section className="logo-section">
                        
                    </section>
                    <section className="menu-redirection">
                        <a href="#">Home</a>
                        <a href="#">Category</a>
                        <a href="#">Blog</a>
                        <a href="#">Top Difference</a>
                        <a href="#">Interview Question</a>
                        <a href="#">MCQ</a>
                    </section>
                </nav>
            </header>
        );
    }
}

export default Header;