import React from 'react'

function Child(props) {
    return (
        <div>
            <button onClick={() => props.way('childname')}>
                <b><i>Greet</i></b>
            </button>
        </div>
    );
}

export default Child
