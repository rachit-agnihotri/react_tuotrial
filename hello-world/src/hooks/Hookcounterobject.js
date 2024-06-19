import React, { useState } from 'react';

function Hookcounterobject() {
    const [name, setName] = useState({ firstname: '', lastname: '', count: 0 });

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input
                        type='text'
                        onChange={e => setName({ ...name, firstname: e.target.value })}
                        value={name.firstname}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type='text'
                        onChange={e => setName({ ...name, lastname: e.target.value })}
                        value={name.lastname}
                    />
                </div>
            </form>
            <h1>
                Welcome {name.firstname} {name.lastname}
                <button onClick={() => setName(prevName => ({
                    ...prevName,
                    count: prevName.count + 1
                }))}>
                    Clicked {name.count} times
                </button>
            </h1>
        </div>
    );
}

export default Hookcounterobject;
