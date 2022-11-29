import React from "react";
import '../css/VideoCourse.css';

const VideoCourse = () => {
    return (
    <div id="content">
        <div class="banner">
            <div class="banner__details">
                <h1><a href="{{$pack->packs_name}}"></a></h1>
                <div class="banner__subtitle">
                    <p><a href="{{$pack->punch_line}}"></a></p>
                    {/* @if ($check == NULL) 
                    <form action="{{url('/add-pack')}}/{{$pack->id}}" method="post">
                        @csrf
                        @if($pack->price > 0)
                        <button>Get pack with {{$pack->price}} US$</button>
                        @else
                        <button>Get pack for FREE</button>
                        @endif
                    </form>
                    @else 
                        <button class="letgo-btn">Let's go!</button>
                    @endif
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        {{ session('status') }}
                    </div>
                    @elseif(session('failed'))
                    <div class="alert alert-danger" role="alert">
                        <button type="button" class="close" data-dismiss="alert">×</button>
                        {{ session('failed') }}
                    </div>
                    @endif */}
                </div>
            </div>
        </div>
        <div class="course__video">
            <div class="course__content--button">
                <button class="syllabus run">
                    <h2>Overview</h2>
                </button>

                <button class="overview">
                    <h2>Syllabus</h2>
                </button>
            </div>
            <div class="course__content--wrapper">
                <div class="course__content--overview">
                    <h4>Introduct</h4>
                    <p><a href="{{$pack->introduct}}"></a></p>
                    <h4>Why Should you get this Prime Pack</h4>
                    <p><a href="{{$pack->whyshould}}"></a></p>
                    <h4>Goals</h4>
                    <p><a href="{{$pack->goals}}"></a></p>
                    {/* @foreach($instructor as $instructor) */}
                    <h4>Instructor</h4>
                    
                    {/* <h5><a href="{{url('/instructor')}}/{{$instructor->id}}">{{$instructor->user_name}}</a></h5> */}
                    <label class="rating-label"> <strong>Average rating is  <code>readonly</code></strong>
                                <input
                                class="rating"
                                max="5"
                                readonly
                                step="0.01"
                                style="--fill:rgb(159, 87, 87);--value:{{$instrucStar}}"
                                type="range"
                                value="{{$instrucStar}}"/>
                            </label>
                    <p><a href="{{$instructor->introduct}}"></a></p>
                    {/* @endforeach */}
                </div>
                <div class="course__content--packs">
                    {/* @foreach($videoTitle as $item) */}
                    <div class="content__wrapper">
                        <div class="packs__header">
                            <button class="header__wrapper">
                                <h2>
                                    <a href="{{$item->header}}"></a>
                                    <sgv class="view-more fa fa-angle-down" aria-hidden="true"></sgv>
                                </h2>
                                <div class="total-count">
                                    <span>
                                        <a href="{{$item->total}}"></a> Lectures
                                    </span>
                                </div>
                            </button>
                        </div>
                        <div class="packs__list">
                            {/* @foreach($video as $tmp) 
                                @if($tmp->syllabus_id == $item->id) */}
                                <div class="list__items" value="{{$tmp->id}}">
                                    <div class="items__wrapper">
                                        <div class="items__border">
                                            <i class="ti-book"></i>
                                        </div>    
                                    </div>
                                    <a class="items__label">
                                        <div class="label__title">
                                            <span>Video</span>
                                            <span><a href="{{$tmp->Content}}"></a></span>
                                        </div>
                                        {/* @if ($item->stt == 1) 
                                        <div class="video" src="{{url('video')}}/videos/{{$tmp->Content}}.html" muted></div>
                                        @else <div class="video" src="{{url('video')}}/videos/tmp.mp4"></div>
                                        @endif */}
                                    </a>
                                    {/* @if ($check != NULL)
                                        @if ($item->stt < $check[0]['at']) */}
                                            <div class="items__logo" style="background-color: #19a39a !important;">
                                                <span>CTQM</span>
                                            </div>
                                        {/* @elseif ($item->stt == $check[0]['at'] && $tmp->stt < $check[0]['process']) */}
                                            <div class="items__logo" style="background-color: #19a39a !important;">
                                                <span>CTQM</span>
                                            </div>
                                        {/* @else 
                                            <div class="items__logo">
                                                <span>CTQM</span>
                                            </div>
                                        @endif */}
                                    {/* @else 
                                        <div class="items__logo">
                                            <span>CTQM</span>
                                        </div>
                                    @endif */}
                                </div>
                                {/* @endif
                            @endforeach */}
                        </div>
                    </div>
                    <div class="popup-video">
                        <a href="#">
                            <span>&times;</span>
                        </a>
                        <iframe src="#" muted autoplay controls></iframe>
                    </div>
                    {/* @endforeach */}
                </div>
                <div class="course__box--sticky">
                    <aside class="sticky__infoBox">
                        <div class="video__container">
                            <video class="video" src="{{url('video')}}/videos/intro.mp4" pause>
                            </video>
                            <i class="fa fa-play play" aria-hidden="true"></i>
                            <i class="fa fa-pause pause" aria-hidden="true"></i>
                        </div>
                        <p class="infoBox__text">
                            by
                            <span class="logo">CTQM</span>
                        </p>
                        <p class="infoBox__text">
                            Time to Complete
                            <span><a href="{{$pack->time_cpl}}"></a> Hours</span>
                        </p>
                        <p class="infoBox__text">
                            Lectures
                            <span><a href="{{$pack->time_cpl}}"></a></span>
                        </p>
                        <p class="infoBox__text">
                            <label class="rating-label"><strong>Average rating is  <code>readonly</code></strong>
                                <input
                                class="rating"
                                max="5"
                                readonly
                                step="0.01"
                                style="--fill:rgb(159, 87, 87);--value:{{$star}}"
                                type="range"
                                value="{{$star}}"/>
                            </label>
                        </p>
                        <p class="infoBox__text">
                            <span>Prerequisites</span>
                            
                            {/* @if ($pack->pre_3 != NULL)  */}
                                <li><a href="{{$pack->pre_1}}"></a></li>
                                <li><a href="{{$pack->pre_2}}"></a></li>
                                <li><a href="{{$pack->pre_3}}"></a></li>
                            {/* @endif */}
                        </p>
                        <div class="infoBox__text">
                            <form action="{{url('/rating')}}/{{$pack->id}}" method="post">
                                @csrf
                                {/* <!-- rating --> */}
                                <span>Rating pack</span>
                                {/* @if (session('ratingSuccessed'))
                                    <div class="alert alert-success" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        {{ session('ratingSuccessed') }}
                                    </div>
                                @endif
                                @if (session('ratingFailed'))
                                    <div class="alert alert-danger" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        {{ session('ratingFailed') }}
                                    </div>
                                @endif */}
                                <button>Rating</button>
                                <div id="rating">
                                        <input type="radio" id="star5" name="rating" value="5"/>
                                        <label class = "full" for="star5" title="Awesome - 5 stars"></label>

                                        <input type="radio" id="star4half" name="rating" value="4.5" />
                                        <label class="half" for="star4half" title="Pretty good - 4.5 stars"></label>
                                        
                                        <input type="radio" id="star4" name="rating" value="4" />
                                        <label class = "full" for="star4" title="Pretty good - 4 stars"></label>
                                        
                                        <input type="radio" id="star3half" name="rating" value="3.5" />
                                        <label class="half" for="star3half" title="Meh - 3.5 stars"></label>
                                        
                                        <input type="radio" id="star3" name="rating" value="3" />
                                        <label class = "full" for="star3" title="Meh - 3 stars"></label>
                                        
                                        <input type="radio" id="star2half" name="rating" value="2.5" />
                                        <label class="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
                                        
                                        <input type="radio" id="star2" name="rating" value="2" />
                                        <label class = "full" for="star2" title="Kinda bad - 2 stars"></label>
                                        
                                        <input type="radio" id="star1half" name="rating" value="1.5" />
                                        <label class="half" for="star1half" title="Meh - 1.5 stars"></label>
                                        
                                        <input type="radio" id="star1" name="rating" value="1" />
                                        <label class = "full" for="star1" title="Sucks big time - 1 star"></label>
                                        
                                        <input type="radio" id="starhalf" name="rating" value="0.5" />
                                        <label class="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
                                </div>
                            </form>
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
                                        <h5><a href="{{$pack->packs_name}}"></a></h5>
                                    </div>
                                    <div class="d-flex flex-row align-items-center align-content-center post-title"><span class="bdge mr-1">CTQM</span><span class="mr-2 comments"> comments&nbsp;</span><span class="mr-2 dot"></span></div>
                                </div>
                            </div>
                            <div class="coment-bottom bg-white p-2 px-4">
                                <form class="d-flex flex-row add-comment-section mt-4 mb-4" action="{{url('/add-comment')}}/{{$pack->id}}" method="post">
                                    @csrf
                                    <input type="text" class="form-control mr-3" name="content" placeholder="Let everyone know what you think"/>
                                        <button class="btn btn-primary" type="submit">
                                            Comment
                                        </button>
                                </form>
                                {/* @if (session('commentSuccessed'))
                                    <div class="alert alert-success" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        {{ session('commentSuccessed') }}
                                    </div>
                                @endif
                                @if (session('commentFailed'))
                                    <div class="alert alert-danger" role="alert">
                                        <button type="button" class="close" data-dismiss="alert">×</button>
                                        {{ session('commentFailed') }}
                                    </div>
                                @endif */}
                                {/* @foreach($comment as $cmt)  */}
                                <div class="commented-section mt-2">
                                    <div class="d-flex flex-row align-items-center commented-user">
                                        <h5 class="mr-2"><a href="{{$cmt->nick_name}}"></a></h5><span class="dot mb-1"></span>
                                        {/* <!-- <a class="ml-2 mt-1">Edit</a> --> */}
                                    </div>
                                    <div class="comment-text-sm"><span><a href="{{$cmt->content}}"></a></span>
                                    </div>
                                    <div class="reply-section">
                                        <div class="d-flex flex-row align-items-center voting-icons">
                                            <a class="fa fa-sort-up fa-2x mt-3 hit-voting" href="{{url('/increase-vote')}}/{{$cmt->id}}"></a>
                                            <a class="fa fa-sort-down fa-2x mb-3 hit-voting" href="{{url('/decrease-vote')}}/{{$cmt->id}}"></a>
                                            <span class="ml-2">
                                                {/* {{$cmt->vote}} */}
                                            </span><span class="dot ml-2"></span>
                                            {/* @if ($cmt->nick_name == session('username')) */}
                                            <a class="ml-2 mt-1 bdge mr-1" href="{{url('/delete-comment')}}/{{$cmt->id}}">Delete</a>
                                            {/* @endif */}
                                        </div>
                                    </div>
                                </div>
                                {/* @endforeach */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
/* @endforeach */
    )
}

export default VideoCourse;