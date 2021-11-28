import React, { PureComponent } from 'react'

export class PureComp extends PureComponent {
    /*
    https://al-fin.medium.com/apa-itu-pure-component-pada-react-js-60c8be5f7f90
    Pure Component memberikan pengoptimalan terhadap performa React, dimana component hanya akan melakukan render ulang jika props atau state-nya berubah(Khusus Class)
    */
    render() {
        console.info(`Pure Component render`)
        return (
            <div>
                Pure Component {this.props.username}
            </div>
        )
    }
}

export default PureComp
