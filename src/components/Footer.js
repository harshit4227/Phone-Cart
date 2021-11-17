import React,{Component} from 'react';
import './Footer.css';


export default class Services extends Component {
    render() {
        return(
            <>
            <div class="footer">
       <h2>Check us on</h2>
    <a href="/"><i class="fa fa-instagram"></i></a>
    <a href="/"><i class="fa fa-twitter"></i></a>
    <a href="/"><i class="fa fa-facebook"></i></a>
    <a href="/"><i class="fa fa-wikipedia-w"></i></a>
   </div>
            </>
        )
    }
}