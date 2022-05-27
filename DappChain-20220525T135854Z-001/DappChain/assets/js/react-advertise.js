class SwitchAdvertisement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Head Banner Description",
            description: "Our head banners provide an easy way to catch the eye of your audience. They are highly visible on the top level of the user's screen.",
            sizes: "300x250 | 728x90 | 160x600 | 320x100 | 300x600 | 320x50",
            image: "top-ads.png"
        }
        // This binding is necessary to make `this` work in the callback
        this.handleCenterClick = this.handleCenterClick.bind(this);
        this.handleHeaderClick = this.handleHeaderClick.bind(this);
    }
    handleHeaderClick = (e) => {
        e.preventDefault();
        this.setState({
            title: "Head Banner Description",
            description: "Our head banners provide an easy way to catch the eye of your audience. They are highly visible on the top level of the user's screen.",
            sizes: "300x250 | 728x90 | 160x600 | 320x100 | 300x600 | 320x50",
            image: "top-ads.png"
        });
    };
    handleCenterClick = (e) => {
        e.preventDefault();
        this.setState({
            title: "Center Banner Description",
            description: "In center banner it will allow you to put two banner in the center of the website that will catch the interest of a lot of audience.",
            sizes: "300x250 | 728x90 | 160x600 | 320x100 | 300x600 | 320x50",
            image: "middle-ads.png"
        });
    };
    handleStickyClick = (e) => {
        e.preventDefault();
        this.setState({
            title: "Sticky Banner Description",
            description: "Sticy banner placed on the bottom of the screen, the sticky banner is visible and will only appear when visitors scroll the page. Place in best part of the website where audience visit more often.",
            sizes: "300x250 | 728x90 | 160x600 | 320x100 | 300x600 | 320x50",
            image: "bottom-ads.png"
        });
    };

    render() {
        return (
            <div>
                <div className="side-nav-main d-flex-center">
                    <aside className="sidebar pro-w-30">
                        <div className="side-nav">
                            <ul>
                                <li className="active"><a onClick={this.handleHeaderClick} href="">Header Banner</a></li>
                                <li><a onClick={this.handleCenterClick} href="">Center Banner</a></li>
                                <li><a onClick={this.handleStickyClick} href="">Sticky Banner</a></li>

                            </ul>
                        </div>
                    </aside>
                    <div className="sidebar-right d-flex-justify-space-between pro-w-70 bg-white">
                        <div className="pro-w-45 pro-pad-2">
                            <img src={`assets/img/${this.state.image}`} width="100%" alt="" />
                        </div>
                        <div className="pro-w-45 pro-pady-3 pro-marx-2 theme-color-blue">
                            <div className="ads-sample-description">
                                <h4>{this.state.title}</h4>
                                <p>{this.state.description}</p>
                            </div>
                            <div className="ads-sample-size">
                                <h4>Banner Sizes:</h4>
                                <p>{this.state.sizes}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('ads-container'));
const element = <SwitchAdvertisement />;
root.render(element);