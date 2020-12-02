import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import Sections from './directory.data.js';

class Directory extends React.Component {
    constructor () {
        super();
        this.state = {sections : Sections};
        console.log(this.state);
    };

    render () {
       return (
        <div className='directory-menu'>
        {this.state.sections.map((elem) => <MenuItem key={elem.id}
                                                     imageUrl={elem.imageUrl} 
                                                     title={elem.title}
                                                     size={elem.size}    
                                                     />)
        }
        </div>
        );
    }
}

export default Directory;