import Card from './Card';
import React from 'react';

const Cardlist = ({ robots }) => {

    // if (true) {
    //     throw new Error('haha');
    // }

    return (
        <div>
            {
                robots.map((item) => {
                    return (
                        <Card key={item.id}
                        id={item.id}
                        name={item.name}
                        email={item.email}/>
                    )
                })
            }
        </div>
    );
}

export default Cardlist;