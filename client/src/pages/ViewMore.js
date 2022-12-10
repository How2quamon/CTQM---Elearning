import React from 'react';
import Axios from 'axios';
import slider1 from '../img/viewMore/slider/lpl.jpg';
import slider2 from '../img/viewMore/slider/summer_bonanza.jpg';
import { useState, useEffect } from 'react';
import '../css/ViewMore.css';

const ViewMore = () => {
    // Data
    const [packsList, setPacksList] = useState([]);
    const [type, setType] = useState("");
    // Slider
    const [slider, setSlider] = useState(slider1);
    const arr_img = [slider1, slider2];
    const [index, setIndex] = useState(0);
    const prev = () => {
        // alert("prev");
        setIndex(index - 1);
        if (index == 0 ) setIndex(arr_img.length - 1);
        setSlider(arr_img[index]);
        console.log(index);
    }
    const next = () => {
        // alert("next");
        setIndex(index + 1);
        if (index == arr_img.length - 1) setIndex(0);
        setSlider(arr_img[index]);
        console.log(index);
    }
    useEffect(() => {
        // Slider
        const interval = setInterval(next, 5000);
        return () => clearInterval(interval);
    });
    useEffect(() => {
        // API
        if (window.location.pathname == '/viewmore/prime') {
            Axios.get(`http://localhost:3001/viewmore/prime`).then((response) => {
                setPacksList(response.data);
            });
            setType("Prime");
        }
        if (window.location.pathname == '/viewmore/free') {
            Axios.get("http://localhost:3001/viewmore/free").then((response) => {
                setPacksList(response.data);
            });
            setType("Free");
        }
    }, []);
    return(      
        <div id="viewmore">
            <div id="viewmore-slider">
            <img id="imgg" src={slider} alt=""/>
            <div class="imgs-move">
                <i class="fa fa-chevron-circle-left" onClick={prev}></i>
                <i class="fa fa-chevron-circle-right" onClick={next}></i>
            </div>
        </div>
        <div id="row">
            <div id="ebooks">
                <div class="sub-title">
                    <span class="sub_title_span">Latest Packs</span>
                </div>
                {/* @foreach ($data as $pack) */}
                {packsList.map((pack) => {
                    return (
                        <div class="primeback" key={pack.id}>
                            <input type="hidden" class="course_id" value="4871"/>
                            <div class="primeback-video">
                                <div class="primeback-video-thumbnail">
                                    <a href={`/videocourse/${pack.id}`}>
                                        <img src={require(`../img/viewMore/${pack.packs_name}.jpg`)} alt={pack.packs_name} class="primeback-video-thumbnail__img"/>
                                        <span class="primeback-video-thumbnail__icon"></span>
                                    </a>
                                </div>

                                <div class="primeback-video-ribbon">
                                    <span>
                                        {type} Pack
                                    </span>
                                </div>

                                <div class="primeback-video-body">
                                    <h4>
                                        <a {...window.history.replaceState({}, document.title)}
                                        href={`/videocourse/${pack.id}`}>{pack.packs_name}</a>
                                    </h4>

                                    <p class="primeback-video-body_details">
                                        <i class="fa fa-play-circle"></i>
                                        &nbsp;{pack.courses} Courses &nbsp;&nbsp;
                                        <span>
                                            <i class="fa fa-file-pdf"></i>
                                            &nbsp;1 eBooks
                                        </span>
                                    </p>

                                    <div class="primeback-video-body__from">
                                        <span><i>From CTQM</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {/* @endforeach */}
            </div>
        </div>
    </div>
    );
};

export default ViewMore;