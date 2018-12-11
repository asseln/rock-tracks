import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const DEFAULT_QUERY = '';
//import { connect } from "react-redux";
//import { fetchProducts } from "./productActions";


import connect from 'react-redux-fetch';


class TrackDetails extends React.Component {
  
  
 componentDidMount () {
    const {params} = this.props;
  
  }
 
 render() {
       
        return (
               <div>
            {results.map(d => 
                <ul>  
                    <p><b>Track name: {d.trackName}</b></p>
                            
                            <li>
                            <b>Artist:</b> {d.artistName}
                            </li>
                            <li>
                            <b>Collection price:</b> {d.collectionPrice}
                            </li>
                            <li>
                               <b>Track price:</b> {d.trackPrice}
                            </li>
                            <li>
                            <b>Artwork URL: </b><a href="{d.artworkUrl100}">{d.artworkUrl100}</a>
                            </li>
                            
                </ul>
                )}
            </div>
               
    );}
}

 
export default TrackDetails;