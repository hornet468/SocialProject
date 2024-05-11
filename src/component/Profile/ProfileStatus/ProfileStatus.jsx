import React from "react";
import Profile from "../Profile";
import classes from "./ProfileStatus.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
  };

  activeEditMode() {
    this.setState({
      editMode: true,
    });
  }
  deactiveEditMode() {
    this.setState({
      editMode: false,
    });
  }
  render() {
    return (
      <>
        <div>
          <h1>Status</h1>
        </div>
        <div className={classes.status}>
          <div>
            {!this.state.editMode && (
              <div>
                <span onDoubleClick={this.activeEditMode.bind(this)}>
                  {this.props.status}
                </span>{" "}
              </div>
            )}
          </div>
          <div>
            {this.state.editMode && (
              <div>
                <input
                  autoFocus={true}
                  onBlur={this.deactiveEditMode.bind(this)}
                  value={this.props.status}
                />
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default ProfileStatus;
