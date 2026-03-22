import React from 'react';

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
    <div className="card border shadow-sm">
      {/* Header */}
      <div className="card-header bg-white d-flex align-items-center justify-content-between flex-wrap gap-2 py-3">
        <h5 className="mb-0 fw-bold" style={{ fontFamily: 'Syne, sans-serif' }}>{title}</h5>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          <div className="search-box">
            <span className="search-icon">⌕</span>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="form-control form-control-sm search-input"
              style={{ width: 220, paddingLeft: 30 }}
            />
            {searchTerm && (
              <button className="clear-btn" onClick={() => onSearchChange('')}>✕</button>
            )}
          </div>
          <select
            className="form-select form-select-sm"
            style={{ width: 110 }}
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
          >
            {[5, 10, 20].map((s) => (
              <option key={s} value={s}>{s} / page</option>
            ))}
          </select>
        </div>
      </div>

      {/* Error */}
      {error && (
        <div className="alert alert-danger d-flex align-items-center gap-2 m-3 py-2">
          <span>⚠</span> {error}
        </div>
      )}

      {/* Loading */}
      {loading ? (
        <div className="d-flex flex-column align-items-center justify-content-center py-5 text-muted gap-3">
          <div className="spinner-border spinner-border-custom" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mb-0">Loading data...</p>
        </div>
      ) : (
        <>
          {/* Table */}
          <div className="table-responsive">
            <table className="table table-hover table-bordered mb-0">
              <thead className="table-light">
                <tr>
                  {columns.map((col) => (
                    <th key={col.key as string} className="text-uppercase fw-semibold text-muted"
                        style={{ fontSize: '0.72rem', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
                      {col.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan={columns.length} className="text-center text-muted py-5">
                      No results found.
                    </td>
                  </tr>
                ) : (
                  data.map((item) => (
                    <tr key={item.id}>
                      {columns.map((col) => (
                        <td key={col.key as string} style={{ fontSize: '0.875rem', maxWidth: 200, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {getCellValue(item, col)}
                        </td>
                      ))}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="card-footer bg-white d-flex align-items-center justify-content-between flex-wrap gap-2">
            <span className="text-muted" style={{ fontSize: '0.8rem' }}>
              Showing {totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1}–
              {Math.min(currentPage * pageSize, totalItems)} of {totalItems}
            </span>
            <div className="d-flex gap-1">
              <button onClick={() => onPageChange(1)} disabled={currentPage === 1} className="page-btn">«</button>
              <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="page-btn">‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter((p) => Math.abs(p - currentPage) <= 2)
                .map((p) => (
                  <button key={p} onClick={() => onPageChange(p)} className={`page-btn ${p === currentPage ? 'active' : ''}`}>
                    {p}
                  </button>
                ))}
              <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="page-btn">›</button>
              <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} className="page-btn">»</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DataTable;
