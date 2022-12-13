import React , {useContext, useState, useEffect} from "react";
import Axios from 'axios';
// import Modal from 'react-bootstrap/Modal'
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from "react-icons";
import '../css/Profile.css';
import userIcon from '../img/profile/user.png'
import { UserContext } from '../components/Context/UserContext';

const Profile = () => {
    const {userLogin, setUserLogin} = useContext(UserContext);

    const [userInfo, setUserInfo] = useState([]);
    const [userPacks, setUserPacks] = useState([]);

    // Get User Data
    // Get Courses Data
    useEffect(() => {
        Axios.get(`http://localhost:3001/getUser/${userLogin.id}`).then((response) => {
            setUserInfo(response.data);
        })
        Axios.get(`http://localhost:3001/getUserCourses/${userLogin.id}`).then((response) => {
            setUserPacks(response.data);
        })
    }, [])

    return (
        <IconContext.Provider value={{ size: '14px', color: '#93a3b5'}}>
            <div class="container">
                {userInfo.map((info) => {
                    return (
                        <div class="profile row">
                        <div class="col-md-3">
                            <div class="profile-sidebar">
                                {/* <!-- SIDEBAR USERPIC --> */}
                                <div class="profile-userpic text-center">
                                    <img src={userIcon} class="img-responsive" alt=""/>
                                </div>
                                {/* <!-- END SIDEBAR USERPIC -->
                                <!-- SIDEBAR USER TITLE --> */}
                                <div class="profile-usertitle">
                                    <div class="profile-usertitle-name">
                                        {info.user_name}
                                    </div>    
                                    {/* <!-- @if (session('status'))
                                <div class="alert alert-success" role="alert">
                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                    {{ session('status') }}
                                </div>
                                @elseif(session('failed'))
                                <div class="alert alert-danger" role="alert">
                                    <button type="button" class="close" data-dismiss="alert">×</button>
                                    {{ session('failed') }}
                                </div>
                                @endif --> */}
                                </div>
                                {/* <!-- END SIDEBAR USER TITLE -->
                                <!-- SIDEBAR BUTTONS --> */}
                                <div class="profile-userbuttons">
                                    <button type="button" class="btn btn-success btn-sm">Follow</button>
                                    <button type="button" class="btn btn-danger btn-sm">Message</button>
                                </div>
                                {/* <!-- END SIDEBAR BUTTONS -->
                                <!-- SIDEBAR MENU --> */}
                                <div class="profile-usermenu">
                                    <ul class="nav row">
                                        <li class="active">
                                            <a href="#">
                                            <span><BiIcons.BiHome/></span>
                                            Overview </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#editProfile">
                                            <span><BiIcons.BiUser/></span>
                                            Account Settings </a>
                                        </li>
                                        <li>
                                            <a href="#" data-toggle="modal" data-target="#payment">
                                            <span><BsIcons.BsCashCoin/></span>
                                            Payment </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                            <span><BiIcons.BiHelpCircle/></span>
                                            Help </a>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- END MENU --> */}
                            
                                <div class="portlet light bordered">
                                                                    {/* <!-- STAT --> */}
                                    <div class="row list-separated profile-stat">
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> 1000 </div>
                                            <div class="uppercase profile-stat-text"> Follower(s) </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> 9 </div>
                                            <div class="uppercase profile-stat-text"> Following </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> {userPacks.length} </div>
                                            <div class="uppercase profile-stat-text"> Course(s) </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> 4.3 </div>
                                            <div class="uppercase profile-stat-text"> Rating </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> 77,777 </div>
                                            <div class="uppercase profile-stat-text"> Attendee(s) </div>
                                        </div>
                                        <div class="col-md-4 col-sm-4 col-xs-6">
                                            <div class="uppercase profile-stat-title"> 70,700 </div>
                                            <div class="uppercase profile-stat-text"> Review(s) </div>
                                        </div>
                                    </div>
                                    {/* <!-- END STAT --> */}
                                    <div>
                                        <h4 class="profile-desc-title">ABOUT ME</h4>
                                        <span class="profile-desc-text"> May the Force be with you. </span>                            
                                        <div class="margin-top-20 profile-desc-link">
                                            <span><BsIcons.BsTwitter/></span>
                                            <a href="https://www.twitter.com/">@{info.nick_name}</a>
                                        </div>
                                        <div class="margin-top-20 profile-desc-link">
                                            <span><BsIcons.BsFacebook/></span>
                                            <a href="https://www.facebook.com/">{info.nick_name}</a>
                                        </div>
                                    </div>
                                </div>     
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="profile-content">
                                <div class="right_inner">
                                    <div class="exp goal">
                                        <div class="title">
                                            Courses
                                        </div>
                                        {userPacks.map((item) => {
                                            return (    
                                    <div class="source">
                                        <div id="right_video">
                                            <a href={`/videocourse/${item.pack_id}`}>
                                                <div id="right_video_tag">
                                                    <font id="right_video_font">
                                                        {item.pack_name}
                                                    </font>
                                                </div>
                                            </a>
                                                <div class="video">
                                                    <div class="video_descrip">
                                                        <span class="Label Label--secondary v-align-middle ml-1">
                                                            {item.price == 0 ? "Free" : item.price + '$' }
                                                        </span>
                                                    </div>
                                                        <div class="more_details">
                                                            <div class="more_details_1">
                                                                <font class="video_details">
                                                                    Process: ${item.process} At: ${item.at}
                                                                </font>
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
                        </div>
                    </div>
                    )
                })}
            </div>
        </IconContext.Provider>
    );
   
}
export default Profile;