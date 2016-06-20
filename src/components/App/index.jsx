import TitleBar from "components/TitleBar";
import Ads from "components/Ads";
import SearchBox from "components/SearchBox";
import "styles/styles.scss";
import style from "./app.scss";

export default class App extends React.Component {
    render(){
        return (
            <div className={style.app}>
                <TitleBar />
                <Ads />
                <div className={style.workspace}>
                    <div className={style.searchBox}>
                        <SearchBox />
                    </div>
                    <div className={style.banner}>
                    </div>

                </div>
            </div>
        );
    }
}
