import { Menu, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';
import banner from '../../assets/images/banner.svg';
import React from 'react';

const Header: React.FC = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'English',
    },
    {
      key: '2',
      label: 'Vietnamese',
    },
  ];

  return (
    <div className='header-container'>
      <div className='header'>
        <div className='container flex-between'>
          <div className='header-nav'>
            <Menu mode='horizontal' defaultSelectedKeys={['4']} className='menu'>
              <Menu.Item key='1'>Home</Menu.Item>
              <Menu.Item key='2'>About Us</Menu.Item>
              <Menu.Item key='3'>Our Teams</Menu.Item>
              <Menu.Item key='4' className='market-place'>
                Marketplace
              </Menu.Item>
              <Menu.Item key='5' className='roadmap'>
                Roadmap
              </Menu.Item>
              <Menu.Item key='6'>Whitepaper</Menu.Item>
            </Menu>
          </div>
          <div className='header-actions'>
            <Button type='primary' className='button'>
              Connect Wallet
            </Button>
            <Dropdown menu={{ items }} placement='bottomRight'>
              <div className='header-language'>
                <Button type='text' icon={<GlobalOutlined />} style={{ color: 'white' }} />
                <Button type='text' icon={<DownOutlined />} style={{ color: 'white' }} />
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <img src={banner} className='App-banner' alt='banner' />
    </div>
  );
};

export default Header;
