import { BsInstagram, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer>
            <h2>Enjoy Travel</h2>
            <h2>HEllo</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum corrupti provident repudiandae ducimus voluptas dolorem? Dolore ea perferendis eaque. Maxime delectus neque quae saepe voluptatibus tenetur ab harum aliquid cupiditate error commodi vero quis, nostrum asperiores, nobis accusantium sed reprehenderit dolorum explicabo eum temporibus! Fuga consectetur iure facere enim facilis!</p>
            <div className="social">
                <div className="social-media">
                    <BsInstagram />
                    <BsLinkedin />
                    <BsTwitter />
                    <FaFacebookSquare />
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/640px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="" />
            </div>
            <p>&copy; All rights are reserved 2022-2023</p>
        </footer>
    )
}