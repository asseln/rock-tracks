/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {StackNavgator} from "react-navigation";

import TrackList from "./TrackList";
import TrackDetails from "./TrackDetails";

export const Navigator = StackNavigator({
    TrackList: {screen: TrackList},
    TrackDetails: {screen: TrackDetails},
}, {initialRouteName: 'TrackList',})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default Nav;