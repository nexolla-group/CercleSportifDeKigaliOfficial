import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featured/FeaturedInfo";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetsm/WidgetSm";
import { userData } from "../../dummyData/userData";
import styles from "./home.module.css";

export default function HomeAdmin() {
  return (
    <>
      <Topbar />
      <div className="container">
        {/* <Sidebar /> */}
        <div className={styles.home}>
          {/* <FeaturedInfo /> */}
          {/* <Chart
            data={userData}
            title="User Analytics"
            grid
            dataKey="Active User"
          /> */}
          <div className={styles.homeWidgets}>
            {/* <WidgetSm /> */}
            {/* <WidgetLg /> */}
          </div>
        </div>
      </div>
    </>
  );
}
