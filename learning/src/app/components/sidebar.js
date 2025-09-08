import Link from 'next/link';
import React from 'react'
import "../../../public/sass/pages/sidebar.scss";

const SideBar = () => {
  return (
    <div className="bar">
      <ul>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="#">Change Password</Link></li>
        <li><Link href="#">Wishlist</Link></li>
        <li><Link href="#">Log Out</Link></li>
      </ul>
    </div>
  )
}

export default SideBar;