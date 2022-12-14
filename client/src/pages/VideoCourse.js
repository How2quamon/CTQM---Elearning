import React from "react";
import Axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import '../css/VideoCourse.css';
import '../css/star.css';
import { UserContext } from '../components/Context/UserContext';


const VideoCourse = () => {
    const {userLogin, setUserLogin} = useContext(UserContext);

    // Pack Data
    const [pack, setPack] = useState([]);
    const [instructor, setInstructor] = useState([]);
    const [syllabus, setSyllabus] = useState([]);
    const [videosItem, setVideosItem] = useState([]);
    const [packId, setPackId] = useState(window.location.pathname.split('/')[2]);
    const [instructorId, setInstructorId] = useState('');
    const [instructorRating, setInstructorRating] = useState(0);
    const [packRating, setPackRating] = useState(0);
    const [firstSyllabus, setFirstSyllabus] = useState(0);
    const [syllabusLength, setSyllabusLength] = useState(0);
    const [commentList, setCommentList] = useState([])
    const [currStar, setCurrStar] = useState(0);
    const [userPack, setUserPack] = useState([]);
    const [userPackId, setUserPackId] = useState(0);

    // Comment Data
    const [content, setContent] = useState("");
    const [usercmt, setUserCmt] = useState("")
    const [commentId, setCommentId] = useState(0);
    const [vote, setVote] = useState(0);
    const [voteId, setVoteId] = useState(0);
    const [action, setAction] = useState(0);
    const [cmtStatus, setCmtStatus] = useState(0);
    const [ratingStatus, setRatingStatus] = useState(0);
    const [star, setStar] = useState(0);
    const [buyStatus, setBuyStatus] = useState(0);

    // event
    const [tag, setTag] = useState(0);
    const [isPause, setIsPause] = useState(0);
    const [show, setShow] = useState(0);
    const setNetTag = (value) => {
        setTag(value);
        if (tag === 0) {
            Axios.get(`http://localhost:3001/videosItem/${firstSyllabus}/${syllabusLength}`).then((response) => {
                setVideosItem(response.data);
            });
        }
    }

    const setNewShow = (value) => {
        if (value == show) setShow(0);
        setShow(value);
    }

    const setPauseValue = (value) => {
        if (value == 0) {
            setIsPause(1);
            document.querySelector('#content .course__box--sticky .video__container video').play();
        }
        else {
            setIsPause(0);
            document.querySelector('#content .course__box--sticky .video__container video').pause();
        }
    }
    
    // Thêm bình luận
    const submitComment = () => {
        try 
        {
            if (userLogin != null && userPackId != -1) {
                if (content.trim().length !== 0) {
                    console.log(action);
                    setAction(action + 1);
                    Axios.post(`http://localhost:3001/newComment/${packId}`, { content: content });
                    setCmtStatus(2);
                }
            }
            else setCmtStatus(1);
        }
        catch 
        {
            setCmtStatus(1);
        }
    };

    // Vote cho bình luận
    const submitVote = (id, value) => {
        try {
            if (userLogin != null && userPackId != -1) {
                setVoteId(id);
                setVote(value);
                setAction(action + 1);
                Axios.put(`http://localhost:3001/updateVote`, { id: id, vote: value });
                setCmtStatus(2);
            } 
            else setCmtStatus(1);
        }
        catch
        {
            setCmtStatus(1);
        }
    }

    // Xóa bình luận
    const deleteComment = (id) => {
        try {
            if (userLogin != null && userPackId != -1) {
                setCommentId(id);
                setAction(action + 1);
                Axios.delete(`http://localhost:3001/cmtdelete/${id}`);
                setCmtStatus(2);
            }
            else setCmtStatus(1);
        }
        catch {
            setCmtStatus(1);
        }
    };

    const newRating = () => {
        try 
        {
            if (userLogin != null && userPackId != -1) {
                Axios.post(`http://localhost:3001/newRating`, { user_id: userLogin.id, pack_id: packId, star: star});
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

    const getPack = (packname, price) => {
        try {
            if (userLogin != null && userLogin.cash >= price) {
                Axios.post(`http://localhost:3001/newPack/${userLogin.id}/${packId}`, { pack_name: packname, price: price});
                setBuyStatus(2);
                window.location.reload();
            }
            else setBuyStatus(1);
        }
        catch {
            setBuyStatus(1);
        }
    }

    useEffect(() => {
        console.log("reload");
        Axios.get(`http://localhost:3001/getCmt/${packId}`).then((response) => {
            setCommentList(response.data);
        })
    }, [action])
    
    useEffect(() => {
        // API
        Axios.get(`http://localhost:3001/pack/${packId}`).then((response) => {
            setPack(response.data);
            setInstructorId(response.data[0].instructor_id);
        });
        Axios.get(`http://localhost:3001/packInstruct/${instructorId}`).then((response) => {
            setInstructor(response.data);
        });
        Axios.get(`http://localhost:3001/instructRating/${instructorId}`).then((response) => {
            setInstructorRating(response.data);
        });
        Axios.get(`http://localhost:3001/packRating/${packId}`).then((response) => {
            setPackRating(response.data);
        });
        Axios.get(`http://localhost:3001/syllabi/${packId}`).then((response) => {
            setSyllabus(response.data);
            setFirstSyllabus(response.data[0].id);
            setSyllabusLength(syllabus.length + firstSyllabus);
        });
        Axios.get(`http://localhost:3001/getCmt/${packId}`).then((response) => {
            setCommentList(response.data);
        })
        if (userLogin != null) {
            Axios.get(`http://localhost:3001/getRating/${userLogin.id}/${packId}`).then((response) => {
                try 
                {
                    setCurrStar(response.data[0].star);
                }
                catch 
                {
                    setCurrStar(-1);
                }
            })
            Axios.get(`http://localhost:3001/userPack/${userLogin.id}/${packId}`).then((response) => {
                try 
                {
                    setUserPack(response.data);
                    setUserPackId(response.data[0].id);
                }
                catch 
                {
                    setUserPackId(-1);
                }
            })
            console.log(userPackId);
        }
    }, [instructorId]);
    
    // popup video
    var popup = document.querySelectorAll('#content .list__items');
    popup.forEach(vid => {
        vid.onclick = () => {
        document.querySelector('.popup-video').style.display = 'block';
            document.querySelector('.popup-video video').src = vid.querySelector('.video').getAttribute('src');
        }
    });
    var close_vid = document.getElementById('closeSpan');
    if (close_vid != null) {
        close_vid.onclick = () => {
            document.querySelector('.popup-video').style.display = 'none';
            document.querySelector('.popup-video video').pause();
        }
    }
    var getStar = document.querySelectorAll('input[name="rating"]');
    getStar.forEach(starr => {
        starr.onclick = () => {
            setStar(starr.value);
        }
    })

    return (
        <div>
            {pack.map((info) => {
                return (
                    <div id="content" key={info.id}>
                        <div class="banner">
                            <div class="banner__details">
                                <h1>{info.packs_name}</h1>
                                <div class="banner__subtitle">
                                    <p>{info.punch_line}</p>
                                    {userPackId != -1 ? 
                                        <button class="letgo-btn" onClick={() => setNetTag(1)}>Let's go!</button>
                                    : info.price > 0 ? 
                                        <button onClick={() => getPack(info.packs_name, info.price)}>Get pack with {info.price} US$</button>
                                    :
                                        <button onClick={() => getPack(info.packs_name, info.price)}>Get pack for FREE</button>
                                    }                                    
                                {buyStatus == 2 ? 
                                    <div class="alert alert-success" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                            Add to you packs successfully
                                    </div>
                                : buyStatus == 1 ? 
                                    <div class="alert alert-danger" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                            Looks like you're out of money
                                    </div>
                                : 
                                    ""
                                }
                                </div>
                            </div>
                        </div>
                        <div class="course__video">
                            <div class="course__content--button">
                                <button class={tag === 0 ? "syllabus run" : "syllabus"} onClick={() => setNetTag(0)}>
                                    <h2>Overview</h2>
                                </button>

                                <button class={tag === 1 ? "overview run" : "overview"} onClick={() => setNetTag(1)}>
                                    <h2>Syllabus</h2>
                                </button>
                            </div>
                            <div class="course__content--wrapper">
                                <div class={tag === 0 ? "course__content--overview" : "course__content--overview run"}>
                                    <h4>Introduct</h4>
                                    <p>{info.introduct}</p>
                                    <h4>Why Should you get this Prime Pack</h4>
                                    <p>{info.whyshould}</p>
                                    <h4>Goals</h4>
                                    <p>{info.goals}</p>
                                    {/* ----------------INSTRUCTOR------------------- */}
                                    {instructor.map((instruc) => {
                                        return (
                                            <div key={instruc.id}>
                                                <h4>Instructor</h4>
                                                <h5><a href={`/instructor/${instruc.id}`}>{instruc.user_name}</a></h5>
                                                    {instructorRating.map((insStar) => {
                                                        return (
                                                            <label class="rating-label"> <strong>Average rating is {insStar.avg_star} <code>readonly</code></strong>
                                                            <input
                                                                class="rating"
                                                                max="5"
                                                                readOnly
                                                                step="0.01"
                                                                style={{ ['--fill']: 'rgb(159, 87, 87)', ['--value']: `${insStar.avg_star}` }}
                                                                type="range"
                                                                value={`${insStar.avg_star}`} />
                                                            </label>
                                                        )
                                                    })}
                                                    
                                                <p>{instruc.introduct}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            <div class={tag === 1 ? "course__content--packs" : "course__content--packs run"}>
                            {syllabus.map((sly) => {
                                return (
                                    <div>
                                        <div class="content__wrapper" onClick={() => setNewShow(sly.id)}>
                                            <div class="packs__header">
                                                <button class="header__wrapper">
                                                    <h2>
                                                        {sly.header}
                                                    </h2>
                                                    <div class="total-count">
                                                        <span>
                                                            {sly.total} Lectures 
                                                        </span>
                                                    </div>
                                                </button>
                                            </div>
                                            <div class={show === sly.id ? "packs__list show" : "packs__list"}>
                                                {videosItem.map((item) => {
                                                    if (item.syllabus_id === sly.id)
                                                    return (
                                                    <div class="list__items" value={item.id}>
                                                        <div class="items__wrapper">
                                                            <div class="items__border">
                                                                C
                                                            </div>    
                                                        </div>
                                                        <a class="items__label">
                                                            <div class="label__title">
                                                                <span>Video</span>
                                                                <span>{item.Content}</span>
                                                            </div>
                                                        <div class="video" src={require(`../videos/intro.mp4`)}></div>
                                                        </a>
                                                        <div class="items__logo">
                                                            <span>CTQM</span>
                                                        </div>
                                                    </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    <div>
                                    </div>
                                        <div class="popup-video">
                                            <span id="closeSpan">&times;</span>
                                            <video src="#" muted autoPlay controls></video>
                                        </div>
                                    </div>
                                )
                            })}
                            </div>
                            <div class={tag === 0 ? "course__box--sticky" : "course__box--sticky run"}>
                                <aside class="sticky__infoBox">
                                    <div class="video__container">
                                        <video class="video" src={require(`../videos/intro.mp4`)} ></video>
                                        <i class={isPause === 0 ? "fa fa-play play" : "fa fa-pause pause"} aria-hidden="true" onClick={() => setPauseValue(isPause)} ></i>
                                    </div>
                                    <p class="infoBox__text">
                                        by
                                        <span class="logo">CTQM</span>
                                    </p>
                                    <p class="infoBox__text">
                                        Time to Complete
                                        <span>{info.time_cpl} Hours</span>
                                    </p>
                                    <p class="infoBox__text">
                                        Lectures
                                        <span>{info.time_cpl}</span>
                                    </p>
                                    <p class="infoBox__text">
                                        {packRating.map((packStar) => {
                                            return (
                                                <label class="rating-label"><strong>Average rating is {packStar.avg_star} <code>readonly</code></strong>
                                                <input
                                                class="rating"
                                                max="5"
                                                readOnly
                                                step="0.01"
                                                style={{ ['--fill']:'rgb(159, 87, 87)', ['--value']:`${packStar.avg_star}`}}
                                                type="range"
                                                value={`${packStar.avg_star}`}
                                                /> 
                                                </label>
                                            )
                                        })}
                                    </p>
                                    <p class="infoBox__text">
                                        <span>Prerequisites</span>
                                            <li>{info.pre_1}</li>
                                            <li>{info.pre_2}</li>
                                            <li>{info.pre_3}</li>
                                        </p>
                                        <div class="infoBox__text">
                                            <div>
                                                {/* <!-- rating --> */}
                                                <span>Rating pack</span>
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
                                                {currStar == -1 ? 
                                                    <div>
                                                        <button onClick={newRating}>Rating</button>
                                                        <div id="rating">
                                                            <input type="radio" id="star5" name="rating" value="5" />
                                                            <label class="full" htmlFor="star5" title="Awesome - 5 stars"></label>

                                                            <input type="radio" id="star4half" name="rating" value="4.5" />
                                                            <label class="half" htmlFor="star4half" title="Pretty good - 4.5 stars"></label>

                                                            <input type="radio" id="star4" name="rating" value="4" />
                                                            <label class="full" htmlFor="star4" title="Pretty good - 4 stars"></label>

                                                            <input type="radio" id="star3half" name="rating" value="3.5" />
                                                            <label class="half" htmlFor="star3half" title="Meh - 3.5 stars"></label>

                                                            <input type="radio" id="star3" name="rating" value="3" />
                                                            <label class="full" htmlFor="star3" title="Meh - 3 stars"></label>

                                                            <input type="radio" id="star2half" name="rating" value="2.5" />
                                                            <label class="half" htmlFor="star2half" title="Kinda bad - 2.5 stars"></label>

                                                            <input type="radio" id="star2" name="rating" value="2" />
                                                            <label class="full" htmlFor="star2" title="Kinda bad - 2 stars"></label>

                                                            <input type="radio" id="star1half" name="rating" value="1.5" />
                                                            <label class="half" htmlFor="star1half" title="Meh - 1.5 stars"></label>

                                                            <input type="radio" id="star1" name="rating" value="1" />
                                                            <label class="full" htmlFor="star1" title="Sucks big time - 1 star"></label>

                                                            <input type="radio" id="starhalf" name="rating" value="0.5" />
                                                            <label class="half" htmlFor="starhalf" title="Sucks big time - 0.5 stars"></label>
                                                        </div>
                                                    </div>
                                                :
                                                    <label class="rating-label"><strong>Your rating is {currStar} <code>readonly</code></strong>
                                                    <input
                                                    class="rating"
                                                    max="5"
                                                    readOnly
                                                    step="0.01"
                                                    style={{ ['--fill']:'rgb(159, 87, 87)', ['--value']:`${currStar}`}}
                                                    type="range"
                                                    value={`${currStar}`}
                                                    /> 
                                                    </label>
                                                }
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            {/* <!-- comment --> */}
                            <div class='snippet-body'>
                                <div class="container mt-5 mb-5">
                                    <div class="d-flex justify-content-center row">
                                        <div class="d-flex flex-column col-md-8">
                                            <div class="d-flex flex-row align-items-center text-left comment-top p-2 bg-white border-bottom px-4">
                                                <div class="profile-image"></div>
                                                <div class="d-flex flex-column ml-3">
                                                    <div class="d-flex flex-row post-title">
                                                        <h5>{info.packs_name}</h5>
                                                    </div>
                                                    <div class="d-flex flex-row align-items-center align-content-center post-title"><span class="bdge mr-1">CTQM</span><span class="comments">{commentList.length} comments&nbsp;</span><span class="dot"></span></div>
                                                </div>
                                            </div>
                                            <div class="coment-bottom bg-white p-2 px-4">
                                                <div class="d-flex flex-row add-comment-section mt-4 mb-4" > 
                                                    <input type="text" class="form-control mr-3" name="content" placeholder="Let everyone know what you think" onChange={(e) => {
                                                        setContent(e.target.value)
                                                    }} />
                                                    <button class="btn btn-primary" onClick={submitComment}>
                                                        Comment
                                                    </button>
                                                </div>
                                                {cmtStatus == 2 ? 
                                                    <div class="alert alert-success" role="alert">
                                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                                        Refresh to see your change 
                                                    </div>
                                                : cmtStatus == 1 ? 
                                                    <div class="alert alert-danger" role="alert">
                                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                                        Your action was fail
                                                    </div>
                                                :
                                                ""
                                                }
                                                {commentList.map((val) => {
                                                    return (
                                                        <div class="commented-section mt-2">
                                                            <div class="d-flex flex-row align-items-center commented-user">
                                                                <h5>{val.nick_name}</h5><span class="dot mb-1"></span>
                                                            </div>
                                                            <div class="comment-text-sm"><span>
                                                                {val.content}
                                                            </span>
                                                            </div>
                                                            <div class="reply-section">
                                                                <div class="d-flex flex-row align-items-center voting-icons">
                                                                    <a class="fa fa-sort-up fa-2x mt-3 hit-voting" onClick={() => submitVote(val.id, val.vote + 1)}></a>
                                                                    <a class="fa fa-sort-down fa-2x mb-3 hit-voting" onClick={() => submitVote(val.id, val.vote - 1)}></a>
                                                                    <span class="ml-2">
                                                                        {val.vote}
                                                                    </span><span class="dot ml-2"></span>
                                                                    {userLogin != null && userLogin.id == val.user_id ? 
                                                                        <button class="ml-2 mt-1 bdge mr-1" onClick={() => deleteComment(val.id)}>Delete</button> 
                                                                    :
                                                                        ""
                                                                    }
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default VideoCourse;