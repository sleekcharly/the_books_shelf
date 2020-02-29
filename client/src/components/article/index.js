import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBook, clearBook } from '../../store/actions/book_actions';

const Article = (props) => {

    const article = useSelector( state => state.books );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBook(props.match.params.id));
        return (() => {
            dispatch(clearBook());
        })
    }, [dispatch, props])

    const showArticle = () => {
        if(article.single){
            const art = article.single;
            return <div className="single_article_container">
                <div className="top">
                    <h3>{art.name}</h3>
                    <div><span>Author</span>{art.author}</div>
                    <div><span>Rating</span> {art.rating}</div>
                </div>

                <div className="content">
                    <div 
                        className="article_content"
                        dangerouslySetInnerHTML={{
                            __html: art.content
                        }}
                    ></div>
                </div>

                <div>
                    <i>Reviewed by {art.ownerId.name} {art.ownerId.lastname}</i>
                </div>
            </div>
        }
    }

    return (  
        <div className="container">
            {showArticle()}
            <div>
                {article.single === false ?
                    <div>
                        Sorry, the book requested is not found.
                    </div>
                : null}
            </div>
        </div>
    )
}

export default Article;