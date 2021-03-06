import React, { Fragment, Component } from 'react';

// StarWars = () => {
//     /* 
//      * Constructor
//      */
//     function StarWars(args) {
//       // Context wrapper
//       this.el = (args.el);
      
//       // Audio to play the opening crawl
//       this.audio = this.el.find('audio').get(0);
      
//       // Start the animation
//       this.start = this.el.find('.start');
      
//       // The animation wrapper
//       this.animation = this.el.find('.animation');
      
//       // Remove animation and shows the start screen
//       this.reset();
  
//       // Start the animation on click
//       this.start.bind('click', proxy(function() {
//         this.start.hide();
//         this.audio.play();
//         this.el.append(this.animation);
//       }, this));
      
//       // Reset the animation and shows the start screen
//       (this.audio).bind('ended', proxy(function() {
//         this.audio.currentTime = 0;
//         this.reset();
//       }, this));
//     }
    
//     /*
//      * Resets the animation and shows the start screen.
//      */
//     StarWars.prototype.reset = function() {
//       this.start.show();
//       this.cloned = this.animation.clone(true);
//       this.animation.remove();
//       this.animation = this.cloned;
//     };
  
//     return StarWars;
//   };
  
//   new StarWars({
//     el : '.starwars'
//   });


// -------------------------------------------------------------------



class Main extends Component {
    state = {
    };



  // RENDERS TO MAIN PAGE
    render() {
      return (
        <div>
            <Fragment>

            <iframe src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" allow="autoplay">
            </iframe> 
            {/* <audio controls autoplay>
                <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
                <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
            </audio> */}
            {/* <iframe src="https://github.com/anars/blank-audio/blob/master/250-milliseconds-of-silence.mp3" allow="autoplay" id="audio" ></iframe>
            <audio autoplay loop  id="playAudio">
              <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg" type="audio/ogg" />
               <source src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3" type="audio/mpeg" />
            </audio> */}


            <article className="starwars">
            <div className="animation">
                <section className="intro">
                    A long time ago, in a galaxy far,<br/> far away....
                </section>
                    
                <section className="titles">
                    <div contenteditable="true" spellcheck="false">  
                    <p>
                        The force stirs in anticipation
                        for the arrival of a new Jedi. 
                        Excitement and happiness has engulfed
                        the galaxy. New hope for peace and
                        balance has been restored.
                    </p>

                    <p>
                        It is a time of great change and 
                        preparation.  So the Rebel Alliance
                        has been happily making plans in
                        their hidden bases.  The Princess
                        Jen Star has orchestrated many 
                        successful victories for the Alliance.
                        However there are still many more
                        missions until complete victory.
                    </p>

                    <p>
                        Under a deep viel of secrecy.
                        The rebels have organized a
                        very important meeting and all
                        top ranking officials have 
                        been invited to attend.
                        The hidden base is located at
                        a local watering hole where
                        theives and smugglers have 
                        been known to gather.  The
                        perfect place for a top secret
                        meeting..........
                    </p>
                    <p>
                        {/* The address is: Three Notch'd
                        Brewery 2930 W Broad St, Richmond,
                        VA 23230. 
                        The Date:  Sunday March 3rd from
                        1:00 to 4:00pm. */}
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                    </div>
                </section>
            </div>

            <div>
            {/* <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMA30qH-3s3mBVvWPQqQec2FPU_0IFgYp3nNrzESFr3rsxTQ/viewform" rel="noopener noreferrer" target="_blank">RSVP</a>  */}
            <a href="http://www.lucaskhem.com">REPLAY</a> | <a href="https://www.babylist.com/lucaskhem" rel="noopener noreferrer" target="_blank">REGISTRY</a>
            </div>

            <section className="logo">
                    <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                        width="100%" height="100%" viewBox="0 0 2000 500" enable-background="new 0 0 2000 500">
                        <g>
                <g id="Layer_1">
                    <path class="st0" d="M537.8,324.9H75.2c-35.7,0-64.7-23-64.7-51.3V61.8c0-28.3,29-51.3,64.7-51.3h1674.3c35.7,0,64.7,23,64.7,51.3
                        v211.9c0,28.3-29,51.3-64.7,51.3h-431.8"/>
                    <path class="st1" d="M523.2,383.4h-13.8l-7.1,17.8c-0.3,0.8-0.6,1.6-0.7,2.4c0,0.7,0.5,1,1.6,1v0.5h-7v-0.5c0.8,0,1.7-0.2,2.4-0.7
                        c1-1,1.7-2.2,2.1-3.6l17.1-43.1h0.8l16.8,41.6c0.3,1,0.8,2,1.3,3c0.6,1.6,2.2,2.7,3.9,2.7v0.5h-11v-0.5c1,0,1.5-0.4,1.5-1.2
                        c-0.1-0.9-0.3-1.8-0.7-2.6c-0.1-0.1-0.2-0.3-0.2-0.4c0-0.2-0.1-0.3-0.1-0.3L523.2,383.4z M509.8,382.1h12.7l-6.4-16.1L509.8,382.1
                        z"/>
                    <path class="st1" d="M1338.3,358.6l2.2,5.9l-0.4,0.1c0,0-0.6-0.6-1.8-1.9c-2.4-2.5-5.7-4-9.2-3.9c-2.8-0.1-5.6,0.9-7.7,2.8
                        c-1.8,1.7-2.9,4.1-2.8,6.7c0,1.6,0.4,3.2,1.3,4.5c0.9,1.3,2.7,2.5,5.6,3.6c4.8,1.6,8.1,2.9,9.9,3.7c2,1,3.8,2.4,5.2,4.2
                        c1.7,2.1,2.6,4.8,2.5,7.5c0,1.2-0.1,2.5-0.4,3.6c-0.3,1.2-0.8,2.3-1.4,3.4c-0.7,1.1-1.5,2.1-2.4,2.9c-0.8,0.8-1.8,1.5-2.8,2
                        c-1.5,0.6-3,0.9-4.5,1c-2.1,0.2-3.4,0.4-4.1,0.4h-12.6v-13.6h0.5c0,4.5,1.1,7.7,3.2,9.5s5.3,2.7,9.8,2.7c4,0,7-1,9.1-2.9
                        c2-1.7,3.1-4.2,3.1-6.8c0-1.5-0.3-2.9-1.1-4.1c-0.8-1.2-1.8-2.2-3-3c-2.3-1.3-4.8-2.4-7.4-3.2c-2.6-0.8-5.2-1.9-7.6-3.3
                        c-1.6-1.1-2.8-2.6-3.7-4.3c-1-1.8-1.5-3.8-1.5-5.8c-0.1-3.4,1.3-6.8,3.7-9.2c2.6-2.5,6.2-3.9,9.9-3.7c1.7,0,3.4,0.2,5.1,0.5
                        c1,0.2,2.1,0.4,3.1,0.7C1338.1,358.6,1338.2,358.6,1338.3,358.6z"/>
                    <path class="st1" d="M1383.9,356.4l-2.2,5.7h-0.5c0.1-0.4,0.1-0.9,0.1-1.4c0.1-0.4-0.2-0.8-0.5-0.9c-0.5-0.2-1.1-0.2-1.7-0.2
                        h-12.3v40.3c-0.1,1.1,0.1,2.3,0.4,3.4c0.2,0.5,0.6,0.9,1.1,1.1c0.7,0.2,1.5,0.3,2.2,0.2v0.5h-12.8v-0.5c1.6-0.1,2.6-0.4,3-0.9
                        c0.5-1,0.7-2.1,0.6-3.2v-41h-11.8c-0.8,0-1.6,0-2.3,0.2c-0.4,0.1-0.5,0.5-0.5,1c0,0.4,0.1,0.9,0.3,1.3h-0.5l-2.2-5.7h0.5
                        c0.2,0.6,0.6,1.1,1.1,1.4c0.8,0.2,1.6,0.3,2.4,0.2h31.3c0.9,0,1.8,0,2.7-0.2c0.6-0.2,1.1-0.8,1.2-1.4L1383.9,356.4z"/>
                    <path class="st1" d="M1408.4,357.3c6.6,0,12,2,16.2,6c4.1,3.9,6.4,9.4,6.3,15c0.2,7.2-2.4,14.2-7.3,19.5
                        c-4.9,5.3-11.3,7.9-19.3,7.9c-6.5,0-11.9-2.1-16-6.4c-4.1-4.1-6.3-9.6-6.2-15.4c0.1-4.3,1.1-8.5,3-12.4
                        C1389.3,362.6,1398.5,357,1408.4,357.3L1408.4,357.3z M1408.3,403.3c3.4,0,6.7-0.9,9.6-2.6c3.1-1.7,5.7-4.2,7.4-7.2
                        c1.8-2.8,2.7-6.1,2.7-9.4c0-4.4-1.2-8.7-3.7-12.4c-2.4-3.7-5.6-6.7-9.5-8.8c-3.3-1.9-7-3-10.8-3.2c-4.8,0-9.3,1.9-12.7,5.3
                        c-3.7,3.3-5.8,8.1-5.7,13.1c0,6.6,2.5,12.9,7,17.6C1397.3,400.8,1402.5,403.3,1408.3,403.3L1408.3,403.3z"/>
                    <path class="st1" d="M1436,358.5V358h13.4c3.4,0,5.8,0.1,7.3,0.2c1.6,0.2,3.2,0.7,4.7,1.5c1.5,0.8,2.8,2,3.6,3.4
                        c0.9,1.6,1.3,3.5,1.2,5.3c0,2.4-0.8,4.8-2.2,6.8c-1.6,2.3-3.7,4.2-6.1,5.5l3.3,5.1c0.7,1.3,2.7,4.1,5.8,8.4c3.1,4.3,5.5,7,7.3,7.9
                        c1.5,0.9,3.2,1.4,5,1.4c1.9-0.1,3.8-0.7,5.4-1.8l0.2,0.6c-2.9,2.2-6.4,3.3-10,3.1c-2.5,0.1-5-0.8-7-2.4c-2-1.6-5.4-6-10.2-13.3
                        c0,0-0.1-0.1-0.1-0.1l-4.7-7.3l-4.2,0.1h-3.8v18c-0.1,1.1,0.1,2.1,0.6,3.1c0.4,0.6,1.3,0.9,2.8,0.9v0.5H1436v-0.5
                        c1.5-0.1,2.5-0.4,2.8-1c0.5-1.1,0.7-2.3,0.6-3.5v-37.4c0-1-0.1-2-0.5-3C1438.6,358.9,1437.7,358.5,1436,358.5z M1444.8,359.2v22.1
                        h4.9c3.9,0,6.8-0.9,8.7-2.8c1.9-1.9,2.9-4.5,2.8-7.2c0-3-1-5.9-2.8-8.2c-1.8-2.6-5.1-3.9-9.8-3.9L1444.8,359.2z"/>
                    <path class="st1" d="M1511.1,358h7.1v0.5c-0.8,0-1.5,0.3-2.2,0.6c-0.8,0.6-1.5,1.4-2,2.2l-11.5,17.5v21.6c0,1.7,0.2,2.9,0.7,3.4
                        s1.4,0.8,2.9,0.8v0.5h-12.6v-0.5c2.4,0.1,3.6-0.8,3.6-2.8l-0.1-1.4v-19.9l-11.5-19.1c-1.2-2-2.6-3-4.1-3V358h11.1v0.5
                        c-1,0-1.6,0.4-1.6,1.2c0.1,0.7,0.4,1.3,0.8,1.9l9.5,15.7l10.4-15.8c0.3-0.3,0.5-0.6,0.6-0.9c0.2-0.3,0.3-0.6,0.3-0.9
                        c0-0.7-0.5-1.1-1.4-1.1h-0.2L1511.1,358z"/>
                    <path class="st1" d="M120.8,207.3h89.2v51.5H69.2V73.5h51.6L120.8,207.3z"/>
                    <path class="st1" d="M329.8,72.7h51.6V180c0,21.8-7.7,40.3-23.2,55.6s-34,23.1-55.8,23.1c-21.7,0-40.3-7.7-55.6-23.1
                        s-23.1-34-23.2-55.6V72.7h51.5V180c0,15.1,12.2,27.3,27.3,27.3s27.3-12.2,27.3-27.3c0,0,0,0,0,0L329.8,72.7z"/>
                    <path class="st1" d="M566.3,124.9h-72c-22.6-0.3-41.1,17.8-41.3,40.4c0,0.3,0,0.6,0,0.8c0,22.8,18.5,41.2,41.3,41.2h72v51.5h-72
                        c-25.7,0-47.5-9-65.6-27.1s-27.1-40-27.1-65.6c0-25.6,9-47.4,27.1-65.5s40-27.1,65.6-27.1h72V124.9z"/>
                    <path class="st1" d="M717.3,73.5l70.9,185.4h-59.2l-7-18.3h-71.5l-6.9,18.3h-61.8l73.4-185.4H717.3z M703.7,192.2l-17.5-46.3
                        l-17.5,46.3H703.7z"/>
                    <path class="st1" d="M863.3,124.9c0.4,0.5,20.4,21.4,60,62.5c5.2,7.3,8,16.1,8.1,25.1c0.1,12.1-4.5,23.8-12.9,32.5
                        c-8.7,9.2-19,13.8-31.1,13.8h-83.7v-51.5h69L812.9,145c-5.5-6.7-8.2-15.1-8.2-25.2c-0.2-12.1,4.4-23.8,12.8-32.5
                        c8.6-9.2,19-13.8,31.1-13.8h80.2v51.4H863.3z"/>
                    <path class="st1" d="M1180.7,73.5l-78.9,104.8c2,5.8,5.3,11.1,9.5,15.6c8.7,9,22.1,13.4,40.2,13.4h29.3v51.5h-29.3
                        c-33,0-58.9-9.9-77.8-29.7c-1.9-2-3.7-4.2-5.4-6.4c-2.8-3.5-5.3-7.2-7.6-11.1v47.2h-51.5V73.5h51.5v72.4l53.3-72.4H1180.7z"/>
                    <path class="st1" d="M1309.4,73.5h51.4v185.4h-51.4v-66.9h-55.1v66.9h-51.6V73.5h51.6v66.9h55.1V73.5z"/>
                    <path class="st1" d="M1523.6,73.5v51.4h-82.8v15.5h82.8v51.6h-82.8v15.4h82.8v51.6h-134.3V73.5H1523.6z"/>
                    <path class="st1" d="M1690.4,73.5h64.3v185.4h-51.6v-81.4l-49.9,80.6l-49.8-80.6v81.4H1552V73.5h57.9l43.4,83.8L1690.4,73.5z"/>
                    <path class="st2" d="M694,312.5v25.7h-23.8v67h-25.8v-67h-46.4c0.2,0.3,10.2,10.7,30,31.3c2.6,3.7,4,8.1,4,12.5
                        c0.1,6.1-2.3,11.9-6.5,16.2c-3.9,4.4-9.6,6.9-15.5,6.9h-41.8v-25.8h34.5l-29.9-31.1c-2.8-3.6-4.3-8-4.1-12.6
                        c-0.1-6,2.2-11.9,6.4-16.3c3.9-4.4,9.6-7,15.5-6.9H694z"/>
                    <path class="st2" d="M759.1,312.5l35.4,92.7H765l-3.6-9.1h-35.8l-3.5,9.1h-30.9l36.7-92.7H759.1z M752.3,371.8l-8.8-23.2
                        l-8.8,23.2H752.3z"/>
                    <path class="st2" d="M880.6,347c0,13.6-8,25.9-20.4,31.5c3.5,0.7,7.1,1,10.8,1h7.7v25.8H871c-18.1,0-31.7-4.9-40.8-14.6
                        c-0.6-0.6-1.2-1.3-1.7-2v16.6h-25.8v-92.8h43.8C865.4,312.7,880.6,328.1,880.6,347z M844.2,354.7c3.5,0,6.3-2.8,6.3-6.3
                        c0-3.5-2.8-6.3-6.3-6.3h-15.7v12.7H844.2z"/>
                    <path class="st2" d="M1002.1,312.5h29l-22.6,92.7H980l-4.7-34.5l-8.4,34.5h-25.3l-21.2-92.7H948l7.8,34.2l7.9-34.2h22.8l7.8,34.2
                        L1002.1,312.5z"/>
                    <path class="st2" d="M1098.3,312.5l35.4,92.7h-29.6l-3.5-9.1h-35.8l-3.5,9.1h-30.9l36.7-92.7H1098.3z M1091.5,371.8l-8.8-23.2
                        l-8.8,23.2H1091.5z"/>
                    <path class="st2" d="M1219.7,347c0,13.6-8,25.9-20.4,31.5c3.5,0.7,7.1,1,10.8,1h7.7v25.8h-7.7c-18.1,0-31.7-4.9-40.8-14.6
                        c-0.6-0.6-1.2-1.3-1.7-2v16.6h-25.8v-92.8h43.8C1204.5,312.7,1219.7,328.1,1219.7,347z M1183.3,354.7c3.5,0,6.3-2.8,6.3-6.3
                        c0-3.5-2.8-6.3-6.3-6.3h-15.7v12.7H1183.3z"/>
                    <path class="st2" d="M1254.1,338.2c0.2,0.3,10.2,10.7,30,31.3c2.6,3.7,4,8.1,4,12.5c0.1,6.1-2.3,11.9-6.5,16.2
                        c-3.9,4.4-9.6,6.9-15.6,6.9h-47.6v-25.8h40.2l-29.9-31.1c-2.8-3.6-4.3-8-4.1-12.6c-0.1-6,2.2-11.9,6.4-16.3
                        c3.9-4.4,9.6-7,15.5-6.9h45.3v25.7H1254.1z"/>
                </g>
            </g>
                        </svg>
                    </section> 

            </article>
  </Fragment>

        </div>
      );
    }
  }
  
  export default Main;


  