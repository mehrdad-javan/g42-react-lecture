// rsc
import React from 'react';


const Header = () => <h2>Header</h2>;

const Footer = () => <h2>Footer</h2>;

const Content = () => <h4>Content</h4>

const AFMain = () => {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default AFMain;