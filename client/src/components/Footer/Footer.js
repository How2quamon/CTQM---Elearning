import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as SlIcons from 'react-icons/sl';
import * as BsIcons from 'react-icons/bs';
import { IconContext } from "react-icons";
import './Footer.css';
import CVT from '../../img/footer/CaoVietThang.jpg';
import DN from '../../img/footer/DucNhat.jpg';
import TL from '../../img/footer/ThuyLinh.jpg';
import TriLe from '../../img/footer/TriLe.png';
import Tram from '../../img/footer/Tram.jpg';
import VN from '../../img/footer/VuongNghia.jpg';

const Footer = () => {
    return (
        <IconContext.Provider value={{ color: '#EB9762', size: '20px' }}>
            <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-md-3">
                            <h3>CTQM Group</h3>
                            <p>Class code: COMP103101 – CÔNG NGHỆ WEB</p>
                            <p>Instructor: Mr Lương Tran Hy Hien (HIENLTH)</p>
                        </div>
                        <div class="col-sm-4">
                            <h3> Reference Links</h3>
                            <ul>
                                <li><a href="https://www.tutorialspoint.com/index.htm">Tutorials Point</a></li>
                                <li><a href="https://www.codecademy.com/">Code Academy</a></li>
                            </ul>
                        </div>
                        <div class="col-sm-4 col-md-2">
                            <h3>Languages</h3>
                            <ul>
                                <li><a href="#">C/C++</a></li>
                                <li><a href="#">Python</a></li>
                                <li><a href="#">JavaScript</a></li> 
                                <li><a href="#">PHP</a></li> 
                            </ul>
                        </div>
                        <div class="col-md-6 col-md-2">
                            <h3> Contact Us</h3>
                            <div class="contact">
                                <FaIcons.FaEnvelope/>
                                <span>Ho Chi Minh University of Education</span>
                            </div>
                        </div>
                        <div class="social">
                        <h3>About us</h3>
                            <a href="https://johantt.github.io/First-CV/" target="_blank"><img src={CVT} id="profile"/></a>
                            <a href="https://leanhtri2908.github.io/CV-C-Nh-n/?fbclid=IwAR31BWbju8QpSDBtVfNBwH9ac1GCp0ofEx7s54GHhYaPzoaKhZMP9586B5Q" target="_blank"><img src={TriLe} id="profile"/></a>
                            <a href="https://nghia2510.github.io/CV.Nghia-sama.1.0/" target="_blank"><img src={VN} id="profile"/></a>
                            <a href="https://fontaine07.github.io/cv-midterm/" target="_blank"><img src={Tram} id="profile"/></a>
                            <a href="https://nttl-3010.github.io/CV-TL/" target="_blank"><img src={TL} id="profile"/></a>
                            <a href="https://nguyenducnh142.github.io/cv/CV.html?fbclid=IwAR0thWx4I01OOfxBVA01mRmO6ojivRAhqBM_w6zBs1L3Q_28CWnYxBzoHGo" target="_blank"><img src={DN} id="profile"/></a>
                        </div>
                    </div>
                    <p class="copyright"> &copy; <i>Copyright 2022. All rights reserved.</i></p>
                </div>
            </div>
        </IconContext.Provider>
    )
}

export default Footer;