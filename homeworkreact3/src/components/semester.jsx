import  PropTypes  from "prop-types"
export const Semester = (props) => {
    
    return (
        <div>
        {props.showSemester ? (
        <div>
         <h1>{props.semesterSummer.semvalue}</h1>
        </div>
      ) : (
        <div>
         <h1>{props.semesterWinter.semvalue}</h1>
        </div>
      )}    
        </div>
    )
};

Semester.propTypes = {
    semesterSummer: PropTypes.object,
    semesterWinter: PropTypes.object,
    showSemester: PropTypes.bool,
}
Semester.defaultProps = {
    showSemester:true,
    semesterSummer:{semvalue:"Winter Semester"}
}
