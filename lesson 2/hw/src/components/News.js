import NewsTemplate from "./NewsTemplate"
import strat from "../imgs/strat.jpg"
import win from "../imgs/win.jpg"
import lab from "../imgs/lab.jpg"

const News = () => {
    return(
        <div id="news_div">
            <NewsTemplate img={lab} desc="პირველი კვანტური ლაბორატორია საქართველოში"/>
            <NewsTemplate img={win} desc="სამეცნიერო კიბერ უსაფრთხოების ასოციაციის გუნდის კიდევ ერთი წარმატება"/>
            <NewsTemplate img={strat} desc="ნდობა და მედეგობა შავი ზღვის რეგიონის დომენურ სისტემაში: IDN-ის, DNS-ისა და gTLD-ის უსაფრთხოების გაძლიერება"/>
        </div>
    )
}

export default News