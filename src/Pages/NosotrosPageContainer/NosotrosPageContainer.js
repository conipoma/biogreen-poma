import React from 'react';
import '../NosotrosPageContainer/NosotrosPageContainer.css';
import aroma from '../../Assets/image/aromaterapia-2.jpeg';
import biogreen from '../../Assets/image/biogreen.jpeg';
import lavanda from '../../Assets/image/lavanda.jpeg';
import aceite from '../../Assets/image/aceites.png';
import elementos from '../../Assets/image/elementos.png'

export default function NosotrosPageContainer() {
    return (
        <div className="nosPage">
          <h2>Essencial</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint ocasionalecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam vent enimtatem min.</p>
          <div className="container-fluid nosImage">
            <img className="elementos" src={elementos} width="800" alt="elementos"></img>
            {/* <img src={aroma} width="300" alt="aroma"/>
            <img src={biogreen} width="303" alt="biogreen"/>
            <img src={lavanda} width="266" alt="lavanda"/>
            <img src={aceite} width="275" alt="aceite"/> */}
          </div>
        </div>
        
    )
}
