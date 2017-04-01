import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as itemsActions from '../actions/itemsActions';

class ItemList extends Component {
    componentWillMount() {
        this.props.actions.loadItems();
    }

    render() {
        console.log('props: ');
        console.log(this.props);

        return (
            <ul>
                {this.props.items.map((item) => (
                    <li key={item.id}>
                        {item.label}
                    </li>
                ))}
            </ul>
        );
    }
}

// ItemList.propTypes = {
//     fetchData: PropTypes.func.isRequired
// };

const mapStateToProps = (state) => {
    console.log('in mapstatetoprops');
    console.log(state);
    return {
        items: state.itemsReducer.items
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(itemsActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
