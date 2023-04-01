import './Header.css';
import React from 'react';


const Header = () => {
    return (
        <div>
          <nav className="navbar container navbar-expand-lg bg-body-tertiary  pt-4 border-bottom">
                <div className="container d-flex justify-content-between   ">
                    <div className=''>
                    <a className="navbar-brand fw-bold fs-2" href="#">Knowledge Cafe</a>
                    </div>
                
                    
                   <div>
                   <ul className="navbar-nav ">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">FAQ</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link " href="#">Contact</a>
                            </li>
                            <li>
                                
                                <img className='profile-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqHzl15EKCE-_soR9ce9QZoXctWg0Yp0atrlay25j95NKu4g81kTahV6gE6cOPF1arBFI&usqp=CAU" alt="" />
                            </li>
                        </ul>
                    
                   </div>
                </div>
        </nav>
        
            
        </div>
        
    );
};

export default Header;