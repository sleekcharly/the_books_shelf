import React from 'react';
import {Link} from 'react-router-dom';

export const RowGenerator = (list, cols) => {
    const rows = [...Array(Math.ceil(list.length / cols))];
    const articlesRows = rows.map(
        (row, i) => list.slice(i * cols, i * cols + cols)
    );

    return articlesRows;
}

export const GenerateRowsWithBlocks = (rows, type) => (
    rows.map((row, i) => (
        <div className="row" key={i}>
            {
                row.map((article, i) => (
                    <div key={i} className={`${type} columns article_block`}>
                        <Link to={`/article/${article._id}`}>
                            <div className="top">
                                <h3>{article.name}</h3>
                            </div>
                            <div className="content">
                                <div><span>Author</span> {article.author}</div>
                                <div><span>Our rating</span> {article.rating}</div>
                                <div><span>Price</span> {article.price}</div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    ))
)