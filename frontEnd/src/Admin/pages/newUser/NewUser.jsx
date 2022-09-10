import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import styles from "./newUser.module.css";

export default function NewUser() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="newUser">
          <h1 className={styles.newUserTitle}>New User</h1>
          <form className={styles.newUserForm}>
            <div className={styles.newUserItem}>
              <label>Username</label>
              <input type="text" placeholder="john" />
            </div>
            <div className={styles.newUserItem}>
              <label>Full Name</label>
              <input type="text" placeholder="John Kabera" />
            </div>
            <div className={styles.newUserItem}>
              <label>Email</label>
              <input type="email" placeholder="john@gmail.com" />
            </div>
            <div className={styles.newUserItem}>
              <label>Password</label>
              <input type="password" placeholder="password" />
            </div>
            <div className={styles.newUserItem}>
              <label>Phone</label>
              <input type="text" placeholder="+25 080 480 41" />
            </div>
            <div className={styles.newUserItem}>
              <label>Address</label>
              <input type="text" placeholder="Kigali | RWANDA" />
            </div>
            <div className={styles.newUserItem}>
              <label>Role</label>
              <select className={styles.newUserSelect} name="role" id="role">
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className={styles.newUserItem}>
              <label>Gender</label>
              <div className={styles.newUserGender}>
                <input type="radio" name="gender" id="male" value="male" />
                <label for="male">Male</label>
                <input type="radio" name="gender" id="female" value="female" />
                <label for="female">Female</label>
                <input type="radio" name="gender" id="other" value="other" />
                <label for="other">Other</label>
              </div>
            </div>
            <div className={styles.newUserItem}>
              <label>Active</label>
              <select className={styles.newUserSelect} name="active" id="active">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <button className={styles.newUserButton}>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}
