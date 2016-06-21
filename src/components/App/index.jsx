import TitleBar from "components/TitleBar";
import Ads from "components/Ads";
import SearchBox from "components/SearchBox";
import "styles/styles.scss";
import style from "./app.scss";
import classnames from "utils/classnames";

export default class App extends React.Component {
    render(){
        return (
            <div className={style.navbar}>
                <TitleBar />
            <div className="container">
                <Ads />
                <div className={style.workspace}>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                </div>
            </div>
            </div>
        );
    }
}
