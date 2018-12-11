import React from "react";
import { connect } from "react-redux";
import { fetchResults } from "../actions/actions";
import TrackDetails from "./TrackDetails";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



const TrackDetail = ({ trackDetail }) => 
<div className="details">
<ul>  
       <li>
            <b>Track price:</b> {trackDetail.trackPrice}
        </li>
        <li>
            <b>Duration: </b>{trackDetail.trackTimeMillis}
        </li>
        <li>
            <b>Release Date: </b>{trackDetail.releaseDate}
        </li>
</ul></div>;

class TrackList extends React.Component {
  
  constructor() {
    super();
    this.state = {
      showDetails: false
    }
  }
  
  componentDidMount() {
    this.props.dispatch(fetchResults());
  }
    handleClick (event, i) {
	this.setState({showDetails: !this.state.showDetails});
    }
 
  
  render() {
   
    const { error, loading, results } = this.props;
    const artistname = '';
    
   // const {navigate} = this.props.navigation;

    if (error) {
      return <div>You damn! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
            
            <div>
            {results.map((d, index) =>
            <div>
                <ul key="{index}">  
                    <p><b>Track name: {d.trackName}</b></p>
                            
                            <li>
                            <b>Artist:</b> {d.artistName}
                            </li>
                            <li>
                            <b>Collection price:</b> {d.collectionPrice}
                            </li>
                            <li>
                            <b>Artwork URL: </b><a href="{d.artworkUrl100}">{d.artworkUrl100}</a>
                            </li>
                            
                </ul>
                            
                            <a onClick={this.handleClick.bind(this, index)} href='#'>Click here for details</a>
                            {this.state.showDetails && <TrackDetail trackDetail={d} />}
            </div>
                            )}
            </div>
           
    );
  }
}
       
      

const mapStateToProps = state => ({
  results: state.results.items,
  loading: state.results.loading,
  error: state.results.error
});

export default connect(mapStateToProps)(TrackList);
//export default ProductList;