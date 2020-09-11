import React from 'react';

const HelloStudent = props => {
    return(
        <p>
            Hello
            { props.name },
            Welcome to TECHCareers and its React unit!
            And current year : { props.year }.Best Programing language : { props.unit }.
        </p>
    );
}
export default HelloStudent;