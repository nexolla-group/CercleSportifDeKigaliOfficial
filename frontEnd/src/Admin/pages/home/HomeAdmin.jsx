import Topbar from "../../components/topbar/Topbar";
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
