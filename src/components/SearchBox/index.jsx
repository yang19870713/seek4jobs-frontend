import style from './search-box.scss';
import classnames from "utils/classnames";

export default class SearchBox extends React.Component {
    render(){
        return (
            <div>
                <div className={style.btnGrp}>
                    <div className={classnames(style.btn, style.active)}>
                        <i className="fa fa-line-chart"></i>
                    </div>
                    <div className={style.btn}>
                        <i className="fa fa-stack-exchange"></i>
                    </div>
                </div>
                <form className={style.searchBox}
                    action="" name="trend" role="form">
                    <input id="keyword" type="text"
                            className={style.input}
                            placeholder="Key words"/>
                    <input id="location" type="text"
                            className={style.input}
                            placeholder="Location"/>
                    <input id="period" type="text"
                            className={style.input}
                            placeholder="Period"/>
                    <input className={style.submit}
                        type="submit" value="Search"/>
                    {/*<input className={style.submit}
                        type="submit" value="Search"/>*/}
                </form>
                <div className={style.slogon}>
                    <p>
                        A place
                    </p>
                    <p>
                        for a better career.
                    </p>
                </div>
            </div>
        );
    }
}
