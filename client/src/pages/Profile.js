import React from "react";
// import Modal from "react-modal";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as SlIcons from 'react-icons/sl';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from "react-icons";
import '../css/Profile.css';

const Profile = () => {

    return (
        <IconContext.Provider value={{ size: '14px', marginRight: '8px' }}>
            <div class="container">
            <div class="profile row">
            <div class="col-md-3">
                <div class="profile-sidebar">
                    {/* <!-- SIDEBAR USERPIC --> */}
                    <div class="profile-userpic">
                        {/* <!-- {{url('profile')}}/img/user.png --> */}
                        <img src="assets/img/user.jpg" class="img-responsive" alt=""/>
                    </div>
                    {/* <!-- END SIDEBAR USERPIC -->
                    <!-- SIDEBAR USER TITLE -->
                    <div class="profile-usertitle">
                        <div class="profile-usertitle-name">
                            <!-- {{$user->user_name}} -->
                            Danielle de La Fontaine
                        </div>    
                         <!-- @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        {{ session('status') }}
                    </div>
                    @elseif(session('failed'))
                    <div class="alert alert-danger" role="alert">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        {{ session('failed') }}
                    </div>
                    @endif -->
                    </div>
                    <!-- END SIDEBAR USER TITLE -->
                    <!-- SIDEBAR BUTTONS --> */}
                    <div class="profile-userbuttons">
                        <button type="button" class="btn btn-success btn-sm">Follow</button>
                        <button type="button" class="btn btn-danger btn-sm">Message</button>
                    </div>
                    {/* <!-- END SIDEBAR BUTTONS -->
                    <!-- SIDEBAR MENU --> */}
                    <div class="profile-usermenu">
                        <ul class="nav">
                            <li class="active">
                                <a href="#">
                                <BiIcons.BiHome/>
                                Overview </a>
                            </li>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#editProfile">
                                <BiIcons.BiUser/>
                                Account Settings </a>
                            </li>
                            <li>
                                <a href="#" data-toggle="modal" data-target="#payment">
                                <BsIcons.BsCashCoin/>
                                Payment </a>
                            </li>
                            <li>
                                <a href="#">
                                <BiIcons.BiHelpCircle/>
                                Help </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- END MENU --> */}
                   
                    <div class="portlet light bordered">
                                                        {/* <!-- STAT --> */}
                        <div class="row list-separated profile-stat">
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 777 </div>
                                <div class="uppercase profile-stat-text"> Follower(s) </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 7 </div>
                                <div class="uppercase profile-stat-text"> Following </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-6">
                                <div class="uppercase profile-stat-title"> 7 </div>
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
                                <BsIcons.BsTwitter/>
                                <a href="https://www.twitter.com/">@soullenf_1812</a>
                            </div>
                            <div class="margin-top-20 profile-desc-link">
                                <BsIcons.BsFacebook/>
                                <a href="https://www.facebook.com/">Ngoc Minh</a>
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
                        {/* <!-- @foreach ($pack as $item) --> */}
                        <div class="source">
                            <div id="right_video">
                                <a href="{{url('ctqm-pack')}}/{{$item->pack_id}}">
                                    <div id="right_video_tag">
                                        <font id="right_video_font">
                                            {/* <!-- {{$item->pack_name}} --> */}
                                        </font>
                                    </div>
                                </a>
                                    <div class="video">
                                        <div class="video_descrip">
                                            <span class="Label Label--secondary v-align-middle ml-1">
                                                {/* <!-- @if ($item->price == 0) Free
                                                @else {{$item->price}}
                                                @endif --> */}
                                            </span>
                                        </div>
                                            <div class="more_details">
                                                <div class="more_details_1">
                                                    <font class="video_details">
                                                        {/* <!-- Process: {{$item->process}} At: {{$item->at}} --> */}
                                                    </font>
                                                </div>
                                            </div>
                                    </div>
                            </div>
                        </div>
                        {/* <!-- @endforeach --> */}
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    </div>
    {/* <!-- Modal edit profile--> */}
    <div class="modal fade" id="editProfile" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal"><i class="icon-xs-o-md"></i></button>
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title caps"><strong><center>Personal Information</center></strong></h4>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <form action="{{url('/updateUser')}}" method="post">
                                {/* <!-- @csrf --> */}
                                    <label htmlFor="ticket-quantity modal"  class="modal-label">
                                        <BiIcons.BiUser/>
                                        Name
                                    </label>
                                    <input id="ticket-quantity fname" type="text" name="fname" class="modal-input" placeholder="Enter your name..."/>
                                    
                                    <label htmlFor="ticket-email"  class="modal-label">
                                        <BiIcons.BiUserPlus/>
                                        Nickname
                                    </label>
                                    <input id="ticket-email" type="username" name="username" class="modal-input" placeholder="Enter your nickname..."/>
                    
                                    <label htmlFor="ticket-password"  class="modal-label">
                                        <RiIcons.RiLockPasswordFill/>
                                        Password
                                    </label>
                                    <input id="ticket-password" type="password" name="password" class="modal-input" placeholder="Enter password..."/>
                                    <div class="check text-center">
                                        <button id="check-edit save" type="submit" class="btn btn-success" value="save">SAVE</button>
                                        <button id="check-edit cancel" type="button" class="btn btn-danger" value="cancelProfile">CANCEL</button>
                                    </div> 
                            </form>
                        </div>
                    </div>                                
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Modal payment--> */}
    <div class="modal fade" id="payment" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal"><i class="icon-xs-o-md"></i></button>
                <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title caps"><strong><center>Select Payment</center></strong></h4>
                </div>
                <div class="modal-body">
                    <div class="row justify-content-center">
                            <form action="{{url('/updateCash')}}" method="post">
                                {/* <!-- @csrf --> */}
                                <div class="col-md-12 col-sm-12 p-10" id="payment_gateways">
                                    <div class="uk-card-small">
                                         <span class="uk-h5"><b>&nbsp;Payment Methods</b></span>
                                    </div>
                                    <div class="tp-payment-method">
                                        <div class="row paypal_button" style={{display: "block"}}>
                                            <label class="tp-payment-alt">
                                                {/* <!-- {{url('profile')}}/img/paypal.png --> */}
                                                <input type="radio" name="payment_method" id="paypal" value="paypal" disabled/>
                                                <label htmlFor="paypal"><img src="assets/img/paypal.png" alt="Tutorialspoint"/></label>
                                                <p>Pay  with <b>PayPal</b> .</p>
                                            </label>
                                        </div>
                                        <div class="clear"></div>
                                        <div class="row">
                                            <label class="tp-payment-alt">
                                                <input type="radio" name="payment_method" id="razorpay" value="razorpay" disabled/> 
                                               <span>
                                                {/* <!-- {{url('profile')}}/img/all-credit-card.png --> */}
                                                   <img src="assets/img/all-credit-card.png" alt="MasterCard" class="checkout-img"/>
                                                </span>
                                               <p>Pay securely by <b>Credit</b> / <b>Debit Card</b> / <b>Net Banking</b> / <b>UPI</b>/ Other </p>
                                            </label>											
                                        </div>
                                        <div class="clear"></div>
                                        <div class="row stripe_button">
                                            <label class="tp-payment-alt">
                                                <input type="radio" name="payment_method" id="stripe" value="stripe"/>
                                                <label htmlFor="stripe">
                                                    {/* <!-- {{url('profile')}}/img/cash.png --> */}
                                                <img width="45px" height="35px" src="assets/img/cash.png" class="stripe-gateway-icon" alt="Stripe Tutorialspoint"/>
                                                </label>
                                                <p>Pay  with <b>Cash. </b><input id="ticket-quantity cash" name="cash" type="number" min="10" class="money-pay" placeholder="How much?"/> </p>
                                            </label>
                                        </div>                            
                                            <div class="clear"></div>
                                        </div>
                                    </div>
                                <div class="col-md-12 col-sm-12 summary-checkout">
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-checkout checkout">Checkout</button>
                                        <button type="button" class="btn btn-checkout" value="cancelPayment">Cancel</button>
                                    </div>
                                </div>
                            </form>                        
                    </div>                                
                </div>
            </div>
        </div>
    </div>
        </IconContext.Provider>
    );
   
}
export default Profile;