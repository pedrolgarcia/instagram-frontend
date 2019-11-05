import React, { Component } from 'react';

import more from '../assets/more.svg';
import like from '../assets/more.svg';
import comment from '../assets/comment.svg';
import send from '../assets/send.svg';

import './Feed.css';

class Feed extends Component {
    render() {
        return (
            <section id="post-list">
                <article>
                    <header>
                        <div className="user-info">
                            <span>Diego Fernandes</span>
                            <span className="place">Rio do Sul</span>
                        </div>

                        <img src={more} alt="Mais" />
                    </header>

                    <img src="http://localhost:3333/files/pinkfloyd.jpg" alt="Pinkfloyd" />

                    <footer>
                        <div className="actions">
                            <img src={like} alt="Like" />
                            <img src={comment} alt="Comentar" />
                            <img src={send} alt="Enviar" />
                        </div>

                        <strong>900 curtidas</strong>

                        <p>
                            Um post muito massa da Omnistack!
                            <span>#react #omnistack #top</span>
                        </p>
                    </footer>
                </article>
            </section>
        );
    }
}

export default Feed;