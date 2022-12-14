import React from "react";
import Axios from 'axios';
import '../css/Homepage.css';
import '../css/responsive.css';
import slogan1 from '../img/home/slogan1.jpg';
import slogan2 from '../img/home/slogan2.jpg';
import banner from '../img/home/background/coding team 3.jpg';
import { useState, useEffect } from 'react';

 const Homepage = () => {
    // Data
    const [primePacks_detailsList, setPrimePacks_detailsList] = useState([]);
    const [freePacks_detailsList, setFreePacks_detailsList] = useState([]);
    // Slider
    const [slogann, setSlogann] = useState(slogan1);
    const arr_img = [slogan1, slogan2];
    const [index, setIndex] = useState(0);
    const prev = () => {
        // alert("prev");
        setIndex(index - 1);
        if (index == 0 ) setIndex(arr_img.length - 1);
        setSlogann(arr_img[index]);
        console.log(index);
    }
    const next = () => {
        // alert("next");
        setIndex(index + 1);
        if (index == arr_img.length - 1) setIndex(0);
        setSlogann(arr_img[index]);
        console.log(index);
    }
    useEffect(() => {
        // Slider
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    });
    useEffect(() => {
        // API
        Axios.get("http://localhost:3001/homeprime").then((response) => {
            setPrimePacks_detailsList(response.data);
        });
        Axios.get("http://localhost:3001/homefree").then((response) => {
            setFreePacks_detailsList(response.data);
        });
    }, []);
    return(
    <div id="CTQM">
        <div id="header">
               {/* <!-- SIGN UP -->
            <!-- slogan --> */}
            <div id="slogan-slider">
                <img id="imgg" src={slogann} alt=""/>
                <div class="imgs-move">
                    <i class="fa fa-chevron-circle-left" onClick={prev}></i>
                    <i class="fa fa-chevron-circle-right" onClick={next}></i>
                </div>
            </div>
        </div>
        <div id="content">
            <div id="prime">
                <h1 class="heading-line">
                    <span class="heading-line pp">
                    Prime <b>Packs</b>
                    </span>
                    <div class="string-line"></div>
                </h1>
                <div class="course-packs">
                    {primePacks_detailsList.map((pack) => {
                        return (
                            <div class="prime-wrap" key={pack.id}>
                                <div class="prime-pack rounded">
                                    <div class="ribbon-B">
                                        <span>Prime Pack</span>
                                    </div>
                                    <div class="course-card-thumbnail rounded">
                                        <a href={`/videocourse/${pack.id}`}>
                                            <img class="rounded-img" src={require(`../img/viewMore/${pack.packs_name}.jpg`)} alt="{pack.packs_name}" title="FullStack Web Development"/>
                                            <span class="prime-icon-trigger"></span>
                                        </a>
                                    </div>
                                    <div class="primepack-card-body">
                                        <h4 class="h48">
                                            <a href={`/videocourse/${pack.id}`}>{pack.packs_name}</a>
                                        </h4>
                                        <p class="videos-details">
                                            <i class="fa fa-play-circle"></i> &nbsp;{pack.courses} Courses &nbsp;&nbsp;
                                            <span>
                                                <i class="fa fa-file-pdf"></i> &nbsp;2 eBooks
                                            </span>
                                        </p>
                                    </div>
                                    <div class="primeback-body">
                                        <span>From CTQM</span>
                                    </div>
                                </div>
                            </div>          
                            ) 
                        })}
                </div>
                <div class="clear"></div>
                <div class="prime-viewmore">
                    <a href='viewmore/prime' title="card view" class="btn-viewmore">
                        View More 
                        <i class="ti-angle-right"></i>
                    </a>
                </div>
            </div>
            <div id="prime">
                <h1 class="heading-line">
                    <span class="heading-line pp">
                    Video <b>Courses</b>
                    </span>
                    <div class="string-line"></div>
                </h1>
                <div class="course-packs">
                    {freePacks_detailsList.map((pack2) => {
                        return (
                            <div class="prime-wrap" key={pack2.id}>
                                <div class="prime-pack rounded">
                                    <div class="ribbon-B">
                                        <span>Free Pack</span>
                                    </div>
                                    <div class="course-card-thumbnail rounded">
                                        <a href={`/videocourse/${pack2.id}`}>
                                            <img class="rounded-img" src={require(`../img/viewMore/${pack2.packs_name}.jpg`)} alt={pack2.packs_name} title="FullStack Web Development"/>
                                            <span class="prime-icon-trigger"></span>
                                        </a>
                                    </div>
                                    <div class="primepack-card-body">
                                        <h4 class="h48">
                                            <a href={`/videocourse/${pack2.id}`} title="FullStack Web Development">{pack2.packs_name}</a>
                                        </h4>
                                        <p class="videos-details">
                                            <i class="fa fa-play-circle"></i> &nbsp;{pack2.courses} Courses &nbsp;&nbsp;
                                            <span>
                                                <i class="fa fa-file-pdf"></i> &nbsp;2 eBooks
                                            </span>
                                        </p>
                                    </div>
                                    <div class="primeback-body">
                                        <span>From CTQM</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div class="clear"></div>
                <div class="prime-viewmore">
                    <a href='viewmore/free' title="card view" class="btn-viewmore">
                        View More 
                        <i class="ti-angle-right"></i>
                    </a>
                </div>
            </div>
            <div id="tutorials">
                <h1>
                    Tutorials <b>Library</b>
                </h1>
                <div class="major-intro"> 
                    {/* <!-- web developement --> */}
                    <div class="major-pack web-development">
                        <h2>
                            <i class="fa fa-globe" aria-hidden="true"></i>
                            Web Development
                        </h2>
                        <div class="major-courses">
                            <div class="code-course code-html mul-col-4">
                                <a href="" target="_blank" title="HTML">
                                    <div class="img-title">HTML</div>
                                </a>
                            </div>
                            <div class="code-course code-css mul-col-4">
                                <a title="CSS">
                                    <div class="img-title">CSS</div>
                                </a>
                            </div>
                            <div class="code-course code-jvs mul-col-4">
                                <a title="Javascript">
                                    <div class="img-title">Javascript</div>
                                </a>
                            </div>
                            <div class="code-course code-php mul-col-4">
                                <a title="PHP">
                                    <div class="img-title">PHP</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- computer science --> */}
                    <div class="major-pack computer-science">
                        <h2>
                            <i class="fa fa-cogs" aria-hidden="true"></i>
                            Computer Science
                        </h2>
                        <div class="major-courses">
                            <div class="code-course code-cpf mul-col-4">
                                <a href="" target="_blank" title="Computer-Fundamentals">
                                    <div class="img-title">Computer Fundamentals</div>
                                </a>
                            </div>
                            <div class="code-course code-cpd mul-col-4">
                                <a title="Computer-Design">
                                    <div class="img-title">Computer Design</div>
                                </a>
                            </div>
                            <div class="code-course code-ors ">
                                <a title="Operating-System">
                                    <div class="img-title">Operating System</div>
                                </a>
                            </div>
                            <div class="code-course code-dts mul-col-4">
                                <a title="Data-Structure">
                                    <div class="img-title">Data Structure</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* <!-- machine learning --> */}
                    <div class="major-pack machine-learning">
                        <h2>
                            <i class="fa fa-microchip" aria-hidden="true"></i>
                            Machine Learning
                        </h2>
                        <div class="major-courses">
                            <div class="code-course code-mcl mul-col-4">
                                <a href="" target="_blank" title="Machine Learning">
                                    <div class="img-title">Machine Learning</div>
                                </a>
                            </div>
                            <div class="code-course code-tsf mul-col-4">
                                <a title="TensorFlow">
                                    <div class="img-title">TensorFlow </div>
                                </a>
                            </div>
                            <div class="code-course code-mlp mul-col-4">
                                <a title="ML-with-Python">
                                    <div class="img-title">ML with Python</div>
                                </a>
                            </div>
                            <div class="code-course code-aip mul-col-4">
                                <a title="AI-with-Python">
                                    <div class="img-title">AI with Python</div>
                                </a>
                            </div>
                        </div>
                    </div> 
                    {/* <!-- programming Tutorials --> */}
                     <div class="major-pack programming-tutorials">
                        <h2>
                            <i class="fa fa-code" aria-hidden="true"></i>
                            Programming Tutorials
                        </h2>
                        <div class="major-courses">
                            <div class="code-course code-cpg mul-col-4">
                                <a href="" target="_blank" title="C-Programming">
                                    <div class="img-title">C Programming</div>
                                </a>
                            </div>
                            <div class="code-course code-cpp mul-col-4">
                                <a title="C++">
                                    <div class="img-title">C++</div>
                                </a>
                            </div>
                            <div class="code-course code-jv8 mul-col-4">
                                <a title="Java-8">
                                    <div class="img-title">Java-8</div>
                                </a>
                            </div>
                            <div class="code-course code-pyt mul-col-4">
                                <a title="Python">
                                    <div class="img-title">Python</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="major--img">
                        <img class="rounded-img" src={banner} alt="banner" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
 };
 export default Homepage;