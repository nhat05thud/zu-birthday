import React, { Component } from 'react';
import { appendScript } from './appendScript';
import CardComponent from './CardComponent';

class SlideComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowCard: false
        }
        this.HandleClickCard = this.HandleClickCard.bind(this);
    }
    HandleClickCard(e) {
        this.setState((prevState) => {
        return { 
            isShowCard: !prevState.isShowCard
        }
        });
    }
    componentDidMount() {
        appendScript("libs/backgroundLove.js");
        appendScript("libs/main.js");
    }
    render() {
        return (
            <div className="slide-wrapper">
                <canvas id="heart-canvas" width="550" height="500"></canvas>
                <div className="slide-content">
                    <h1>HAPPY BIRTHDAY <br /> ♥ MY WIFE ♥</h1>
                    <div id="zu-carousel" className="owl-carousel">
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic01.jpg" data-caption="Chụp lén Zu tại cầu treo Buôn Đôn">
                                <img src="images/img-resize/pic01.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic02.jpg" data-caption="Chụp lén Zu tại cầu treo Buôn Đôn (tấm hình ưng ý nhất)">
                                <img src="images/img-resize/pic02.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic03.jpg" data-caption="Zu tại tháp Thiền Y Thánh Mẫu Nha Trang">
                                <img src="images/img-resize/pic03.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic04.jpg" data-caption="Zu tại viện hải dương học Nha Trang">
                                <img src="images/img-resize/pic04.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic05.jpg" data-caption="Zu tại viện hải dương học Nha Trang">
                                <img src="images/img-resize/pic05.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic06.jpg" data-caption="Zu tại chùa Long Sơn Nha Trang">
                                <img src="images/img-resize/pic06.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic07.jpg" data-caption="Zu tại chùa Long Sơn Nha Trang">
                                <img src="images/img-resize/pic07.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic08.jpg" data-caption="Zu tại chùa Long Sơn Nha Trang">
                                <img src="images/img-resize/pic08.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic09.jpg" data-caption="Zu và Nhật cùng ngắm biển Nha Trang">
                                <img src="images/img-resize/pic09.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic10.jpg" data-caption="Zu tạo dáng trên xe 'Người lạ ơi'">
                                <img src="images/img-resize/pic10.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic11.jpg" data-caption="Zu chụp cảnh so deep tại hồ Tuyền Lâm">
                                <img src="images/img-resize/pic11.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic12.jpg" data-caption="Zu chụp cảnh tại đồi cỏ hồng Đà Lạt">
                                <img src="images/img-resize/pic12.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic13.jpg" data-caption="Zu: Đưa tay đây nào, mãi bên nhau bạn nhéeeeee !!!">
                                <img src="images/img-resize/pic13.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic14.jpg" data-caption="Zu tặng Nhật vòng tay (mãi nắm tay nhau Zu nhé)">
                                <img src="images/img-resize/pic14.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic15.jpg" data-caption="Zu xinh đẹp đi dự đám cưới">
                                <img src="images/img-resize/pic15.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic16.jpg" data-caption="Zu so deep tại Kokoro Cafe Đà Lạt">
                                <img src="images/img-resize/pic16.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic17.jpg" data-caption="Zu và Nhật cùng nhau đi khắp nơi ở Đà Lạt">
                                <img src="images/img-resize/pic17.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic18.jpg" data-caption="Zu và Nhật cùng nhau đi dự đám cưới">
                                <img src="images/img-resize/pic18.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic19.jpg" data-caption="Zu tổ chức sinh nhật đáng nhớ cho Nhật (anh yêu Zuuuuu)">
                                <img src="images/img-resize/pic19.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic20.jpg" data-caption="Zu: ta là Mã Lệ Phi Zu =))))">
                                <img src="images/img-resize/pic20.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic21.jpg" data-caption="Zu: anh anh, chộp cho em tấm hình so deep, chân dài miên man nha anh (và đây là kết quả!)">
                                <img src="images/img-resize/pic21.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic22.jpg" data-caption="Zu và Nhật check-in sống ảo tại Hight River Coffee">
                                <img src="images/img-resize/pic22.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic23.jpg" data-caption="Zu và Nhật check-in sống ảo tại Hight River Coffee">
                                <img src="images/img-resize/pic23.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic24.jpg" data-caption="Zu(chủ đầu tư) xinh đẹp trong buổi sinh nhật của Nhật">
                                <img src="images/img-resize/pic24.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic25.jpg" data-caption="Zu vs Hulk, ai sẽ thắng?">
                                <img src="images/img-resize/pic25.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic26.jpg" data-caption="Zu: anh hổng chịu up hình sinh nhật gì hết :<">
                                <img src="images/img-resize/pic26.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic27.jpg" data-caption="Zu(chủ đầu tư) xinh đẹp trong buổi sinh nhật của Nhật (tập 2)">
                                <img src="images/img-resize/pic27.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic28.jpg" data-caption="Zu và Nhật lần đầu đi Central Market">
                                <img src="images/img-resize/pic28.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic29.jpg" data-caption="Zu và Nhật lần đầu đi Ghiền Đà Lạt">
                                <img src="images/img-resize/pic29.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic30.jpg" data-caption="Zu: em có bất ngờ nhỏ cho anh nè :> ">
                                <img src="images/img-resize/pic30.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic31.jpg" data-caption="Zu và Nhật lần đầu đi Puppy Farm Đà Lạt (được mô phỏng qua tấm hình Zu làm :D)">
                                <img src="images/img-resize/pic31.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic32.jpg" data-caption="Zu: anhhhhhh, nó ít quá àaaaaaaaa (a chế đó, hahaaa)">
                                <img src="images/img-resize/pic32.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic33.jpg" data-caption="Zu và Nhật check-in Ghiền Đà Lạt (được mô phỏng qua tấm hình Zu làm :D)">
                                <img src="images/img-resize/pic33.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic34.jpg" data-caption="Zu: chụp gì nữa đó!!!">
                                <img src="images/img-resize/pic34.png" alt="zu" />
                            </a>
                        </div>
                        <div className="item">
                            <a data-fancybox="gallery" href="images/pic35.jpg" data-caption="Zu: anhhh, ly của em dở quá à, cho em úng đi của anh nhaaaa :> ">
                                <img src="images/img-resize/pic35.png" alt="zu" />
                            </a>
                        </div>
                    </div>
                    {!this.state.isShowCard ?
                    <div className="text-right" title="Click Here!!" onClick={this.HandleClickCard}>
                        <div className="heart"></div>
                    </div>
                    : <CardComponent HandleClickCard = {this.HandleClickCard} />
                    }
                </div>
            </div>
        )
    }
}
export default SlideComponent;