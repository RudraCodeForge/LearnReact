import React from 'react';

const Fregement = () =>{
  return (
    <React.Fragment>
      <div className="container my-4">
        <h1 className="text-center mb-4 ">FREGEMENTS</h1>

        <ul className="list-group mb-4">
          <li className="list-group-item active" aria-current="true">
            An active item
          </li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>

        <p className="text-justify">
          React mein jab aap ek component ke andar multiple elements likhte ho,
          toh React expect karta hai ki aap un sabko ek single parent element ke
          andar wrap karo. Agar aap extra div use karte ho, toh woh DOM mein ek
          extra node create karta hai, jo kabhi-kabhi layout ya styling ko
          bigaad sakta hai. Is problem ka solution hai — Fragments.<br/> <br/>Example ka
          liya jasa mana is code ma ek div tag,ek h1 tag, ek ol tag and ek p tag
          ko use kiya hai agar ma ya sara tag bina FREGEMENTS ka use karta to ya
          to error ata ya muja ek aur extra parent div bana padta jiska andar ba
          baki tag ko as child dal data per us ek extra div sa bachna ka liya
          mana FREGEMENTS ka use kiya
        </p>
      </div>
    </React.Fragment>
  )
}
export default Fregement