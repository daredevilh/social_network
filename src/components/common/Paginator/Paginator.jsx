import React, { useState } from 'react';
import styles from './Paginator.module.css';

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChanged, chunkSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }


    let chunkCount = Math.ceil(pagesCount / chunkSize);
    let [chunkNumber, setChunkNumber] = useState(1);
    let leftChunkPageNumber = (chunkNumber - 1) * chunkSize + 1;
    let rightChunkPageNumber = chunkNumber * chunkSize;


    return(
        <div className={styles.paginator}>
            { chunkNumber > 1 && <button className={styles.paginatorButton} onClick={() => { setChunkNumber(chunkNumber - 1) }}>PREV</button> }
                {pages
                    .filter(p => p >= leftChunkPageNumber && p <= rightChunkPageNumber)
                    .map((p) => {
                    return <div className={currentPage === p ? styles.selectedPage : styles.pageNumber}
                             key={p}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}>{p}</div>
                })}
            { chunkCount > chunkNumber && <button className={styles.paginatorButton} onClick={() => { setChunkNumber(chunkNumber + 1) }}>NEXT</button> }
    </div>
    ) 
    
}

export default Paginator;