import React from 'react';
import {connect} from 'react-redux';

import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
     <div className="collections-overview">
        {collections.map(({id, ...otherCollectionProps}) => (
            <div className='preview'>
                <CollectionPreview key={id}  {...otherCollectionProps} />
            </div>
        ))}
    </div>
);



const mapStateToProps = (state) => ({
    collections: selectCollectionsForPreview(state)
});

export default connect(mapStateToProps)(CollectionsOverview);