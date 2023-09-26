import React from "react";

export class CommentClass extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table>
          <tbody>
            {this.props.comments.map((object, index) => {
              // Function for consoling the author of the comment
              const click = () => {
                console.log(`Comment of ${object.author} is liked`);
              };

              return (
                <tr key={index}>
                  <td>ID of the user is: {object.id}</td>
                  <td>Author of the comment is: {object.author}</td>
                  <td>Text of the comment: {object.text}</td>
                  <td>
                    <button onClick={click}>LIKE</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
