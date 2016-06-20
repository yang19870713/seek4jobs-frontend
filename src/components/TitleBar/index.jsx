import style from "./title-bar.scss";

export default class TitleBar extends React.Component{
    render() {
        return (
            <div className={style.titleBar}>
                <ul className={style.nav}>
                    <li className={style.navTab}>
                        <i className="fa fa-line-chart"></i>
                        {" "}Area trend
                    </li>
                    <li className={style.navTab}>
                        <i className="fa fa-stack-exchange"></i>
                        {" "}Skill stack
                    </li>
                </ul>
            </div>

        );
    }
}
