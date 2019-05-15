import React from 'react'
import {Link} from 'react-router-dom'

const List = (props) => {
    const data = props.data
    return(
        <div id='stories' className='column'>
        {
          data.map(story => (
            <div>
                <Link to ={`/users/${user.id}`}>
                    <h3>{title}</h3>
                </Link>
            </div>
            ))
        }
    </div>
    )
}
export default List

