import React from 'react';
import './style.css';
import { Button, Nav, NavItem } from 'react-bootstrap';
import { FaUserFriends } from "react-icons/fa";
import { AiFillPieChart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { FaNotesMedical } from "react-icons/fa";
import { TbDatabaseCog } from "react-icons/tb";
import { RiSettingsFill } from "react-icons/ri";
import img from '../assets/img.PNG'
import {Link,useLocation} from 'react-router-dom'
const Sidebar = (props) => {

    // Function body
    const navigation = [
        {
            title: "Patients",
            href: "/patient",
            icon: <FaUserFriends />,
        },
        {
            title: "Overview",
            href: "/",
            icon: <AiFillPieChart />,
        },
        {
            title: "Map",
            href: "/badges",
            icon: <FaMapMarkerAlt />,
        },
        {
            title: "Departments",
            href: "/buttons",
            icon: <IoMdHome />,
        },
        {
            title: "Doctors",
            href: "/cards",
            icon: <FaNotesMedical />,
        },
        {
            title: "History",
            href: "/grid",
            icon: <TbDatabaseCog />,
        },
        {
            title: "Setting",
            href: "/table",
            icon: <RiSettingsFill />,
        }
    ];
    let location = useLocation();
    return (
        <>
            <div className='sideContainer'>
                <div className='sideLogo'>
                    <h3>LOGO</h3>
                </div>
                <div className='sideRegi'>
                    <Button className='sideBtn'>Register patient{'  '} +</Button>
                </div>
                <div>
                    <Nav vertical>
                        {navigation.map((navi, index) => (
                            <NavItem key={index} className="sidebarNav">
                                <Link
                                    to={navi.href}
                                    className={
                                        location.pathname === navi.href
                                            ? "text-primary nav-link py-3"
                                            : "nav-link text-secondary py-3"
                                    }
                                >
                                    <span className='naviIcon'>{navi.icon}</span>
                                    <span className="naviTitle">{navi.title}</span>
                                </Link>
                            </NavItem>
                        ))}
                    </Nav>
                </div>

                <div style={{ marginTop: '20px' }}>
                    <img src={img}></img>
                </div>
            </div>
        </>

    );
};

export default Sidebar;