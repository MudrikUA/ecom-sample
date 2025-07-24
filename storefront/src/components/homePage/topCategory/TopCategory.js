import styles from "./TopCategory.module.css";
import ContentLayout from '../../layout/ContentLayout.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customSliderStyle.css";


const img = "https://plus.unsplash.com/premium_photo-1681324259575-f6ad9653e2fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const mock = [
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
    { imgSrc: img, header: "Heritage", text: "Create magic!" },
]


export default function TopCategory(props) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        navigation: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                }
            }
        ]
    };

    return <ContentLayout>
        <section id="benefits_section" className={styles.top_category_container}>
            <p className={styles.header}>Top Category</p>
            <Slider {...settings}>
                {
                    mock.map((item) => {
                        return <a href="#"><div className={styles.top_category_tile}>
                            <div className={styles.top_category_tile_container}>
                                <img className={styles.top_category_img} src={item.imgSrc}
                                    alt={item.header} width={148} height={128} />
                                <div className={styles.top_category_group} >
                                    <p className={styles.top_category_title}>{item.header}</p>
                                    <p className={styles.top_category_text}>{item.text}</p>
                                </div>
                            </div>
                        </div>  </a>
                    })
                }
            </Slider>
        </section>
    </ContentLayout>;
}

