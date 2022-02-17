import React from 'react';
import ShopData from './Shop.data';
import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            collections: ShopData 
        }
    }

    render() {
        const {collections}= this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherSectionProps})=>(
                        <CollectionPreview key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;