import React from 'react';
import { Input, Button } from 'antd';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-top'>
          <div className='footer-section footer-navigation'>
            <h2 className='title'>Navigation</h2>
            <div className='navigation'>
              <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our teams</li>
              </ul>
              <ul>
                <li>Whitepaper</li>
                <li>Marketplace</li>
                <li>Roadmap</li>
              </ul>
              <ul>
                <li>FAQs</li>
                <li>News</li>
                <li>Community</li>
              </ul>
            </div>
          </div>
          <div className='footer-section'>
            <h2 className='title'>Contact Us</h2>
            <p>
              <PhoneOutlined /> 01234568910
            </p>
            <p>
              <MailOutlined /> tymex-talent@tyme.com
            </p>
          </div>
          <div className='footer-section subscribe-section'>
            <h2 className='title'>Subscribe to receive our latest update</h2>
            <div className='subscribe-form'>
              <Input placeholder='Your email address' size='large' className='subscribe-input' />
              <Button type='primary' size='large' className='button'>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <p>©2023 Tyme - Edit. All Rights reserved.</p>
          <p className='footer-links'>
            <span>Security</span>
            <span>Legal</span>
            <span>Privacy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
