import { RiFacebookFill, RiInstagramLine, RiYoutubeFill } from 'react-icons/ri';
import './socialButton.scss';

const SocialButton = () => {
  return (
    <nav className="socialLinks">
      <ul>
        <li>
          <a href="https://www.facebook.com/serjqaziphotograhpy" rel="noopener noreferrer" target="_blank">
            <i aria-hidden="true">
              <RiFacebookFill />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/serjqazi_photography/" rel="noopener noreferrer" target="_blank">
            <i aria-hidden="true">
              <RiInstagramLine />
            </i>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/@serjqaziphotography" rel="noopener noreferrer" target="_blank">
            <i aria-hidden="true">
              <RiYoutubeFill />
            </i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SocialButton;
