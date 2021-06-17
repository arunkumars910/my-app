import React, { Component } from "react";
import TableData from "./TableData";

class ReactFragments extends Component {
  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <TableData />
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default ReactFragments;
