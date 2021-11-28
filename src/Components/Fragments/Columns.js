import React from 'react'

function Columns() {
    return (
        // <React.Fragment> //better than use this
        <> 
            {/* { // Jika menggunakan React.Fragment maka bisa menggunakan key jika tidak tidak bisa
                items.map( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name :</td>
            <td>Muhammad Ali Albair</td>
        </>
        // </React.Fragment>
    )
}

export default Columns
