import React from "react";
import "./HomePage.css";


const MenuList = () => {
  const menuItems = [
    
  ];

  return (
    <div className="menu-list">
      <h2></h2>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="home-page">
      <h1 className="title">Welcome to Restaurant GELEGAR</h1>
      <img
        src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Restaurant GELEGAR"
        className="img-gelegar"
      />
      <MenuList />
    </div>
  );
};


export default HomePage;