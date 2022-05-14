import React from 'react';
import {Button, Menu , Typography , Avatar , Row , Col} from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined , FundOutlined , MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png';
import { useEffect, useState } from 'react';


const Navbar = () => {

    const [activeMenu , setActiveMenu] = useState(true);
    const [screenSize , setScreenSize] = useState(null);

    useEffect(()=>{
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize',handleResize);
        handleResize();
        return () =>window.removeEventListener('resize',handleResize);

    },[]);

    useEffect(() => {
        if (screenSize <= 800) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [screenSize]);

    return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size = "large" />
            <Typography.Title level={2} className="logo">
                <a href='/'>CryptoDen</a>
            </Typography.Title>
            <Button className='menu-control-container' onClick={()=>setActiveMenu(!activeMenu)}>
                <MenuOutlined/>
            </Button>
        </div>
        
        {activeMenu && (
            <Menu style={{backgroundColor:'#0c0720'}} theme="dark">
            <Menu.Item icon = {<HomeOutlined/>}>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon = {<FundOutlined/>}>
                <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon = {<BulbOutlined/>}>
                <Link to='/news'>News</Link>
            </Menu.Item>
            </Menu>
        )}
        
    </div>
  )
}

export default Navbar