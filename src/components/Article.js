import React from "react";


function Article (props){
    const {title, date, preview} = props;
    const formatedDate = date || "January 1,1970";

       return (
        <article>
            <h3>{title}</h3>
            <small>{formatedDate}</small>
            <p>{preview}</p>
        </article>
    );
}


export default Article