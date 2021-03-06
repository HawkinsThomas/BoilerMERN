import React from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import 'css/bootstrap.min.css';
import 'css/login.css';

const navItems = [
  {
    name: 'Home',
    isActive: false,
    href: '/',
  },
  {
    name: 'Login',
    isActive: true,
    href: '/login.html',
  },
  {
    name: 'Register',
    isActive: false,
    href: '/register.html',
  },
];

ReactDOM.render(<Menu items={navItems} />, document.getElementById('menu'));
