import React from "react";
import Axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import '../css/Instruct.css';
import '../css/star.css';
import { UserContext } from '../components/Context/UserContext';
import insImg from '../img/profile/instructor.jpg'

const Instructor = () => {
    const { userLogin, setUserLogin } = useContext(UserContext);

    const [insId, setInsId] = useState(window.location.pathname.split('/')[2]);
    const [insInfo, setInsInfo] = useState([]);
    const [insPacks, setInsPacks] = useState([]);
    const [insRating, setInsRating] = useState(0);
    const [ratingStatus, setRatingStatus] = useState(0);
    const [currStar, setCurrStar] = useState(0);
    const [star, setStar] = useState(0);
    const [checkPacks, setCheckPacks] = useState([]);

    const newInsRating = () => {
        try {
            console.log(checkPacks.length);
            if (userLogin != null && checkPacks.length >= 0) {
                Axios.post(`http://localhost:3001/newInsRating`, { user_id: userLogin.id, ins_id: insId, star: star });
                setRatingStatus(2);
                window.location.reload();
            }
            else setRatingStatus(1);
        }
        catch
        {
            setRatingStatus(1);
        }
    }

    // Get Instructor Data
    // Get Courses Data
    useEffect(() => {
        Axios.get(`http://localhost:3001/getCourses/${insId}}`).then((response) => {
            setInsPacks(response.data);
        })
        Axios.get(`http://localhost:3001/getInstructor/${insId}`).then((response) => {
            setInsInfo(response.data);
        })
        Axios.get(`http://localhost:3001/instructRating/${insId}`).then((response) => {
            setInsRating(response.data);
        })
        if (userLogin != null) {
            Axios.get(`http://localhost:3001/checkPack/${userLogin.id}/${insId}`).then((response) => {
                setCheckPacks(response.data);
            })
            Axios.get(`http://localhost:3001/getInsRating/${userLogin.id}/${insId}`).then((response) => {
                try {
                    setCurrStar(response.data[0].star);
                }
                catch
                {
                    setCurrStar(-1);
                }
            })
        }
    }, [insId])

    return (
        <div class="main">
            {insInfo.map((info) => {
                return (
                    <div class="main-profile">
                        <div class="profile">
                            <div class="avatar-img">
                                <img class="avatar" src={insImg} />
                            </div>
                            <div class="my-infor">
                                <p>{info.user_name}</p>
                            </div>
                            <div class="my-follow">
                                <a class="infor" href=""><i class="ti-bookmark-alt"></i> {insPacks.length} Packs</a>
                            </div>
                            {insRating.map((rat) => {
                                return (
                                    <label class="rating-label">
                                        <strong>Average rating is {rat.avg_star} <code>readonly</code></strong>
                                        <input
                                            class="rating"
                                            max="5"
                                            readOnly
                                            step="0.01"
                                            style={{ ['--fill']: 'rgb(159, 87, 87)', ['--value']: `${rat.avg_star}` }}
                                            type="range"
                                            value={rat.avg_star}
                                        />
                                    </label>
                                )
                            })}
                            <div class="title">Rating Instructor</div>
                            {currStar == -1 ?
                                <div>
                                    {ratingStatus == 2 ?
                                        <div class="alert alert-success" role="alert">
                                            <button type="button" class="close" data-dismiss="alert">×</button>
                                            Rating Successed
                                        </div>
                                        : ratingStatus == 1 ?
                                            <div class="alert alert-danger" role="alert">
                                                <button type="button" class="close" data-dismiss="alert">×</button>
                                                Rating Failed
                                            </div>
                                            :
                                            ""
                                    }
                                    <button type="submit" onClick={newInsRating}>Rating</button>
                                    <div id="rating">
                                        <input type="radio" id="star5" name="rating" value="5" onClick={() => setStar(5)} />
                                        <label class="full" htmlFor="star5" title="Awesome - 5 stars"></label>

                                        <input type="radio" id="star4half" name="rating" value="4.5" onClick={() => setStar(4.5)} />
                                        <label class="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>

                                        <input type="radio" id="star4" name="rating" value="4" onClick={() => setStar(4)} />
                                        <label class="full" htmlFor="star4" title="Pretty good - 4 stars"></label>

                                        <input type="radio" id="star3half" name="rating" value="3.5" onClick={() => setStar(3.5)} />
                                        <label class="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>

                                        <input type="radio" id="star3" name="rating" value="3" onClick={() => setStar(3)} />
                                        <label class="full" htmlFor="star3" title="Meh - 3 stars"></label>

                                        <input type="radio" id="star2half" name="rating" value="2.5" onClick={() => setStar(2.5)} />
                                        <label class="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>

                                        <input type="radio" id="star2" name="rating" value="2" onClick={() => setStar(2)} />
                                        <label class="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>

                                        <input type="radio" id="star1half" name="rating" value="1.5" onClick={() => setStar(1.5)} />
                                        <label class="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>

                                        <input type="radio" id="star1" name="rating" value="1" onClick={() => setStar(1)} />
                                        <label class="full" htmlFor="star1" title="Sucks big time - 1 star"></label>

                                        <input type="radio" id="starhalf" name="rating" value="0.5" onClick={() => setStar(0.5)} />
                                        <label class="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                    </div>
                                </div>
                                :
                                <label class="rating-label">
                                    <strong>Your rating was {currStar} <code>readonly</code></strong>
                                    <input
                                        class="rating"
                                        max="5"
                                        readOnly
                                        step="0.01"
                                        style={{ ['--fill']: 'rgb(159, 87, 87)', ['--value']: `${currStar}` }}
                                        type="range"
                                        value={currStar}
                                    />
                                </label>
                            }
                        </div>
                        <div class="right_inner">
                            <div class="exp goal">
                                <div class="title">
                                    Courses
                                </div>
                                {insPacks.map((pack) => {
                                    return (
                                        <div>
                                            < div class="source" >
                                                <div id="right_video">
                                                    <a href={`/videocourse/${pack.id}`}>
                                                        <div id="right_video_tag">
                                                            <font id="right_video_font">
                                                                {pack.packs_name}
                                                            </font>
                                                        </div>
                                                    </a>
                                                    <div class="video">
                                                        <div class="video_descrip">
                                                            <span class="Label Label--secondary v-align-middle ml-1">
                                                                {pack.price == 0 ? "Free" : pack.price + "$"}
                                                            </span>
                                                        </div>
                                                        <div class="more_details">
                                                            <div class="more_details_1">
                                                                <font class="video_details">
                                                                    Lectures: {pack.lectures} | Time complete: {pack.time_cpl}hr
                                                                </font>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    );
}
export default Instructor;