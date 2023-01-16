import React from 'react';

const Card = ({user}) => {
    console.log(user)
    const {name,age,gender,isFav,lang,car} = user
    const styles = { 
        width:'10rem',
        borderRadius:10,
       border:'1px solid red',
       padding:'1rem'

    }
  return (
    <div style={styles}>
     {name && <p>name : {name}</p>}
     {age && <p>age : {age}</p>}
      { gender &&  <p>gender : {gender}</p>}
      { isFav && <p>isFav : {isFav}</p>}
      {lang && <p>lang : {lang}</p>}
      {car && <p>car : {car}</p>}
    </div>
  );
}

export default Card;
