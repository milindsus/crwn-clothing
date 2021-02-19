import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selectors';

const Directory = ({sections})=> {
   return (
        <div className='directory-menu'>
        {sections.map((elem) => <MenuItem key={elem.id}
                                          imageUrl={elem.imageUrl} 
                                          title={elem.title}
                                          size={elem.size}
                                          linkUrl={elem.linkUrl}    
                                />)
        }
        </div>
    );
}

const mapStateToProps = (state) => ({
    sections: selectDirectorySections(state)
});
export default connect(mapStateToProps)(Directory);