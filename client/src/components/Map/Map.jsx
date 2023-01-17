import React from "react";

export default function Map() {

    return (

        <>
        <hr/>
          <h1 style={{ textAlign: 'center' }}>Map </h1>
          <hr/>
        {/* eslint-disable-next-line */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.8828930422897!2d76.3064058146157!3d10.026521592833024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080dafbed183bf%3A0x5951f316ba13a37e!2sLuLu%20International%20Shopping%20Malls%20Private%20Limited%20Kochi!5e0!3m2!1sen!2sin!4v1673949854974!5m2!1sen!2sin "
                width="100%"
                height="500"
                style={{border:"0"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">

            </iframe>
        </>

    );
}