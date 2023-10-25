import PropTypes from "prop-types";

export const Students = ({values}) => {
  console.log(values);
  return (
    <div>
      <h3>Students Semos Academy</h3>
      <table className="table" cellSpacing={25} cellPadding={2} >
        <thead >
          <tr>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>INDEX NO.</th>
          </tr>
        </thead>
        <tbody>
          {values.map((value, i) => {
            return (
              <tr key={i}>
                <td>{value.name}</td>
                <td>{value.surname}</td>
                <td>{value.indexnumber}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Students.propTypes = {
  value: PropTypes.arrayOf(PropTypes.object).isRequired,
};


