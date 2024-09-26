import React from 'react'
import "./Css/Footer.css"
export const Footer = () => {
  return (
    <footer>
    <div class="footer-container">

      
      <div class="footer-section about">
        <h2>About Us</h2>
        <p>We are a leading property renting platform, helping you find the best homes, offices, and apartments. We connect property owners with renters, ensuring a seamless experience.</p>
      </div>

      
      <div class="footer-section links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Properties</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Terms of Service</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>

      
      <div class="footer-section contact">
        <h2>Contact Us</h2>
        <ul>
          <li><i class="fas fa-map-marker-alt"></i> 123 Real Estate St, Kolkata, India</li>
          <li><i class="fas fa-phone-alt"></i> +91 12345 67890</li>
          <li><i class="fas fa-envelope"></i> info@propertyrenting.com</li>
        </ul>
      </div>

      
      <div class="footer-section social">
        <h2>Follow Us</h2>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>

    </div>

    
    <div class="footer-bottom">
      <p>&copy; 2024 Property Renting | All Rights Reserved</p>
    </div>
  </footer>

  )
}
