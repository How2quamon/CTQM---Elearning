import React from "react";
import '../css/Instruct.css';
import '../css/star.css';

const Introduct = () => {
    var setStar = document.querySelectorAll('input[name="rating"]');
    for (let i = 0; i < setStar.length; i++) {
        // if (setStar[i].value == {{$userStar}}) setStar[i].setAttribute("checked", "checked");
    }
    return(
        <div class="main">
        @foreach ($data as $instructor) 
        <div class="main-profile">
            <div class="profile">
                <div class="avatar-img">
                    {/* <img class="avatar" src="{{url('profile')}}/img/Instructor.jpg"> */}
                </div>
                <div class="my-infor">
                    {/* <p>{{$instructor->user_name}}</p> */}
                </div>
                <div class="my-follow">
                    {/* <a class="infor" href=""><i class="ti-bookmark-alt"></i> {{$total}} Packs</a> */}
                </div>
                <label class="rating-label"> 
                    {/* <strong>Average rating is {{$star}} <code>readonly</code></strong> */}
                    <input
                                class="rating"
                                max="5"
                                readonly
                                step="0.01"
                                style="--fill:rgb(159, 87, 87);--value:{{$star}}"
                                type="range"
                                value="{{$star}}"/>
                </label>
                <div class="title">Rating Instructor</div>
                <form action="{{url('/ratingIns')}}/{{$instructor->id}}" method="post">
                        @csrf
                        @if (session('ratingSuccessed'))
                            <div class="alert alert-success" role="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                {/* {{ session('ratingSuccessed') }} */}
                            </div>
                        @endif
                        @if (session('ratingFailed'))
                            <div class="alert alert-danger" role="alert">
                                <button type="button" class="close" data-dismiss="alert">×</button>
                                {/* {{ session('ratingFailed') }} */}
                            </div>
                        @endif
                        <button type="submit">Rating</button>
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
            <div class="right_inner">
                    <div class="exp goal">
                        <div class="title">
                            Courses
                        </div>
                    @foreach ($pack as $item)
                    <div class="source">
                        <div id="right_video">
                            <a href="{{url('ctqm-pack')}}/{{$item->id}}">
                                <div id="right_video_tag">
                                    <font id="right_video_font">
                                        {/* {{$item->packs_name}} */}
                                    </font>
                                </div>
                            </a>
                                <div class="video">
                                    <div class="video_descrip">
                                        <span class="Label Label--secondary v-align-middle ml-1">
                                            {/* @if ($item->price == 0) Free
                                            @else {{$item->price}}
                                            @endif */}
                                        </span>
                                    </div>
                                        <div class="more_details">
                                            <div class="more_details_1">
                                                <font class="video_details">
                                                    {/* Lectures: {{$item->lectures}} | Time complete: {{$item->time_cpl}}hr */}
                                                </font>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>
        @endforeach
        </div>    
    );
}
export default Introduct;