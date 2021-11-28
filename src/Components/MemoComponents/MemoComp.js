import React from 'react'

function MemoComp({username}) {
    /**
        Memo Component sama seperti Pure Component, Pure Component untuk Class Component dan Memo Component untuk Function Component.
        https://medium.com/react-id/yuk-kenalan-sama-react-memo-2122dddef615
    */
    console.info(`Memo Component Render`)
    return (
        <div>
            <div>
                <b><i>Memo Component Example :</i></b>
            </div>
            {username}
        </div>
    )
}

export default React.memo(MemoComp)
