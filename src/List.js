import React from "react";

const List = ({people}) => {
    return (
        <React.Fragment>
            {people.map((people) => {
                const { id, name, age, image } = people;
                return (
                    <article className='person' key={id}>
                        <img src={image} alt={name}/>
                        <div>
                            <h4>{name}</h4>
                            <p>{age} years</p>
                        </div>
                    </article>
                ); 
            })}
        </React.Fragment>
    );
};

export default List;