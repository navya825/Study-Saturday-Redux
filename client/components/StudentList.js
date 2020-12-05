import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchStudents } from "../redux/store";

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.getStudents(); //
  }

  render() {
    return (
      <ul>
        {this.props.studentList.map((student) => (
          <li key={student.id}>
            <div>
              <p>
                Name: {student.fullName}
                <Link> View Detail </Link>
              </p>
              <p>
                Email: {student.email}
                <Link>View Detail</Link>
              </p>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.students,
  };
};

const mapDisptachToProps = (dispatch) => {
  return {
    getStudents: () => dispatch(fetchStudents()),
  };
};

const studentListConnector = connect(
  mapStateToProps,
  mapDisptachToProps
)(StudentList);

export default studentListConnector;
