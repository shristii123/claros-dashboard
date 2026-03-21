import React from 'react';
import './DataTable.css';

interface Column<T> {
  key: keyof T | string;
  label: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  onSearchChange: (val: string) => void;
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  title: string;
}

function DataTable<T extends { id: number }>({
  columns, data, loading, error, searchTerm, onSearchChange,
  currentPage, pageSize, totalItems, onPageChange, onPageSizeChange, title,
}: DataTableProps<T>) {
  const totalPages = Math.ceil(totalItems / pageSize);

  const getCellValue = (item: T, col: Column<T>): React.ReactNode => {
    if (col.render) return col.render(item);
    const keys = (col.key as string).split('.');
    let val: any = item;
    for (const k of keys) val = val?.[k];
    return String(val ?? '—');
  };

  return (
    <div className="table-wrapper">
      <div className="table-header">
        <h2 className="table-title">{title}</h2>
        <div className="table-controls">
          <div className="search-box">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button className="clear-btn" onClick={() => onSearchChange('')}>✕</button>
            )}
          </div>
          <select
            className="page-size-select"
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[5, 10, 20].map((s) => (
              <option key={s} value={s}>{s} / page</option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <div className="error-banner">
          <span>⚠</span> {error}
        </div>
      )}

      {loading ? (
        <div className="loading-state">
          <div className="spinner" />
          <p>Loading data...</p>
        </div>
      ) : (
        <>
          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  {columns.map((col) => (
                    <th key={col.key as string}>{col.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="empty-cell">
                      No results found.
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr key={item.id}>
                      {columns.map((col) => (
                        <td key={col.key as string}>{getCellValue(item, col)}</td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="pagination">
            <span className="page-info">
              Showing {totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1}–
              {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
            </span>
            <div className="page-btns">
              <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className="page-btn"
              >«</button>
              <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
              >‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => Math.abs(p - currentPage) <= 2)
                .map((p) => (
                  <button
                    key={p}
                    onClick={() => onPageChange(p)}
                    className={`page-btn ${p === currentPage ? 'active' : ''}`}
                  >{p}</button>
                ))}
              <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >›</button>
              <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className="page-btn"
              >»</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DataTable;
