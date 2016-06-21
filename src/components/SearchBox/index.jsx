import style from './search-box.scss';


export default class SearchBox extends React.Component {
    render(){
        return (
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
                    type="submit" value="Submit"/>
            </form>
        );
    }
}
