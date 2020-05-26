import React from "react";
import styled from "styled-components";

export const History = ({ history }) => {
  return (
    <HistoryStyled>
      <caption>history</caption>
      <thead>
        <tr>
          <th>original</th>
          <th>translation</th>
        </tr>
      </thead>
      <tbody>
        {history.map((item, i) => (
          <tr key={i}>
            <th>{item.question}</th>
            <th>{item.transQuestion}</th>
          </tr>
        ))}
      </tbody>
    </HistoryStyled>
  );
};

const HistoryStyled = styled.table`
  border-collapse: collapse;
  border: 1px solid #e5e5e5;
  caption {
    text-transform: uppercase;
    padding: 20px 0;
  }
  thead {
    text-transform: uppercase;
    border: 1px solid #e5e5e5;
  }
  th {
    border-right: 1px solid #e5e5e5;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
