import React  from 'react';
import{bindActionCreators} from 'redux';
import{connect} from 'react-redux';


 class OrderList extends React.Component {
    

render () {

console.log(orders)
return (
    
        <ul>
                     
                        
                        
        </ul>
)


}

 }


const mapStateToProps = (state) => {

return{
       
        orders:state.orders

}



}

export default connect(mapStateToProps)(OrderList);