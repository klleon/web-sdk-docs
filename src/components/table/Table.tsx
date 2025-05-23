import React from "react";
import styles from "./styles.module.css"; // CSS Modules 사용

export interface Column {
  header: string; // 데이터 객체의 키
  label: string; // 테이블 헤더에 표시될 텍스트
}

export interface TableProps<T extends { [key: string]: any }> {
  // T의 타입을 좀 더 명시적으로
  data: T[];
  columns: Column[];
}

const isEmpty = (value?: any) => {
  return value === undefined || value === null || value === "";
};

const formatText = (text: string) => {
  // 백틱으로 감싸진 부분을 <code>로 변환
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, index) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    // \n을 <br />로 변환하는 로직 추가
    return part.split("\n").map((line, lineIndex, arr) => (
      <React.Fragment key={`${index}-${lineIndex}`}>
        {line}
        {lineIndex < arr.length - 1 && <br />}
      </React.Fragment>
    ));
  });
};

export const Table = <T extends { [key: string]: any }>({
  data,
  columns,
}: TableProps<T>) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index} className={styles.th}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, cellIndex) => (
                <td key={cellIndex} className={styles.td}>
                  {isEmpty(row[column.header])
                    ? "-"
                    : formatText(String(row[column.header]))}{" "}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
