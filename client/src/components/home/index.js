// import packages
import React, {Component} from 'react';

// redux stuff
import { connect } from 'react-redux';

//reducer actions
import { getBooks } from '../../store/actions/book_actions';

import { RowGenerator, GenerateRowsWithBlocks } from '../../utils/helpers';


class Home extends Component {

    componentDidMount(){
        this.props.dispatch(getBooks(8,0,'desc'))
    }

    showArticles = (books) => {
        if(books.collection){
            const rowsArray = RowGenerator(books.collection, 2);

            const generatedArticles = GenerateRowsWithBlocks(rowsArray, 'six')

            return generatedArticles
        }
        return null;
    }

    render(){
        console.log(this.props)
        return (
            <div className="container">
                <div className="row articles_container">
                    {this.showArticles(this.props.books)}
                </div>
                <div className="loadmore">
                    Load more
                </div>
            </div>
        )
    }
    
}

function mapStateToProps(state){
    return {
        books: state.books
    }
}

export default connect(mapStateToProps)(Home);